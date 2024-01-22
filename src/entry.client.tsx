import { hydrate } from '@remix-run/react';
import { RemixBrowser } from '@remix-run/react';

hydrate(
  <RemixBrowser />,
  document
);
