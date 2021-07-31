export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "damdaran-pak",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/Untitled-1.jpg" }],
    script: [
      // {src:'/name.js'}
      { src: "/js/jquery-3.5.1.min.js" },
      {
        src:
          "http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"
      },
      { src: "/js/bootstrap.min.js" },
      { src: "/js/jquery.ajaxchimp.min.js", defer: true },
      { src: "/js/jquery.magnific-popup.min.js", defer: true },
      { src: "/js/jquery.meanmenu.js", defer: true },
      { src: "/js/jquery.nice-select.min.js", defer: true },
      { src: "/js/jquery.appear.js", defer: true },
      { src: "/js/form-validator.min.js" },
      { src: "/js/odometer.min.js" },
      { src: "/js/popper.min.js" },
      { src: "/js/custom.js", defer: true },
      { src: "/js/contact-form-script.js", defer: true },
      { src: "/js/owl.carousel.min.js" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/bootstrap.rtl.min.css",
    "@/assets/css/boxicons.min.css",
    "@/assets/css/magnific-popup.min.css",
    "@/assets/css/meanmenu.css",
    "@/assets/css/nice-select.min.css",
    "@/assets/css/odometer.min.css",
    "@/assets/css/owl.carousel.min.css",
    "@/assets/css/owl.theme.default.min.css",
    "@/assets/css/responsive.css",
    "@/assets/css/rtl.css",
    "@/assets/css/style.css",
    "@/assets/css/Vazir-Regular-FD.css",
    "@/assets/css/W_tanin.css"
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // {src:'@/plugins/after-each.js'}
    { src: "@/plugins/vueCarousel.js", mode: "client" },
    { src: "@/plugins/vueCookie.js", mode: "client" },
    { src: "@/plugins/noty.js", mode: "client" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  ssr: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],
  axios: {
    // baseURL: "http://localhost:8000/api/frontend" // Used as fallback if no runtime config is provided
    baseURL: "https://panelaccess.damesabz.com/api/frontend" // Used as fallback if no runtime config is provided
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
