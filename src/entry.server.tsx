import { createRequestHandler } from '@remix-run/node';

const handler = createRequestHandler({
  // Options can be added here if necessary
  getLoadContext() {
    // Context for loaders and actions can be created here
  },
});

export default handler;
