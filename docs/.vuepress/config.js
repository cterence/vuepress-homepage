module.exports = {
  title: "Térence Chateigné",
  description: "Landing page du site de Térence",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",

  themeConfig: {
    search: false,
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "Projects", link: "/projects/" },
      { text: "Guide", link: "/guide/" },
      { text: "GitHub", link: "https://github.com/cterence/vuepress-homepage" },
    ],
    sidebar: {
      "/guide/": genSidebarConfig("Guide"),
    },
    lastUpdated: "Last Updated",
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: (md) => {
      md.use(require("markdown-it-katex"));
    },
  },
};

function genSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: ["", "getting-started", "customize", "advanced"],
    },
  ];
}
