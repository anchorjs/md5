require.config({
  baseUrl: 'js/lib',
  paths: {
    'test': '../../..',
    'mocha': 'mocha/mocha',
    'chai': 'chai/chai'
  },
  packages: [
    { name: 'md5', location: '../../../..' }
  ],
  shim: {
    'mocha': {
      exports: 'mocha'
    }
  }
});

require(['../suite']);
