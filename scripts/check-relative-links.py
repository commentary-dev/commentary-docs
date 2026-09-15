from __future__ import annotations

import re
from pathlib import Path
from urllib.parse import unquote, urlsplit


DOCS_ROOT = Path(__file__).resolve().parents[1] / "docs"
LINK_RE = re.compile(r"!?\[[^\]]*\]\(([^)]+)\)")


def target_path(source: Path, raw_target: str) -> Path | None:
    target = raw_target.strip().split(maxsplit=1)[0].strip("<>")
    parsed = urlsplit(target)
    if not parsed.path or parsed.scheme or parsed.netloc or target.startswith("#"):
        return None
    return (source.parent / unquote(parsed.path)).resolve()


def main() -> int:
    failures: list[str] = []
    for source in sorted(DOCS_ROOT.rglob("*.md")):
        for raw_target in LINK_RE.findall(source.read_text(encoding="utf-8")):
            target = target_path(source, raw_target)
            if target is None:
                continue
            try:
                target.relative_to(DOCS_ROOT.resolve())
            except ValueError:
                failures.append(f"{source.relative_to(DOCS_ROOT)}: link escapes docs root: {raw_target}")
                continue
            if not target.exists():
                failures.append(f"{source.relative_to(DOCS_ROOT)}: missing {raw_target}")
    if failures:
        print("\n".join(failures))
        return 1
    print("All relative documentation links resolve.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
