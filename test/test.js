var assert = require('assert');

function BeesWaxChallenge() {

}

describe('BeesWaxTest1', function() {
  describe('#BeesWaxChallenge()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});