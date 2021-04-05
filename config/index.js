const siteMetadata = {
  siteUrl: "https://dev.buzzing.cc",
  author: `Buzzing.cc`,
  locale: "zh",
  title: "Dev.to 热门",
  shortTitle: "Dev热门",
  description: "用中文浏览Dev.to热门技术文章",
  keywords: ["buzzing", "dev.to", "程序员", "技术", "技术社区"],
  telegram: "@buzzingcc",
  telegram_chat_id: "-1001406368978",
  menuLinks: [
    // {
    //   name: "每周精选",
    //   url: "/issues",
    // },
    // {
    //   name: "RSS",
    //   url: "/rss.xml",
    //   prefetch: false,
    // },
  ],
  subscriptions: [
    {
      name: "Twitter @buzzingcc",
      url: "https://twitter.com/buzzingcc",
      external: true,
    },
    {
      name: "Telegram @buzzingcc",
      url: "https://t.me/buzzingcc",
      external: true,
    },
    {
      name: "RSS",
      url: "/rss.xml",
      prefetch: false,
    },
  ],
  social: [
    {
      name: `Dev.to`,
      url: `https://dev.to`,
      external: true,
    },
    {
      name: `Buzzing`,
      url: `https://www.buzzing.cc/`,
      external: true,
    },
  ],
  localize: [
    {
      locale: "en",
      title: `Buzzing on Dev.to`,
      shortTitle: "BuzzDev",
      description: `See what's buzzing on Dev.to in your native language`,
      keywords: ["buzzing", "dev","dev.to"],
      menuLinks: [
        // {
        //   name: "Weekly Selection",
        //   url: "/en/issues",
        // },
        // {
        //   name: "RSS",
        //   url: "/en/rss.xml",
        //   prefetch: false,
        // },
      ],
    },
    {
      locale: "zh-Hant",
      title: "Dev.to 熱門",
      shortTitle: "Dev熱門",
      description: "用中文瀏覽Dev.to熱門技術文章",
      keywords: ["buzzing", "dev.to", "程序員", "技術", "技術社區"],
      menuLinks: [
        // {
        // name: "每週精選",
        // url: "/zh-Hant/issues",
        // },
        // {
        //   name: "RSS",
        //   url: "/zh-Hant/rss.xml",
        //   prefetch: false,
        // },
      ],
    },
  ],
};

module.exports = {
  siteMetadata,
};
