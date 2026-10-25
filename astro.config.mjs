import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import fs from "node:fs";

const navigation = JSON.parse(
  fs.readFileSync("./.generated/navigation.json", "utf8"),
);

export default defineConfig({
  site: "https://commentary.dev",
  base: "/docs",
  trailingSlash: "never",
  output: "static",
  build: { format: "file" },
  integrations: [
    starlight({
      title: "Commentary Docs",
      description:
        "Learn to review documents, collaborate with people and agents, and build with Commentary.",
      social: [
        {
          icon: "github",
          label: "Documentation source",
          href: "https://github.com/commentary-dev/commentary-docs",
        },
      ],
      editLink: {
        baseUrl: "https://github.com/commentary-dev/commentary-docs/edit/main/",
      },
      sidebar: navigation,
      customCss: ["./src/styles/docs.css"],
      components: {
        Head: "./src/components/DocsHead.astro",
        Header: "./src/components/DocsHeader.astro",
        Search: "./src/components/DocsSearch.astro",
      },
      // Index once after canonical URLs, filters and publication metadata are finalized.
      // The custom Search component remains enabled independently of this integration.
      pagefind: false,
      lastUpdated: true,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
    }),
  ],
});
