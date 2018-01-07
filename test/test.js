var assert = require('assert');

//Algorithm
function BeesWaxChallenge(arr) {
	return arr.reduce((itr, acc)=> {
		return acc + itr;
	});

}


//Mocha Unit Tests
describe('BeesWaxTest1', function() {
  describe('#BeesWaxChallenge()', function() {
    it('should return 6 when array is 1,2,3', function() {
      assert.equal(BeesWaxChallenge([1,2,4]), 6);
    });
  });
});