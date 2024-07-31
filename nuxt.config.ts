// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head:{
      title: "NUXT DOJO",
      meta: [
        {name : 'description', content:'Everything in Nuxt 3.12.4'}
      ],
      link:[
        {rel:'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
  runtimeConfig:{
    currencyKey: process.env.CURRENCY_API_KEY
  }
})
