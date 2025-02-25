// @ts-check
// Docusaurus Configuration for Troubleshooting Docs

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BCA Troubleshooting Docs',
  tagline: 'Resolve Issues Quickly',
  favicon: 'img/favicon.ico',

  url: 'https://anaritagomes.github.io',
  baseUrl: '/troubleshooting-docusaurus/',
  organizationName: 'anaritagomes', 
  projectName: 'troubleshooting-docusaurus', 
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/anaritagomes/troubleshooting-docusaurus/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  // 🔹 Add this to enable Mermaid.js
  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'BCA Troubleshooting Docs',
      logo: { alt: 'Troubleshooting Logo', src: 'img/logo.svg' },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{ label: 'Troubleshooting Guide', to: '/docs/troubleshooting' }],
        },
        {
          title: 'Community',
          items: [{ label: 'GitHub', href: 'https://github.com/anaritagomes/troubleshooting-docusaurus' }],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Troubleshooting Docs. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // 🔹 Add Mermaid theme configuration
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' }, 
    },
  },
};

export default config;
