define(['md5/lib/hmac'],
function(Hmac) {

  describe('Hmac', function() {
  
    // https://github.com/blueimp/JavaScript-MD5/blob/master/test/test.js
    
    describe('binary digest as default argument', function() {
      var hmac = new Hmac('key');
      hmac.update('value');
    
      it('should have correct output', function() {
        expect(hmac.digest()).to.equal('\x01C>\xfd_\x162~\xa4\xb3\x11DW,g\xf6');
      });
    });
    
    describe('binary digest', function() {
      var hmac = new Hmac('key');
      hmac.update('value');
    
      it('should have correct output', function() {
        expect(hmac.digest('binary')).to.equal('\x01C>\xfd_\x162~\xa4\xb3\x11DW,g\xf6');
      });
    });
    
    describe('hex digest', function() {
      var hmac = new Hmac('key');
      hmac.update('value');
    
      it('should have correct output', function() {
        expect(hmac.digest('hex')).to.equal('01433efd5f16327ea4b31144572c67f6');
      });
    });
    
    describe('base64 digest', function() {
      var hmac = new Hmac('key');
      hmac.update('value');
    
      it('should have correct output', function() {
        expect(hmac.digest('base64')).to.equal('AUM+/V8WMn6ksxFEVyxn9g==');
      });
    });
    
    describe('unknown encoding digest', function() {
      var hmac = new Hmac('key');
      hmac.update('value');
    
      it('should throw', function() {
        expect(function() {
          hmac.digest('fubar');
        }).to.throw();
      });
    });
  
  });

  return { name: "test.md5.hmac" }
});
