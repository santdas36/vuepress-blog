module.exports = {
  head: [ 
    ['link', { rel: 'icon', href: '/logo.png' }], 
    ['link', { rel: 'manifest', href: '/manifest.json' }], 
    ['meta', { name: 'theme-color', content: '#3eaf7c' }], 
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }], 
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }], 
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }], 
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }], 
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }], 
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }] 
  ],
  pwa: true,
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