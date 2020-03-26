const Auth = require('vuepress-auth0'); 

module.exports = {
  head: [
    ['script', { src: 'https://code.jquery.com/jquery-3.4.1.min.js' }],
    ['link', { rel: 'stylesheet', href: '/theme/index.css' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }], 
    ['meta', { name: 'theme-color', content: '#fff' }], 
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }], 
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'white' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#3eaf7c' }], 
    ['meta', { name: 'msapplication-TileImage', content: '/mstile-150x150.png' }], 
    ['meta', { name: 'msapplication-TileColor', content: '#fff' }],
    ['script', { src: '/protect.js' }]
  ],
  plugins: [ 
    [ '@vuepress/pwa', 
      { 
        serviceWorker: true,
        updatePopup: { 
          message: "Content Updated.",
          buttonText: "Refresh"
        }
      } 
    ],
    ['copyright',
      {
        noCopy: true,
        noSelect: true,
        minLength: 5,
       }
    ],
    [ 'vuepress-plugin-mailchimp', 
      { 
        endpoint: 'https://santdas.us19.list-manage.com/subscribe/post?u=71d679c6a39869fde4e46c635&amp;id=2ca318da1e' 
      } 
    ],
    [Auth, { 
        domain: 'vuetest36.auth0.com', 
        redirectUri: 'https://stoic-gates-d38a79.netlify.com/callback.html',
        clientID: 'nhdYSDCI905iA6vpWomMhL8uHL88c3eu',
    }],
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
        text: "Categories",
        link: "/category/",
        icon: "el-icon-collection"
      },
      {
        text: "Articles",
        link: "/article/",
        icon: "el-icon-document"
      },
      {
        text: "Contact",
        link: "/contact/",
        icon: "el-icon-phone-outline"
      }
    ],
    sitemap: true, // enables sitemap plugin
    hostname: "https://ahmadmostafa.com/", // required for sitemap
    disqus: "disquswebsiteshortname", // if you want to incorporate Disqus for comments replace this value else just get rid of it
    socialShare: true, // enables social share
    socialShareNetworks: ["facebook", "twitter", "whatsapp", "telegram"], // required for social share plugin
    googleAnalytics: "", // Google Analytics tracking ID
    about: {
      fullName: "What do we have here...",
      bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas",
      image: ""
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