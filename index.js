const removeMd = require("remove-markdown");

module.exports = (themeConfig, ctx) => {
  themeConfig = Object.assign(themeConfig, {
    summary: !!themeConfig.summary,
    summaryLength:
      typeof themeConfig.summaryLength === "number"
        ? themeConfig.summaryLength
        : 300,
    pwa: !!themeConfig.pwa
  });

  themeConfig.heroImage =
    themeConfig.heroImage || "/images/hero.jpeg";

  const defaultBlogPluginOptions = {
    directories: [
      {
        id: "post",
        dirname: "_posts",
        path: "/post/",
        title: "Articles",
        // layout: 'IndexPost', defaults to `Layout.vue`
        itemLayout: "Post",
        frontmatter: { title: "Articles" },
        itemPermalink: "/post/:year/:month/:day/:slug",
        pagination: {
          lengthPerPage: 6
        }
      }
    ],
    frontmatters: [
      {
        id: "tag",
        keys: ["tag", "tags"],
        path: "/tag/",
        title: "Category",
        // layout: 'Tag',  defaults to `FrontmatterKey.vue`
        frontmatter: { title: "Category" },
        pagination: {
          lengthPerPage: 6
        }
      }
    ]
  };

  const { modifyBlogPluginOptions } = themeConfig;

  const blogPluginOptions =
    typeof modifyBlogPluginOptions === "function"
      ? modifyBlogPluginOptions(defaultBlogPluginOptions)
      : defaultBlogPluginOptions;

  const plugins = [
    "disqus",
    "seo",
    "reading-time",
    "smooth-scroll",
    "reading-progress",
    "vuepress-auth0",
    "@vuepress/medium-zoom",
    "@vuepress/nprogress",
    "@vuepress/back-to-top",
    ["@vuepress/blog", blogPluginOptions],
    [
      "@vuepress/search",
      {
        searchMaxSuggestions: 10
      }
    ]
  ];

  if (themeConfig.sitemap && themeConfig.hostname) {
    plugins.push([
      "sitemap",
      {
        hostname: themeConfig.hostname
      }
    ]);
  }

  if (themeConfig.googleAnalytics) {
    plugins.push([
      "@vuepress/google-analytics",
      {
        ga: themeConfig.googleAnalytics
      }
    ]);
  }

  if (themeConfig.pwa) {
    plugins.push([
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true
      }
    ]);
  }

  const config = {
    plugins,
    define: {
      THEME_BLOG_PAGINATION_COMPONENT: themeConfig.paginationComponent
        ? themeConfig.paginationComponent
        : "Pagination"
    }
  };

  /**
   * Generate summary.
   */
  if (themeConfig.summary) {
    config.extendPageData = function(pageCtx) {
      const strippedContent = pageCtx._strippedContent;
      if (!strippedContent) {
        return;
      }
      pageCtx.summary =
        removeMd(
          strippedContent
            .trim()
            .replace(/^#+\s+(.*)/, "")
            .slice(0, themeConfig.summaryLength)
        ) + " ...";
    };
  }

  return config;
};
