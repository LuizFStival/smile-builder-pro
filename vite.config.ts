// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const base =
  isGitHubPages && repoName ? `/${repoName}/` : "/";
const routerBasepath = base === "/" ? "" : base.replace(/\/$/, "");

export default defineConfig({
  cloudflare: isGitHubPages ? false : undefined,
  vite: {
    base,
  },
  tanstackStart: {
    router: {
      basepath: routerBasepath,
    },
    prerender: {
      enabled: isGitHubPages,
    },
    pages: isGitHubPages
      ? [
          {
            path: "/",
            prerender: {
              outputPath: "/index.html",
            },
          },
        ]
      : [],
  },
});
