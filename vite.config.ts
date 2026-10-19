import { defineConfig } from "vite-plus";

export default defineConfig({
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
  fmt: {
    printWidth: 80,
    sortImports: {
      newlinesBetween: true,
      customGroups: [
        { groupName: "component", elementNamePattern: ["**/*.astro"] },
      ],
      groups: [
        "type",
        ["builtin", "external"],
        "component",
        ["internal", "subpath", "parent", "sibling", "index"],
        "style",
        "unknown",
      ],
    },
    sortTailwindcss: true,
    sortPackageJson: false,
    astro: {},
    associations: [
      {
        files: ["*.astro"],
        language: "astro",
      },
    ],
    ignorePatterns: [],
  },
});
