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
