// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/nightOwlLight");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Frontend",
  tagline: "프론트엔드 장인이 되자!",
  url: "https://devpla.github.io",
  baseUrl: "/frontend/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "devpla", // Usually your GitHub org/user name.
  projectName: "frontend", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
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
        // 알골리아에서 appId를 제공하지 않았다면 'BH4D9OD16A' 코드를 사용하세요.
        appId: "P19FK0A5FI",

        // 공개 API 키: 커밋해도 문제가 생기지 않습니다.
        apiKey: "d35b20c9b080768ba5f6f360fa57a0d6",

        indexName: "frontend",

        // 옵션: 아래 문서를 참고
        contextualSearch: false,

        // // 옵션: history.push 대신 window.location을 통해 탐색해야 하는 도메인을 지정합니다. 여러 문서 사이트를 크롤링하고 window.location.href를 사용하여 해당 사이트로 이동하려는 경우에 유용한 알골리아 설정입니다.
        // externalUrlRegex: "external\\.com|domain\\.com",

        // 옵션: 알골리아 검색 파라미터
        searchParameters: {},

        //... 다른 알골리아 파라미터
      },
      navbar: {
        title: "Frontend",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://github.com/facebook/docusaurus",
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
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        switchConfig: {
          // Icon for the switch while in dark mode
          darkIcon: "light_mode",

          // CSS to apply to dark icon
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
