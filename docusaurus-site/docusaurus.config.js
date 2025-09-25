// @ts-check
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {themes as prismThemes} from 'prism-react-renderer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Entangled World mod for Noita (Veronika Zvarych)',
  tagline: 'Documenting the Entangled Worlds mod for Noita',
  favicon: 'img/favicon.ico',

  future: { v4: true },

  url: 'https://giorgionaps.github.io',
  baseUrl: '/entangled-worlds-docusaurus/',
  organizationName: 'giorgionaps',
  projectName: 'entangled-worlds-docusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          // ✅ Robust on Windows + ESM:
          sidebarPath: path.resolve(__dirname, 'sidebars.js'),
          // routeBasePath: 'docs',
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          feedOptions: { type: ['rss', 'atom'], xslt: true },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: { customCss: './src/css/custom.css' },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        style: 'dark',
        title: 'Home',
        logo: { alt: 'EW Logo', src: 'img/logo.svg' },
        items: [
          { type: 'docSidebar', sidebarId: 'tutorialSidebar', label: 'Docs', position: 'left' },
          { href: 'https://github.com/IntQuant/noita_entangled_worlds', label: 'Mod GitHub', position: 'right' },
          { href: 'https://github.com/<your-username>', label: 'My GitHub', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: ' ',
            items: [
              {
                html: `
        <div class="footer-brand footer-brand--stacked">
          <img src="img/logo.svg" alt="Entangled Worlds" class="footer-brand__logo" />
          <p class="footer-desc">
            Docs & portfolio for <strong>Entangled Worlds</strong>, a Noita mod.<br/>
            Guides for players and contributors.
          </p>
        </div>
      `,
              },
            ],
          },
          { title: 'Docs', items: [{ label: 'Getting Started', to: '/docs/install' }] },
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
