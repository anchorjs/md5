define(['./md5'],
function(md5) {
  
  function Hmac(key) {
    this._key = key;
    this._data = '';
  }
  
  Hmac.prototype.update = function(data) {
    this._data += data;
    return this;
  }
  
  Hmac.prototype.digest = function(enc) {
    enc = enc || 'binary';
    switch(enc) {
      case 'binary':
        return md5.rstr_hmac_md5(this._key, this._data);
        break;
      case 'hex':
        return md5.rstr2hex(md5.rstr_hmac_md5(this._key, this._data));
        break;
      case 'base64':
        return md5.rstr2b64(md5.rstr_hmac_md5(this._key, this._data));
        break;
      default:
        throw new Error('unsupported encoding: ' + enc);
    }
  }
  
  return Hmac;
});
