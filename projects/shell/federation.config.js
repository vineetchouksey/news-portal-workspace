const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'shell',
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    'primeng/api': { singleton: true, strictVersion: true },
    'primeng/button': { singleton: true, strictVersion: true },
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'primeicons',
    '@primeuix/themes/aura',
    '@primeuix/themes/aura/accordion', // Add any other specific sub-paths if they appear
    '@primeuix/themes',
    // Add further packages you don't need at runtime
  ],

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
});
