const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
 head: {
  title: 'Snipcart website',
  meta: [{
      charset: 'utf-8'
    },
    {
      httpEquiv: 'X-UA-Compatible',
      content: 'IE=edge'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      name: 'description',
      content: 'Snipcart is a flexible shopping cart platform for developers'
    },
    {
      name: 'author',
      content: 'Irene Mercy'
    },
    {
      name: 'msapplication-TileColor',
      content: '#ffffff'
    },
    {
      name:'description',
      content:'Add a shopping cart to your site in minutes.'
    },
    {
      property:'og:url',
      content: 'https://snipcart.com/'
    },
    {
      property:'og:type',
      content: 'website'
    },
    {
      property: 'og:title',
      content: 'Snipcart: Shopping Cart Solution - Add a Cart to Any Site in Minutes'
    },
    {
      property: '"og:description',
      content: 'Add a shopping cart to your site in minutes. Works with any site builder, CMS, and framework.'
    
    },
    {
      property:'og:site_name',
      content:'A Shopping Cart Solution for Any Website'
    },

    /* {
      name: 'msapplication-TileImage',
      content: '/images/favicons/ms-icon-144x144.png'
    }, */
    {
      name: 'theme-color',
      content: '#ffffff'
    }
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css'
    },
    {
      rel: 'stylesheet',
      type: 'text/css',
      href: 'https://fonts.googleapis.com/css?family=Lato:400,300,700'
    },
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/hybrid.min.css'
    },
    {
      rel: 'stylesheet',
      href: '/css/site.css'
    },
    {
      id:'snipcart-theme',
      type: 'text/css',
      rel: 'stylesheet',
      href: 'themes/2.0/base/snipcart.min.css'
    },
    {
      rel:'canonical',
      href:'snipcart_default_2.html'

    }


  ],
  script: [
    {
      src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js',
      src:'https://snipcart.com/assets/all.js',
      src: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js',
      src:'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/languages/go.min.js',
      src: 'scripts/2.0/snipcart.js'
    },
    /* {
      src: '/js/all.js'
    } */
  ]
},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
