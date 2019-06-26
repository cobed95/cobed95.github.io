export default {
  env: {},
  head: {
    title: "cobed95.github.io",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Personal website of Eundo Lee" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  loading: { color: "#3B8070" },
  css: ["~/assets/css/main.css"],
  build: {},
  modules: [
    "@nuxtjs/axios",
  ],
  axios: {}
}
