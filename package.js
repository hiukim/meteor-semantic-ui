/*globals Package, Npm*/
Package.describe({
  name        : 'hiukim:semantic-ui',
  version     : '3.0',
  description : 'A wrapper for semantic-ui',
  summary: 'A wrapper for semantic-ui',
});

Package.onUse(function (api) {
  api.versionsFrom('1.4');
  api.use('jquery', 'client');
  api.addFiles([
    'semantic.js',
    'semantic.css',
  ], 'client');
  api.addAssets([
    'themes/default/assets/fonts/icons.eot',
    'themes/default/assets/fonts/icons.otf',
    'themes/default/assets/fonts/icons.svg',
    'themes/default/assets/fonts/icons.ttf',
    'themes/default/assets/fonts/icons.woff',
    'themes/default/assets/fonts/icons.woff2',
  ], 'client');
});
