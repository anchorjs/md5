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
  
  });

  return { name: "test.md5" }
});
