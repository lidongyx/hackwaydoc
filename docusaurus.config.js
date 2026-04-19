// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HackWay 技术学习路线 / Learning Paths',
  tagline:
    '面向大学生与程序员的系统化学习路线、资源与社区 / Structured learning paths, resources, and community for students and developers',
  url: 'https://hackway.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://hackweek-1251009918.cos.ap-shanghai.myqcloud.com/hackway/cs/ico.png',
  organizationName: 'hackway', // Usually your GitHub org/user name.
  projectName: 'hackway', // Usually your repo name.

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      'zh-Hans': {
        label: '中文',
        htmlLang: 'zh-CN',
      },
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/lidongyx/hackwaydoc/blob/master/',
        },
        blog: {
          showReadingTime: true,
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        gtag: {
          trackingID: 'G-TQK724W37H',
          anonymizeIP: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  scripts: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3564174644141518',
      async: true,
      crossorigin:"anonymous"
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'keywords', content: '编程,计算机专业,名校课程,CS名校,编程学习路线,计算机学习路径,自学编程'}],
      navbar: {
        title: '',
        logo: {
          alt: 'HackWay技术学习路线',
          src: 'https://hackweek-1251009918.cos.ap-shanghai.myqcloud.com/hackway/cs/hackway.png',
        },
        items: [
          {
            type: 'dropdown',
            label: '计算机专业 / CS',
            position: 'left',
            items:[ {
              to: 'docs/cs/intro',
              label: '六大CS名校 / Top CS Schools',

            },
            {
              to: 'docs/math/intro',
              label: '大学数学 / Math',
            },
            {
              to: 'docs/ai/intro',
              label: '人工智能 / AI',
            },
            ]
          },

          {
            type: 'dropdown',
            label: '职业方向 / Careers',
            position: 'left',
            items: [
              {
                to: 'docs/java/intro',
                label: 'Java后端 / Java Backend',
              },
              {
                to: 'docs/cpp/intro',
                label: 'C++开发 / C++',
              },
              {
                to: 'docs/js/intro',
                label: 'JS/TS前端 / JS/TS Frontend',
              },
              {
                to: 'docs/devops/intro',
                label: '运维工程师 / DevOps',
              },
     

            ],
          },
          {
            type: 'dropdown',
            label: '资源与经验 / Resources',
            position: 'left',
            items: [
              {
                to: 'docs/source/intro',
                label: '资源工具 / Tools',
              },  
              {
                to: 'docs/expert/intro',
                label: '大佬经验 / Expert Notes',
              },
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} HackWay 技术学习路线 / Learning Paths`,
      },
      prism: {
        theme: prismThemes.vsDark,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['java'],
      },
      announcementBar: {
        id: 'support_us',
        content:
          '🐝 技术交流群 / Community: <a target="_blank" rel="noopener noreferrer" href="https://hackway.org/qrcode">加入交流群 / Join the group</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
      // googleAdsense: {
      //   dataAdClient: 'ca-pub-3564174644141518',
      // },
    }),
  // plugins: ['docusaurus-plugin-google-adsense'],
};


export default config;
