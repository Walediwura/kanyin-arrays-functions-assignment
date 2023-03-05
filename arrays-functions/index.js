/*
 1. Mutating methods modify the original array and return a reference to the same array object. While,
    Non-mutating methods, on the other hand, return a new array without modifying the original array.
 */

// 2.
let programmingLanguages = ['C#', 'Javascript', 'Ruby', 'PHP', 'Python']; // ---> Test Case 1
programmingLanguages.push('Kotlin'); // ---> 1
programmingLanguages.splice(3, 0, 'Java');  // ---> 2
programmingLanguages.shift();  // ---> 3
programmingLanguages.unshift('Scala', 'Swift');  // ---> 4
programmingLanguages.splice(-3, 1, 'Go', 'Rust');  // ---> 5
console.log(programmingLanguages);  // ---> Test Case.

// 3.
['apple', 'mango', 'orange'];

// 4.

function maxValue(arr){
    arr = arr.sort(function (a, b){ return a - b});
    console.log(arr[arr.length - 1]);
    return arr[arr.length - 1];
}
maxValue([4, 5, 10, -2]); // ---> Test Case.

// 5.
function valTimesIndex(arr){
    let output = [];
    for (let i = 0; i < arr.length; i++){
        output.push(arr[i] * i);
    }
    console.log(output);
    return(output);
}
valTimesIndex([1,2,3]); // ---> Test Case 1
valTimesIndex([5,10,15]); // ---> Test Case 2