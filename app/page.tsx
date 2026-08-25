import { readFileSync } from "node:fs";
import { join } from "node:path";

/** Home page renders the single-file Vesper.ai landing page. */
export default function Home() {
  const html = readFileSync(join(process.cwd(), "index.html"), "utf8");

  return (
    <iframe
      srcDoc={html}
      title="Vesper.ai — Operational AI Infrastructure"
      style={{ width: "100vw", height: "100dvh", border: 0, display: "block", background: "#000" }}
    />
  );
}
