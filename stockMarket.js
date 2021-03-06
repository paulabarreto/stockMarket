// Create a function maxProfit, which, given a list of stock prices for a given day,
// returns the maximum profit that could have been made by buying a stock at the given
// price and then selling the stock later on. For example if the input is:
// [45, 24, 35, 31, 40, 38, 11] then your program should return 16 because if you
// bought the stock at $24 and sold it at $40, a profit of $16 was made and this is
// the largest profit that could be made. If no profit could have been made, return -1.

const array = [45, 24, 35, 31, 40, 38, 11];

//Find the lowest number

function lowestNum(array){
  var min = array[0];
  for(let i = 1; i < array.length; i++){
    if(min > array[i]){
      min = array[i];
    }
  }
  return min;
}

function highestNum(array){
  var max = array[0];
  for(let i = 1; i < array.length; i++){
    if(max < array[i]){
      max = array[i];
    }
  }
  return max;
}

var arrayForComparison = [];

//compare with highest of higher index and store
function maxProfit(array, arrayForComparison){
  let minVal = lowestNum(array);
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] === minVal){
      var minArray = [];
      for(let j = i; j < array.length; j++){
        minArray.push(array[j]);
      }
      for(let k = 0; k < i - 1; k++){
        newArray.push(array[k]);
      }
      var maxVal = highestNum(minArray);
      var diff = maxVal - minVal;
    }
  }
  arrayForComparison.push(diff);
  if(newArray.length > 1){
    maxProfit(newArray, arrayForComparison);
  }
  let result = highestNum(arrayForComparison);
  return result;
}


console.log(maxProfit(array, arrayForComparison));

module.exports = maxProfit;
