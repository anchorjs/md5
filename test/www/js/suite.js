define(['require',
        'mocha',
        'chai',
        'mocha-results'],
function(require, mocha, chai, results) {
  mocha.setup('bdd');
  expect = chai.expect
  
  require(['test/md5.test',
           'test/md5.hash.test',
           'test/md5.hmac.test'],
  function() {
    if (window.mochaPhantomJS) { mochaPhantomJS.run(); }
    else { results(mocha.run()); }
  });
});
