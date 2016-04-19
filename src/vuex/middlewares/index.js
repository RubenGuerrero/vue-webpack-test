import logger from 'vuex/logger';

import localStorageMiddleware from './local-storage-middleware';

const middlewares = [];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger());
}

middlewares.push(localStorageMiddleware);

export default middlewares;
