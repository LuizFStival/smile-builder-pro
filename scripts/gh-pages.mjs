import { promises as fs } from "node:fs";
import path from "node:path";

const clientDir = path.join(process.cwd(), "dist", "client");

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const indexHtmlPath = path.join(clientDir, "index.html");
  if (!(await fileExists(indexHtmlPath))) {
    throw new Error(
      "Missing dist/client/index.html. Enable TanStack Start prerendering for GitHub Pages builds."
    );
  }

  await fs.copyFile(indexHtmlPath, path.join(clientDir, "404.html"));
  await fs.writeFile(path.join(clientDir, ".nojekyll"), "", "utf8");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
