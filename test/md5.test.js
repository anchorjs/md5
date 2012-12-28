define(['md5'],
function(md5) {

  describe('md5', function() {
  
    it('should export algo', function() {
      expect(md5.algo).to.equal('md5');
    });
  
    it('should export createHash', function() {
      expect(md5.createHash).to.be.a('function');
    });
    
    it('should export Hash', function() {
      expect(md5.Hash).to.be.a('function');
    });
    
    describe('.createHash()', function() {
      it('should create instance of Hash', function() {
        expect(md5.createHash()).to.be.an.instanceOf(md5.Hash);
      });
    });
    
    it('should export createHmac', function() {
      expect(md5.createHmac).to.be.a('function');
    });
    
    it('should export Hmac', function() {
      expect(md5.Hmac).to.be.a('function');
    });
    
    describe('.createHmac()', function() {
      it('should create instance of Hmac', function() {
        expect(md5.createHmac()).to.be.an.instanceOf(md5.Hmac);
      });
    });
  
  });

  return { name: "test.md5" }
});
