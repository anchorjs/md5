define(['md5/lib/hash'],
function(Hash) {

  describe('Hash', function() {
    
    describe('binary digest as default argument', function() {
      var hash = new Hash();
      hash.update('chris:elwood.innosoft.com:secret');
    
      it('should have correct output', function() {
        expect(hash.digest()).to.equal('ëZu\u0000SäÒÃJ¨K¼\u000bnç');
      });
    });
    
    describe('binary digest', function() {
      var hash = new Hash();
      hash.update('chris:elwood.innosoft.com:secret');
    
      it('should have correct output', function() {
        expect(hash.digest('binary')).to.equal('ëZu\u0000SäÒÃJ¨K¼\u000bnç');
      });
    });
    
    describe('hex digest', function() {
      var hash = new Hash();
      hash.update('chris:elwood.innosoft.com:secret');
    
      it('should have correct output', function() {
        expect(hash.digest('hex')).to.equal('eb5a750053e4d2c34aa84bbc9b0b6ee7');
      });
    });
    
    describe('hex digest with data containing weird characters', function() {
      var hash = new Hash();
      hash.update('ëZu\u0000SäÒÃJ¨K¼\u000bnç:OA6MG9tEQGm2hh:OA6MHXh6VqTrRk');
    
      it('should have correct output', function() {
        expect(hash.digest('hex')).to.equal('a2549853149b0536f01f0b850c643c57');
      });
    });
    
    describe('base64 digest', function() {
      var hash = new Hash();
      hash.update('chris:elwood.innosoft.com:secret');
    
      it('should have correct output', function() {
        expect(hash.digest('base64')).to.equal('61p1AFPk0sNKqEu8mwtu5w==');
      });
    });
    
    describe('unknown encoding digest', function() {
      var hash = new Hash();
      hash.update('chris:elwood.innosoft.com:secret');
    
      it('should throw', function() {
        expect(function() {
          hash.digest('fubar');
        }).to.throw();
      });
    });
  
  });

  return { name: "test.md5.hash" }
});
