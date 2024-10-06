//write a function which takes a string and returns count of each char in that string.

//example
// charCount("a,a,a,a") ; {a:4}
//charCount("Hello world ! my contact numer is 1153668799"); {h:1, e:1, l:2 etc...}
//function charCount (str){
//do somthing
//return obj with keys that are lower cased alphanumaric char
//in string.
//}
// breakdown

function charCount(str) {
  //make a obj with returns at the end
  let result = {};
  //loop over the string for each char
  for (let i = 1; i < str.length; i++) {
    //if char is number/letter AND is a key in obj, add one to the count.
    let char = str[i].toLowerCase();
    // check for alphanumeric characters here
    if (/[a-zA-Z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char] = result[char] + 1;
      }
      //if char is number/letter AND not in obj, add to obj and set value to 1.
      else {
        result[char] = 1;
      }
    }
  }

  //if char is something else (space,period etc) do nothing.
  //return the obj at the end.
  return result;
}
let string = "hello world my DSA code today on 19 9 2024";
console.log(charCount(string));

// Frequency counters.

//wrtie a function called same, which accepts two arrays, the function should return ture if every value in the array
//has its corresponding value squared in the 2nd array.
// the frequency of values must be the same.

// big O is O(n^2)

function same(arr1, arr2) {
  // comapre lengths and return boolean result.
  if (arr1.length !== arr2.length) {
    return false;
  }
  //loop over arr1 and get value of arr1.
  for (let i = 1; i < arr1.length; i++) {
    //check indexof arr1 value after taking sqaure of value on arr2.
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    //if the index of arr2 comes in positive then okay to go.
    //if the index comes in negative then false
    if (correctIndex === -1) {
      return false;
    }
    // remove the index number of that arr2 from arr2.
    arr2.splice(correctIndex, 1);
  }
  //all index numbers are checked here. now return true.
  return true;
}
console.log(same([1, 2, 3], [1, 4, 9]));

// function same(arr1, arr2){
//     // comapre lengths and return boolean result.
//     if (arr1.length !== arr2.length){
//     return false;
//     }
//     //loop over arr1 and get value of arr1.
//         for (let i=1; i<arr1.length; i++){
//             //check indexof arr1 value after taking sqaure of value on arr2.
//             let correctIndex = arr2.indexOf(arr1[i]**2)
//             //if the index of arr2 comes in positive then okay to go.
//             //if the index comes in negative then false
//             if(correctIndex === -1){
//                 return false;
//             }
//             // remove the index number of that arr2 from arr2.
//             arr2.splice(correctIndex,1)
//         }
//     //all index numbers are checked here. now return true.
//         return true;
// }
// same([1,2,3],[1,4,9])

// Refactred code. Big O is O(n)

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    //console.log(key)
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    console.log(frequencyCounter2[key ** 2]);
    console.log(frequencyCounter1[key]);

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  return true;
}
same([1, 2, 3, 3, 3], [1, 4, 9, 9, 9]);

//create function with determines if the 2nd string is an anagram of the first
//eg. cinema = iceman. contains same frequency and same letters.

function same(str1, str2) {
  //check if strings match and retrun result
  if (str1.length !== str2.length) {
    return false;
  }
  //create  object to store string in it
  let obj1 = {};

  //loop over (for of) str1 to add value in obj 1
  for (let val of str1) {
    //console.log(val)
    obj1[val] = (obj1[val] || 0) + 1;
    //console.log(obj1)
  }
  // //loop over str2
  // if obj1 dont have same value of 2nd string then return false
  for (let val of str2)
    if (!obj1[val]) {
      return false;
    } else {
      obj1[val] -= 1;
    }

  return true;
}

same("samebb", "smeabb");

//refactor the code.

