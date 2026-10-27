import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { readOutputHTMLFile } from '@docusaurus/utils';
import { load } from 'cheerio';

// A post's `image:` front matter is the app's Articles thumbnail (and the
// post's social card). Written relative to the post, e.g.
// `image: ./Assets and Pictures/093026/dcf.webp`, it's bundled under a hashed
// name, so read the resolved URL back out of the built page's og:image.
// Posts without one get no thumbnail rather than the site-wide og.png.
async function thumbnailFor(
  post: { metadata: { permalink: string; frontMatter: { image?: string } } },
  outDir: string,
  trailingSlash: boolean | undefined,
): Promise<string | undefined> {
  const { image } = post.metadata.frontMatter;
  if (!image) return undefined;
  if (/^https?:\/\//.test(image)) return image;
  const html = await readOutputHTMLFile(post.metadata.permalink, outDir, trailingSlash);
  return load(html)('meta[property="og:image"]').attr('content');
}

const config: Config = {
  title: 'Vassant',
  tagline: 'Documentation and updates',
  // Same favicon set as the web app, so search results show one icon.
  favicon: 'favicon.ico',

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
    // Google Site Verification
    {
      tagName: 'meta',
      attributes: {
        name: 'google-site-verification',
        content: '8dtJIX7IqcK3oVyVv1D3LsvYWKx-dWXrcOyT-GSBOTY',
      },
    },
    {
      tagName: 'link',
      attributes: { rel: 'icon', href: '/favicon-192.png', type: 'image/png', sizes: '192x192' },
    },
    {
      tagName: 'link',
      attributes: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    },
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
          // Stamps each doc with the date of the last commit that touched its
          // file, so readers can see when the rules last changed. Needs full
          // git history at build time — hence `fetch-depth: 0` in deploy.yml.
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All posts',
          feedOptions: {
            type: ['rss', 'atom', 'json'],
            limit: false,
            xslt: true,
            // The app's Articles tab reads feed.json. Carry the site's own
            // "N min read" through as a JSON Feed extension so the two agree;
            // RSS and Atom don't serialize extensions.
            createFeedItems: async ({ blogPosts, defaultCreateFeedItems, ...rest }) => {
              const items = await defaultCreateFeedItems({ blogPosts, ...rest });
              const images = await Promise.all(
                blogPosts.map((post) => thumbnailFor(post, rest.outDir, rest.siteConfig.trailingSlash)),
              );
              return items.map((item, i) => ({
                ...item,
                image: images[i],
                extensions: [
                  {
                    name: '_vassant',
                    objects: {
                      read_minutes: Math.ceil(blogPosts[i].metadata.readingTime ?? 0),
                    },
                  },
                ],
              }));
            },
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

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        // Pages renamed with the app's Discover tabs; keep old links working.
        redirects: [
          {
            from: '/docs/Discover/SpotlightProfiles',
            to: '/docs/Discover/DeepDives',
          },
          {
            from: '/docs/Discover/Knowledge Base',
            to: '/docs/Discover/Library',
          },
        ],
      },
    ],
  ],

  themeConfig: {
    image: 'img/og.png',
    metadata: [
      {
        name: 'google-site-verification',
        content: '8dtJIX7IqcK3oVyVv1D3LsvYWKx-dWXrcOyT-GSBOTY',
      },
    ],
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
      // `target: '_self'` on every marketing link — Docusaurus sends external
      // hrefs to a new tab by default, which breaks the one-site illusion the
      // moment you touch the nav. This is one header spanning two origins, so
      // it should navigate like one header.
      items: [
        {
          href: 'https://vassantfinance.com',
          label: 'Home',
          position: 'left',
          target: '_self',
        },
        {
          href: 'https://vassantfinance.com/about.html',
          label: 'About',
          position: 'left',
          target: '_self',
        },
        // A plain link rather than a docSidebar item so activeBaseRegex can
        // also claim this site's landing page, which is where the marketing
        // nav's Docs link drops you — otherwise you arrive with nothing lit.
        {
          to: '/docs/intro',
          label: 'Docs',
          position: 'left',
          activeBaseRegex: '^/(docs(/.*)?)?$',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://vassantfinance.com/contact.html',
          label: 'Contact',
          position: 'left',
          target: '_self',
        },
        {
          href: 'https://app.vassantfinance.com/sign-in',
          label: 'Log in',
          position: 'right',
          className: 'navbar-login',
          target: '_self',
        },
        {
          href: 'https://app.vassantfinance.com/sign-up',
          label: 'Sign up',
          position: 'right',
          className: 'navbar-signup',
          target: '_self',
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
            { label: 'Main site', href: 'https://vassantfinance.com', target: '_self' },
            {
              label: 'Contact',
              href: 'https://vassantfinance.com/contact.html',
              target: '_self',
            },
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
