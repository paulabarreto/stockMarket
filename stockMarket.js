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

console.log(lowestNum(array));
//compare with highest of higher index and store in an  array
// function compare(lowestNum(array)){
//
// }

//Repeat until all there are no values left

//get higher value in the array
