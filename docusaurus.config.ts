import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Vassant',
  tagline: 'Documentation and updates',
  favicon: 'img/logo.png',

  future: {
    v4: true,
  },

  url: 'https://docs.vassantfinance.com',
  baseUrl: '/',

  organizationName: 'vassantfinance',
  projectName: 'docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Google Analytics 4 with Consent Mode v2.
  // We inject gtag manually (instead of the preset `gtag` option) so the
  // consent defaults run BEFORE the config command. Analytics storage
  // defaults to 'denied'; the consent banner (src/theme/Root.tsx) flips it
  // to 'granted' and writes a `va_consent` cookie scoped to the parent
  // domain so consent is shared with the marketing site (vassantfinance.com).
  headTags: [
    // Space Grotesk — matches the marketing site (vassantfinance.com).
    {
      tagName: 'link',
      attributes: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap',
      },
    },
    {
      tagName: 'script',
      attributes: {},
      innerHTML: [
        'window.dataLayer = window.dataLayer || [];',
        'function gtag(){dataLayer.push(arguments);}',
        "gtag('js', new Date());",
        'var vaGranted = /(^|;\\s*)va_consent=granted(;|$)/.test(document.cookie);',
        "gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:vaGranted?'granted':'denied'});",
        "gtag('config','G-N6WM1LQ0YF');",
      ].join('\n'),
    },
    {
      tagName: 'script',
      attributes: {
        async: 'true',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-N6WM1LQ0YF',
      },
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/vassantfinance/docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All posts',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/vassantfinance/docs/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/og.png',
    // Light-locked to match the marketing site, which has no theme switcher.
    // The dark styles in custom.css / index.module.css are all still live —
    // flip `disableSwitch` back to false to bring the toggle (and dark) back.
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    // Mirrors the marketing nav (js/layout.js) link-for-link so the two sites
    // read as one. No `title` — the wordmark lives in the logo lockup.
    navbar: {
      logo: {
        alt: 'Vassant',
        src: 'img/logo-full.svg',
        srcDark: 'img/logo-full-light.svg',
        href: 'https://vassantfinance.com',
        target: '_self',
      },
      items: [
        { href: 'https://vassantfinance.com', label: 'Home', position: 'left' },
        { href: 'https://vassantfinance.com/about.html', label: 'About', position: 'left' },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        { href: 'https://vassantfinance.com/contact.html', label: 'Contact', position: 'left' },
        {
          href: 'https://vassantfinance.com/#waitlist-form',
          label: 'Download the App',
          position: 'right',
          className: 'navbar-download-app',
        },
        {
          href: 'https://vassantfinance.com/#waitlist-form',
          label: 'Sign up',
          position: 'right',
          className: 'navbar-cta',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{ label: 'Intro', to: '/docs/intro' }],
        },
        {
          title: 'Company',
          items: [
            { label: 'Main site', href: 'https://vassantfinance.com' },
            { label: 'Contact', href: 'https://vassantfinance.com/contact.html' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'GitHub', href: 'https://github.com/vassantfinance/docs' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Vassant Finance LLC.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
