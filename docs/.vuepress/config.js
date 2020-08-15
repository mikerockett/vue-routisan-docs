const { description } = require('../../package')

module.exports = {
  title: 'Vue Routisan 3 Alpha',
  description,

  head: [
    ['meta', { name: 'theme-color', content: '#009BDE' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    repo: 'https://github.com/mikerockett/vue-routisan',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'getting-started',
            'view-resolution',
            'basic-routes',
            'redirects-fallbacks',
            'parameter-matching',
            'route-options',
            'nesting-routes',
            'grouping-routes',
            'grouping-and-nesting-routes',
            'navigation-guards',
            'definition-helpers',
          ]
        }
      ],
    }
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
