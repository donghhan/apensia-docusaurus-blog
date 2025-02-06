import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: ["intro", { type: "category", label: "CSS", items: ["css/index"] }],
  backend: [{ type: "autogenerated", dirName: "." }],
};

export default sidebars;
