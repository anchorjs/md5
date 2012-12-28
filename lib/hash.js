define(['./md5'],
function(md5) {
  
  function Hash() {
    this._data = '';
  }
  
  Hash.prototype.update = function(data, enc) {
    enc = enc || 'binary';
    switch (enc) {
      case 'binary':
      case 'utf8':
      case 'ascii':
        this._data += data;
        break;
      default:
        throw new Error('unsupported encoding: ' + enc);
    }
    return this;
  }
  
  Hash.prototype.digest = function(enc) {
    enc = enc || 'binary';
    switch (enc) {
      case 'binary':
        return md5.rstr_md5(this._data);
        break;
      case 'hex':
        return md5.rstr2hex(md5.rstr_md5(this._data));
        break;
      case 'base64':
        return md5.rstr2b64(md5.rstr_md5(this._data));
        break;
      default:
        throw new Error('unsupported encoding: ' + enc);
    }
  }
  
  return Hash;
});
