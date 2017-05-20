var fibonnaciNums = require( './../even_fib_nums.js' );
var chai = require( 'chai' );
var should = chai.should();

describe( 'Sum of even numbers in the Fibonnacci sequence', function() {

  it( 'should return the sum of all even Fibonacci numbers when given 13', function() {
    var sum = fibonnaciNums.sumFibs( 13 );
    sum.should.equal( 10 );
  });

  it( 'should return the sum of all even Fibonacci numbers when given 34', function() {
    var sum = fibonnaciNums.sumFibs( 34 );
    sum.should.equal( 44 );
  });

  // when the 2 tests pass, unskip the next test and
  // change the expected value to the correct result
  it( 'should return the sum of all even Fibonacci numbers when given 4,000,000', function() {
    var sum = fibonnaciNums.sumFibs(4000000);

    // CHANGE THE VALUE OF 'X' to the correct number
    sum.should.equal(4613732);
  });
});

/**
 * if you finish early, write another
 * function called highestFibonacciNumber()
 * in the file `even_fib_nums.js` that takes a
 * single number input and returns the highest Fibonnaci number
 * less than the given input
 */

// unskip the following test to test your highestFibonacciNumber() function
describe( 'Highest number in Fibonacci sequence', function() {
  it( 'should return the highest Fibonacci number less than the given input', function() {
    var highest = fibonnaciNums.highestFibonacciNumber( 100 );
    highest.should.equal( 89 );
  });
});


//STRETCH GOALS: Define another way you could write a function for a fibonacci number and write passing tests