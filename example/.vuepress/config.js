module.exports = {
  title: "Site Name",
  description: "Site Description goes here",
  theme: require.resolve("../../"),
  themeConfig: {
    summary: true,
    nav: [
      {
        text: "Home",
        link: "/",
        icon: "el-icon-house"
      },
      {
        text: "About",
        link: "/about/",
        icon: "el-icon-user"
      },
      {
        text: "Projects",
        link: "/projects/",
        icon: "el-icon-folder"
      }
    ],
    sitemap: true, // enables sitemap plugin
    hostname: "https://ahmadmostafa.com/", // required for sitemap
    disqus: "disquswebsiteshortname", // if you want to incorporate Disqus for comments replace this value else just get rid of it
    socialShare: true, // enables social share
    socialShareNetworks: ["facebook", "twitter"], // required for social share plugin
    googleAnalytics: "", // Google Analytics tracking ID
    about: {
      fullName: "Ahmad Mostafa",
      bio: "I am a passionate Software Engineer, I love Vue.js ♥ ...",
      image: "https://www.ahmadmostafa.com/images/bg_1.png"
    },
    footer: {
      contact: [
        {
          type: "github",
          link: "#"
        },
        {
          type: "instagram",
          link: "#"
        },
        {
          type: "linkedin",
          link: "#"
        },
        {
          type: "twitter",
          link: "#"
        }
      ],
      copyright: [
        {
          text: "Privacy Policy",
          link: "https://policies.google.com/privacy?hl=en-US"
        },
        {
          text: "Copyright © 2020 SantDas",
          link: ""
        }
      ]
    }
  }
};