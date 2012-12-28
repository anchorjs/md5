define(['exports',
        './lib/hash'],
function(exports, Hash) {

  exports.algo = 'md5';

  exports.createHash = function() {
    return new Hash();
  }
  exports.Hash = Hash;

});
