// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/nightOwlLight");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Today I Learned",
  tagline: "프론트엔드 장인이 되는 그날까지 🤗",
  url: "https://devpla.github.io",
  baseUrl: "/TIL/",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "devpla", // Usually your GitHub org/user name.
  projectName: "TIL", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      algolia: {
        appId: "P19FK0A5FI",
        apiKey: "d35b20c9b080768ba5f6f360fa57a0d6",
        indexName: "frontend",
        contextualSearch: false,
        searchParameters: {},
      },
      navbar: {
        title: "Today I Learned",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },
        items: [
          {
            position: "left",
            label: "Frontend",
            to: "docs/frontend/intro",
          },
          {
            position: "left",
            label: "Backend",
            to: "docs/backend/intro",
          },
          {
            position: "left",
            label: "CS",
            to: "docs/CS/intro",
          },
          {
            position: "left",
            label: "Etc",
            items: [{ label: "infra", to: "docs/etc/infra/intro" }],
          },
          {
            href: "https://github.com/devpla/TIL",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Frontend",
                to: "/docs/frontend/intro",
              },
              {
                label: "Backend",
                to: "/docs/backend/intro",
              },
              {
                label: "CS",
                to: "/docs/CS/intro",
              },
              {
                label: "Etc",
                to: "/docs/etc/intro",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/devpla/",
              },
              {
                label: "Blog",
                href: "https://hing9u.tistory.com/",
              },
            ],
          },
        ],
        copyright: `Copyright ${new Date().getFullYear()} Devpla. Built with Docusaurus💜`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        switchConfig: {
          darkIcon: "light_mode",
          darkIconStyle: {
            fontFamily: "Material Icons",
          },
          lightIcon: "dark_mode",
          lightIconStyle: {
            fontFamily: "Material Icons",
          },
        },
      },
    },
};

module.exports = config;
