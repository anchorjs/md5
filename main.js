define(['exports',
        './lib/hash',
        './lib/hmac'],
function(exports, Hash, Hmac) {

  exports.algo = 'md5';

  exports.createHash = function() {
    return new Hash();
  }
  exports.Hash = Hash;
  
  exports.createHmac = function(key) {
    return new Hmac(key);
  }
  exports.Hmac = Hmac;

});
