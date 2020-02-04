module.exports = {
  title: "mise-en-place",
  description: "A collection of layout primitives for building Vue.js apps.",
  // extend: "@vuepress/theme-default",
  base: "/mise-en-place/",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    logo:
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/232/bento-box_1f371.png",
    repo: "phillipcurl/mise-en-place",
    editLinks: true,
    smoothScroll: true,
    nav: [
      // { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Components", link: "/components/" }
      // { text: "External", link: "https://google.com" }
    ],
    sidebar: {
      // '/api/': getApiSidebar(),
      "/guide/": getGuideSidebar(),
      "/components/": getComponentsSidebar()
      // '/plugin/': getPluginSidebar('Plugin', 'Introduction', 'Official Plugins'),
      // '/theme/': getThemeSidebar('Theme', 'Introduction'),
    },
    sidebarDepth: 2
    // sidebar: "auto"
  },
  extraWatchFiles: [
    "../../src/**" // Relative path usage
  ]
  // plugins: [
  //   [
  //     "@vuepress/register-components",
  //     {
  //       components: [
  //         {
  //           name: "PageLayout",
  //           path: "./../../src/lib/Layout/Layout.vue"
  //         },
  //         {
  //           name: "Grid",
  //           path: "./../../src/lib/Grid/Grid.vue"
  //         }
  //       ]
  //     }
  //   ]
  // ]
};

function getGuideSidebar() {
  return [
    {
      title: "Guide",
      collapsable: false,
      children: [
        "",
        "getting-started",
        "config",
        "principles",
        "css-prop",
        "examples"
        // 'markdown',
        // 'using-vue',
        // 'i18n',
        // 'deploy',
      ]
    }
    // {
    //   title: groupB,
    //   collapsable: false,
    //   children: [
    //     'frontmatter',
    //     'permalinks',
    //     'markdown-slot',
    //     'global-computed'
    //   ]
    // }
  ];
}

function getComponentsSidebar() {
  return [
    {
      title: "Layout",
      collapsable: true,
      children: [
        "",
        "layout/aspect-ratio",
        "layout/box",
        "layout/container",
        "layout/cover",
        "layout/grid",
        "layout/horizontal-scroll",
        "layout/hstack",
        "layout/inline",
        "layout/layout-wrapper",
        "layout/spacer",
        "layout/vstack"
      ]
    },
    {
      title: "Content",
      collapsable: true,
      children: ["", "content/base-text", "content/heading"]
    },
    {
      title: "Interactive",
      collapsable: true,
      children: ["", "interactive/button", "interactive/generic"]
    }
  ];
}
