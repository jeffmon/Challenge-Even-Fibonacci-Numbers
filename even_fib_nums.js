/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;
  var num1 = 1;
  var num2 = 2;
  var num3 = 0;
  var tempArr = [1, 2];

  while(num3 <= maxFibValue){
    num3 = num1 + num2;
    num1 = num2 + num3;
    num2 = num3 + num1;
    tempArr.push(num3, num1, num2);
  }

  for(var i = 0; i < tempArr.length; i++){
    if(tempArr[i] <= maxFibValue && tempArr[i] % 2 === 0){
      sum += tempArr[i];
    }
  }
  // do your work here
  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;
  var num1 = 1;
  var num2 = 2;
  var num3 = 0;
  var tempArr = [1, 2];

  while(num1 <= maxFibValue && num2 <= maxFibValue && num3 <= maxFibValue){
    num3 = num1 + num2;
    num1 = num2 + num3;
    num2 = num3 + num1;
    tempArr.push(num3, num1, num2);
  }

  for(var i = 0; i < tempArr.length; i++){
    if(tempArr[i] < maxFibValue){
      highest = tempArr[i]
    }
  }
  //define your base case, validate your input


  //do your work here

  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};