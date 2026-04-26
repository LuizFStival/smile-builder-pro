import { promises as fs } from "node:fs";
import path from "node:path";

const clientDir = path.join(process.cwd(), "dist", "client");
const assetsDir = path.join(clientDir, "assets");

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function findEntryJs(jsFiles) {
  for (const file of jsFiles) {
    const fullPath = path.join(assetsDir, file);
    const contents = await fs.readFile(fullPath, "utf8");
    if (contents.includes("hydrateRoot")) return file;
  }
  return jsFiles[0] ?? null;
}

async function main() {
  if (!(await fileExists(assetsDir))) {
    throw new Error(`Missing build output at ${assetsDir}`);
  }

  const assetFiles = await fs.readdir(assetsDir);
  const cssFiles = assetFiles.filter((f) => f.endsWith(".css")).sort();
  const jsFiles = assetFiles.filter((f) => f.endsWith(".js")).sort();

  const entryJs = await findEntryJs(jsFiles);
  if (!entryJs) {
    throw new Error(`No JS assets found in ${assetsDir}`);
  }

  const cssLinks = cssFiles
    .map((f) => `<link rel="stylesheet" href="./assets/${f}" />`)
    .join("\n    ");

  const html = `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Dra. Giullia Campioni | Cirurgiã Dentista</title>
    ${cssLinks}
  </head>
  <body>
    <script type="module" src="./assets/${entryJs}"></script>
  </body>
</html>
`;

  await fs.writeFile(path.join(clientDir, "index.html"), html, "utf8");
  await fs.writeFile(path.join(clientDir, "404.html"), html, "utf8");
  await fs.writeFile(path.join(clientDir, ".nojekyll"), "", "utf8");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