function validAnagram(first, second) {
  //compare lengths and return true or false
  if (first.length !== second.length) {
    return false;
  }
  //create obj to return later
  let lookup = {};
  //loop over first string
  for (let i = 0; i < first.length; i++) {
    //add frist str values to obj , check if obj[letter] is zero then set to 1; or has letter then obj +=;
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
    //console.log(lookup)
  }

  //now loop over 2nd string,
  for (let i = 0; i < second.length; i++) {
    //check if obj[letter of 2nd string] is not there then return false
    let letter2 = second[i];
    //console.log(letter2)
    if (!lookup[letter2]) {
      return false;
    }
    //else minus that obj[letter of 2nd string] from obj
    else {
      lookup[letter2] -= 1;
    }
  }

  //return true;
  return true;
}
validAnagram("total", "latot");
//////

// multiple pointers
// creating pointers or values that corresponds to an index or position
//and move towards the beginning, end or middle based on a certain conditon.

//very efficient for solving problems with  minimal space complexity as well.

//Example: wrtie a function called sumZero which accepts a sorted array of integers.
//the function should find the first pair where the sum is zero.
// return an arry that includes both values that sum to zero
//or undefined if a pair does not exist.

//example :
// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
//sumZero([-2,0,1,3]) // undefined

//solution:
//write a function name sumZero which takes an array as argument.
function sumZero(arr) {
  //for loop to get the value from zero index that is i = 0;
  for (let i = 0; i < arr.length; i++) {
    //now loop over the array gain from index 1 of array until the end.
    for (let j = i + 1; j < arr.length; j++) {
      //console.log(i,j)
      //now if  sum the first loop index value to all the values coming from 2nd loop J is === 0
      if (arr[i] + arr[j] === 0) {
        //then return the new array with index of first loop and matching index of 2nd loop
        return [arr[i], arr[j]];
      }
    }
  }
}

sumZero([-3, -2, -1, 0, 1, 2, 3]);

// refactor  code

//write a sumZero function
//assign the input arry of left side at index 0
// assign the last index on right side of array
//while left side is less then right side
//create sum veriable of arry's left + array's right side
//if sum is equal to 0
//return array[left, which is index, right],
//if sum is greater than 0
//then decrease 1 from sum
//else add 1 to sum

function sumZero(arr) {
  let firstIndex = 0;
  let lastIndex = arr.length - 1;
  while (firstIndex < lastIndex) {
    let sum = arr[lastIndex] + arr[firstIndex];
    if (sum === 0) {
      return [arr[lastIndex], arr[firstIndex]];
    } else if (sum > 0) {
      lastIndex--;
    } else {
      firstIndex++;
    }
  }
}
let arr1 = [-3, -2, -1, 0, 1, 2, 3];
sumZero(arr1);

//////////////////////////////////////////

function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7

///////////////////////////////

/// Sliding widow ----------------------------------------------------------------
// sliding window 
// write a function maxSubarraySum which accepts array of integers and a number called n
// the function should calculate the max sum of n consecutive elements in that array!

function maxSubarraySum(arr, n){
  //do somthing.
  let maxSum = -Infinity;
  for(let i = 0; i <arr.length -n +1; i++){
      let tempSum = 0;
      for(let j = 0 ; j < n ; j++){
          tempSum = tempSum + arr[i + j]
        }
      console.log(maxSum, tempSum)
      if (tempSum > maxSum){
      maxSum = tempSum
  }
   }
  
  return maxSum;
}
maxSubarraySum([1,2,5,8,4,7,4,7,9,3,5,7,8], 3)


// sliding window Refactored Code
// write a function maxSubarraySum which accepts array of integers and a number called n
// the function should calculate the max sum of n consecutive elements in that array!

function maxSubarraySum(arr, num) {
    
  if (arr.length == 0){ return null;}
  
  let maxSum = 0;
  let tempSum = 0;
  for(let i = 0; i < num; i++){
      maxSum = maxSum + arr[i]
  }
  tempSum = maxSum;
  for(let i = num; i < arr.length; i++){
      tempSum = tempSum - arr[i - num] + arr[i];
      //first iteration
      // tempSum = 8 - arr( 3 - 3) + arr(3)
      //tempSum = 8 - arr(0) ki value + arr(3) index ki value. 
      console.log(maxSum,tempSum)
      maxSum = Math.max(tempSum,maxSum)
      }
   
  return maxSum
}

maxSubarraySum([1,2,5,8,4,7,4,7,9,3,5,7,8], 3)
///////////////////////
