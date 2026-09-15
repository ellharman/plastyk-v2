import { defineConfig } from "vite";
import vinext from "vinext";
import { cloudflare } from "@cloudflare/vite-plugin";
import { kvDataAdapter } from "@vinext/cloudflare/cache/kv-data-adapter";
import { cdnAdapter } from "@vinext/cloudflare/cache/cdn-adapter";
import { imagesOptimizer } from "@vinext/cloudflare/images/images-optimizer";
import path from "path";

export default defineConfig({
  server: {host: "0.0.0.0"},
  plugins: [
    vinext({
      cache: { data: kvDataAdapter(), cdn: cdnAdapter() },
      images: { optimizer: imagesOptimizer() },
      prerender: { routes: "*" },
    }),
    cloudflare({
      viteEnvironment: {
        name: "rsc",
        childEnvironments: ["ssr"],
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: /^use-sync-external-store\/shim(?:\/index\.js)?$/,
        replacement: path.resolve(__dirname, "use-sync-external-store-shim.ts"),
      },
      {
        find: /^use-sync-external-store\/shim\/with-selector(?:\.js)?$/,
        replacement: path.resolve(
          __dirname,
          "use-sync-external-store-with-selector-shim.ts"
        ),
      },
    ],
  },
  optimizeDeps: {
    include: [
      "use-sync-external-store/shim",
      "use-sync-external-store/shim/index.js",
      "use-sync-external-store/with-selector",
      "use-sync-external-store/with-selector.js",
    ],
  },
});