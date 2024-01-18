import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig, squooshImageService } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import { i18n, filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import tasks from './src/utils/tasks';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin } from './src/utils/frontmatter.mjs';

<<<<<<< HEAD
import { ANALYTICS, SITE, I18N } from './src/utils/config.ts';
=======
import { ANALYTICS, SITE } from './src/utils/config.ts';
>>>>>>> origin/main

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const whenExternalScripts = (items = []) =>
  ANALYTICS.vendors.googleAnalytics.id && ANALYTICS.vendors.googleAnalytics.partytown
    ? Array.isArray(items)
      ? items.map((item) => item())
      : [items()]
    : [];

export default defineConfig({
  site: SITE.site,
  base: SITE.base,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',
<<<<<<< HEAD
  
  build: {
    format: SITE.trailingSlash ? "directory" : "file"
  },
=======
>>>>>>> origin/main

  output: 'static',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    
    // Conditionally add i18n and sitemap based on I18N.isEnabled
    ...(I18N.isEnabled
      ? [
          i18n({
            locales: I18N.locales,
            defaultLocale: I18N.defaultLocale,
          }),
          sitemap({
            i18n: {
              locales: I18N.locales,
              defaultLocale: I18N.defaultLocale,
            },
            filter: filterSitemapByDefaultLocale({ defaultLocale: I18N.defaultLocale }),
          }),
        ]
      : [
          sitemap({}),
        ]),
    
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    tasks(),
  ],

  image: {
    service: squooshImageService(),
  },

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
<<<<<<< HEAD
=======
    rehypePlugins: [responsiveTablesRehypePlugin],
>>>>>>> origin/main
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
