define(['md5/lib/hash'],
function(Hash) {

  describe('Hash', function() {
    
    describe('hex digest', function() {
      var hash = new Hash();
      hash.update('chris:elwood.innosoft.com:secret');
    
      it('should have correct output', function() {
        expect(hash.digest('hex')).to.equal('eb5a750053e4d2c34aa84bbc9b0b6ee7');
      });
    });
    
    describe('base64 digest', function() {
      var hash = new Hash();
      hash.update('chris:elwood.innosoft.com:secret');
    
      it('should have correct output', function() {
        expect(hash.digest('base64')).to.equal('61p1AFPk0sNKqEu8mwtu5w==');
      });
    });
  
  });

  return { name: "test.md5" }
});
