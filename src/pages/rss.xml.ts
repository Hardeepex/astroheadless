import { getRssString } from '@astrojs/rss';

<<<<<<< HEAD
import { SITE, METADATA, APP_BLOG, I18N } from '~/utils/config';
import { fetchPosts } from '~/utils/blog';
import { getPermalink } from '~/utils/permalinks';

export const get = async () => {
=======
import { SITE, METADATA, APP_BLOG } from '~/utils/config';
import { fetchPosts } from '~/utils/blog';
import { getPermalink } from '~/utils/permalinks';

export const GET = async () => {
>>>>>>> origin/main
  if (!APP_BLOG.isEnabled) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found',
    });
  }

  const posts = await fetchPosts(I18N.defaultLocale);

<<<<<<< HEAD
  const { body } = await rss({
    title: `${SITE.name}’s Blog`,
    description: METADATA?.description || "",
=======
  const rss = await getRssString({
    title: `${SITE.name}’s Blog`,
    description: METADATA?.description || '',
>>>>>>> origin/main
    site: import.meta.env.SITE,

    items: posts.map((post) => ({
      link: getPermalink(post.permalink, 'post'),
      title: post.title,
      description: post.excerpt,
      pubDate: post.publishDate,
    })),

    trailingSlash: SITE.trailingSlash,
  });

<<<<<<< HEAD
  return new Response(body, {
    status: 200,
    statusText: "OK",
=======
  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
>>>>>>> origin/main
  });
};
