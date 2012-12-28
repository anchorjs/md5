define(['./md5'],
function(md5) {
  
  function Hash() {
    this._data = '';
  }
  
  Hash.prototype.update = function(data) {
    this._data += data;
    return this;
  }
  
  Hash.prototype.digest = function(enc) {
    enc = enc || 'binary';
    switch(enc) {
      case 'binary':
        return md5.binl_md5(this._data);
        break;
      case 'hex':
        return md5.hex_md5(this._data);
        break;
      case 'base64':
        return md5.b64_md5(this._data);
        break;
      default:
        throw new Error('unsupported encoding: ' + enc);
    }
  }
  
  return Hash;
});
