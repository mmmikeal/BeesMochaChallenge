var assert = require('assert');

//Algorithm

/*
* linear time with extra memory/space
* strategy, move through the string from left to right
* everytime I encounter a '{', i add it to a leftBracketStorage array with a reference to its array position
* everytime i encounter a '}', I delete the last '{'from leftBracketStorage array, if there is none, i return the array position of '}'
*	if i get to the end of my string and leftbracketstorage object has any '{' left in it, i return the first array position
*
*/
function balancedBraces(bracesString) {

	let leftBracketStorage = []; //store array indexes of found '{' here
	
	for (let i = 0; i < bracesString.length; i++) { //alternatively you can split bracesString into an array before iterating through it, which is faster for long strings. The method I'm using here is faster only for small strings because strings in javascript are immutable

		if (bracesString[i] === '{') {
			leftBracketStorage.push(i);
		}

		else if (bracesString[i] === '}' && leftBracketStorage.length < 1) { //found a '}' with no open bracket to pair, return index of }
			return i;
		}

		else if (bracesString[i] === '}' && leftBracketStorage.length >= 1) { //found a '}', remove last '{'
			leftBracketStorage.pop();
		}
	}

	if (leftBracketStorage.length >= 1) { //done iterating through bracesString, if there are any '{' left, return the index of the first one
		return leftBracketStorage[0];
	}

	return -1; //else there are no hanging '{', return -1 for balanced

}





//Mocha Unit Tests
describe('BeesWaxTest1', function() {
  describe('#balancedBraces()', function() {
    it('should return -1 when array is `hello world`', function() {
      assert.equal(balancedBraces('hello world'), -1);
    });
  });
});


describe('BeesWaxTest2', function() {
  describe('#balancedBraces()', function() {
    it('should return -1 when array is `{}`', function() {
      assert.equal(balancedBraces('{}'), -1);
    });
  });
});

describe('BeesWaxTest3', function() {
  describe('#balancedBraces()', function() {
    it('should return -1 when array is `{{{foo();}}}{}`', function() {
      assert.equal(balancedBraces('{{{foo();}}}{}'), -1);
    });
  });
});

describe('BeesWaxTest4', function() {
  describe('#balancedBraces()', function() {
    it('should return -1 when array is `{{}{}}`', function() {
      assert.equal(balancedBraces('{{}{}}'), -1);
    });
  });
});

describe('BeesWaxTest5', function() {
  describe('#balancedBraces()', function() {
    it('should return 0 when array is `{{{}`', function() {
      assert.equal(balancedBraces('{{{}'), 0);
    });
  });
});

describe('BeesWaxTest6', function() {
  describe('#balancedBraces()', function() {
    it('should return 0 when array is `}`', function() {
      assert.equal(balancedBraces('}'), 0);
    });
  });
});

describe('BeesWaxTest7', function() {
  describe('#balancedBraces()', function() {
    it('should return 2 when array is `{}{foo{}`', function() {
      assert.equal(balancedBraces('{}{foo{}'), 2);
    });
  });
});