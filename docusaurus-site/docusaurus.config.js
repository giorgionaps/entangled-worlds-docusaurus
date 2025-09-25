// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Entangled World mod for Noita (Veronika Zvarych)',
  tagline: 'Documenting the Entangled Worlds mod for Noita',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
url: 'https://giorgionaps.github.io',
baseUrl: '/entangled-worlds-docusaurus/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'giorgionaps', // Usually your GitHub org/user name.
  projectName: 'entangled-worlds-docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:undefined,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
  
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
    navbar: {
      style: 'dark', 
      title: 'Home',
      logo: { alt: 'EW Logo', src: 'img/logo.svg' },
items: [
  { to: '/docs/intro', label: 'Docs', position: 'left' },
  { href: 'https://github.com/IntQuant/noita_entangled_worlds', label: 'Mod GitHub', position: 'right' },
  { href: 'https://github.com/<your-username>', label: 'My GitHub', position: 'right' },
],
    },
footer: {
  style: 'dark',
  // no `logo` here anymore
  links: [
    {
      title: ' ', // empty title so it doesn’t render a heading
      items: [
        {
      html: `
        <div class="footer-brand footer-brand--stacked">
<img src="/entangled-worlds-docusaurus/img/logo.svg" alt="Entangled Worlds" class="footer-brand__logo" />
          <p class="footer-desc">
            Docs & portfolio for <strong>Entangled Worlds</strong>, a Noita mod.<br/>
            Guides for players and contributors.
          </p>
        </div>
      `,
        },
      ],
    },
    {
      title: 'Docs',
      items: [{ label: 'Getting Started', to: '/docs/intro' }],
    },
    {
      title: 'Community',
      items: [
        { label: 'Noita Wiki', href: 'https://noita.wiki.gg/' },
        { label: 'Entangled Worlds (GitHub)', href: 'https://github.com/IntQuant/noita_entangled_worlds' },
        { label: 'Noita on Steam', href: 'https://store.steampowered.com/app/881100/Noita/' },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} Veronika Zvarych`,
},


    colorMode: { defaultMode: 'dark', respectPrefersColorScheme: true },
    }),
};

export default config;
