const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'news-mfe',

  exposes: {
    './Component': './projects/news-mfe/src/app/app.ts',
    './Store': './projects/news-mfe/src/app/store/news.store.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    'primeng/api': { singleton: true, strictVersion: true },
    'primeng/button': { singleton: true, strictVersion: true },
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    'primeicons',
    // Add further packages you don't need at runtime
  ],

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
});
