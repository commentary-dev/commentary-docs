const slug = (value) =>
  value
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
const cell = (value) =>
  String(value ?? "")
    .replaceAll("|", "\\|")
    .replace(/\r?\n/g, " ")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
export const referenceSlug = slug;
export function schemaType(schema = {}) {
  if (schema.$ref) {
    const name = schema.$ref.split("/").at(-1);
    return schema.$ref.startsWith("#/components/schemas/")
      ? `[${name}](/docs/reference/schemas/${slug(name)})`
      : `\`${name}\``;
  }
  if (schema.const !== undefined)
    return `\`${cell(JSON.stringify(schema.const))}\``;
  if (schema.enum)
    return schema.enum
      .map((value) => `\`${cell(JSON.stringify(value))}\``)
      .join(" · ");
  if (schema.oneOf || schema.anyOf)
    return (schema.oneOf || schema.anyOf).map(schemaType).join(" or ");
  if (schema.allOf) return schema.allOf.map(schemaType).join(" + ");
  if (schema.type === "array") return `array of ${schemaType(schema.items)}`;
  return cell(
    Array.isArray(schema.type)
      ? schema.type.join(" or ")
      : schema.type || "object",
  );
}
function resolve(schema, document) {
  return schema?.$ref
    ? document.components?.schemas?.[schema.$ref.split("/").at(-1)] || schema
    : schema || {};
}
export function propertyTable(input, document) {
  const schema = resolve(input, document);
  if (!schema.properties)
    return schema.oneOf || schema.anyOf || schema.allOf
      ? `Accepted structure: ${schemaType(schema)}. Follow the linked schemas for each variant.`
      : `Value type: ${schemaType(schema)}.`;
  const required = new Set(schema.required || []);
  return [
    "| Field | Type | Required | Description |",
    "| --- | --- | --- | --- |",
    ...Object.entries(schema.properties).map(
      ([name, value]) =>
        `| \`${cell(name)}\` | ${schemaType(value)} | ${required.has(name) ? "Yes" : "No"} | ${cell([value.description, value.format ? `Format: ${value.format}.` : null, value.minLength != null ? `Minimum length: ${value.minLength}.` : null, value.maxLength != null ? `Maximum length: ${value.maxLength}.` : null].filter(Boolean).join(" "))} |`,
    ),
  ].join("\n");
}
export function operationContent(endpoint, method, operation, document) {
  const security = operation.security ?? document.security ?? [];
  const scopes = [
    ...new Set(security.flatMap((entry) => Object.values(entry).flat())),
  ];
  const parameters = (operation.parameters || []).map((p) =>
    p.$ref
      ? document.components?.parameters?.[p.$ref.split("/").at(-1)] || p
      : p,
  );
  const body = operation.requestBody?.$ref
    ? document.components?.requestBodies?.[
        operation.requestBody.$ref.split("/").at(-1)
      ]
    : operation.requestBody;
  const content = body?.content || {};
  const bodySchema = content["application/json"]?.schema;
  const lines = [
    `\`${method.toUpperCase()} ${endpoint}\``,
    operation.description || operation.summary || "",
    "## Access",
    security.length
      ? `Use a credential with ${scopes.length ? scopes.map((s) => `\`${s}\``).join(", ") : "the authentication scheme documented in the API contract"}.`
      : "This operation does not declare a credential requirement in the released API contract.",
    "Provider access, workspace membership, and agent grants are enforced separately. A token does not expand access to a repository or resource. [Set up developer access](/docs/build/developer-access).",
  ];
  if (parameters.length)
    lines.push(
      "## Parameters",
      [
        "| Name | Location | Type | Required | Description |",
        "| --- | --- | --- | --- | --- |",
        ...parameters.map(
          (p) =>
            `| \`${cell(p.name)}\` | ${cell(p.in)} | ${schemaType(p.schema)} | ${p.required ? "Yes" : "No"} | ${cell(p.description)} |`,
        ),
      ].join("\n"),
    );
  if (body) {
    lines.push(
      "## Request body",
      `${body.required ? "Required" : "Optional"}. Supported content types: ${Object.keys(
        content,
      )
        .map((t) => `\`${t}\``)
        .join(", ")}.`,
    );
    if (bodySchema) lines.push(propertyTable(bodySchema, document));
    if (body.description) lines.push(body.description);
  }
  const escapedEndpoint = endpoint.replace(/\{([^}]+)\}/g, "<$1>");
  const curl = [
    `curl --request ${method.toUpperCase()} \\`,
    `  'https://commentary.dev${escapedEndpoint}'${security.length || body ? " \\" : ""}`,
    ...(security.length
      ? [`  --header 'Authorization: Bearer <your-token>'${body ? " \\" : ""}`]
      : []),
    ...(body
      ? [
          `  --header 'Content-Type: ${Object.keys(content)[0] || "application/json"}' \\`,
          "  --data-binary @request.json",
        ]
      : []),
  ].join("\n");
  lines.push(
    "## Call the endpoint",
    "Replace path placeholders and your credential. For body operations, create `request.json` using the required fields above; this command does not invent resource identifiers or consent.",
    `\`\`\`bash\n${curl}\n\`\`\``,
    "## Responses",
    [
      "| Status | Meaning | Payload |",
      "| --- | --- | --- |",
      ...Object.entries(operation.responses || {}).map(
        ([code, r]) =>
          `| \`${code}\` | ${cell(r.description)} | ${r.content?.["application/json"]?.schema ? schemaType(r.content["application/json"].schema) : "See response headers or body contract"} |`,
      ),
    ].join("\n"),
  );
  const success = Object.entries(operation.responses || {}).find(([code]) =>
    /^2\d\d$/.test(code),
  );
  if (success?.[1].content?.["application/json"]?.schema)
    lines.push(
      "### Successful response fields",
      propertyTable(success[1].content["application/json"].schema, document),
    );
  lines.push(
    "## Recover from errors",
    "Use the returned status and error body. Correct invalid fields before retrying; reconnect or narrow the target for authentication and permission errors. For conditional writes, reload the latest version before preparing a new request. Respect rate-limit headers and retry only when the operation’s idempotency contract permits it.",
    "## Contract and related guidance",
    `Operation ID: \`${operation.operationId || slug(`${method}-${endpoint}`)}\`. [Download the OpenAPI contract](/docs/reference/openapi.json) for complete constraints and code generation. [Browse endpoints](/docs/reference/api-operations).`,
  );
  return lines.join("\n\n");
}
