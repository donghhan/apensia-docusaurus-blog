import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { remarkCodeHike, recmaCodeHike } from "codehike/mdx";

const chConfig = {
  components: { code: "MyCode" },
  syntaxHighlighting: {
    theme: "github-dark",
  },
};

const config: Config = {
  title: "Apensia Devblog",
  tagline: "Welcome to Apensia Devblog",
  favicon: "img/favicon.ico",
  url: "https://apensiablog.dev",
  baseUrl: "/",
  organizationName: "donghhan",
  projectName: "Apensia Devblog",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: ["plugin-image-zoom"],
  presets: [
    [
      "classic",
      {
        docs: {
          beforeDefaultRemarkPlugins: [[remarkCodeHike, chConfig]],
          recmaPlugins: [[recmaCodeHike, chConfig]],
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: ["@docusaurus/theme-mermaid"],
  markdown: {
    mermaid: true,
  },
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
    },
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Apensia Devblog",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Letha",
        },
        {
          type: "docSidebar",
          sidebarId: "sfm",
          position: "left",
          label: "SFM",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/donghhan/apensia-docusaurus-blog",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    metadata: [
      { name: "Apensia Devblog", content: "Apensia personal developer blog" },
    ],
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Apensia Devblog, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    imageZoom: {
      selector: ".markdown img",
      options: {
        margin: 24,
        background: "#BADA55",
        scrollOffset: 0,
        container: "#zoom-container",
        template: "#zoom-template",
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
