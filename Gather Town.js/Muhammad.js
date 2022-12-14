/*
let ice = [[1,2,3], [4,5,6], [7,8,9]];
for(let a=ice.length-1; a>=0; a--){  
  console.log(ice[a]);
  
  for(let l=ice[a].length-1; l>=0; l--){
    console.log(ice[a] [l]);
  }
}*/

/*function name(arr) {
  let output = [];
  for(let i = 2; i < arr.length; i++){
    if(name[i] === 2){
      output.push ("ice")
    }
      if(name[i] === 3){
      output.push ("one")
    }
      if(name[i] === 4){
      output.push ("fore")
    }
  }
  return output;
}
let result = name[1,2,3,4,5,6,7,8,9,10];
console.log(result)*/
/*-------------------------------------------------
for(let c = 2; c < 15; c ++)
  console.log(c);*/






   /* let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let lo = arr.length;
    for (let a = 0; a < lo; a++) 
      if (arr[a] > 5) 
        console.log(arr[a]);*/




        /*for (let a = 102; a >= 27; a -= 3)
          console.log(a);*/



          /*function translatePigLatin(str) {
          let firstLetter = str[0]
          let vowels = "aeiou"
          if(vowels.includes(firstLetter) === true){
            return str + (way)
          }
           let cluster = "";
           let a = 0;
           while(vowels.includes(str[a]) === false && a < str.length){
            cluster += str[a]
            a++
            console.log(a)
           }
             return str.substring(a) + cluster + "ay"
          }

          let result = translatePigLatin ("schwartz")
          console.log(result)*/
    

          'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
var n = arr.length;
var negtive = 0;
var positive = 0;
var zore = 0;
for(let i=0;i<n;i++){
    if(arr[i]<0){
        negtive += 1;
     else if(arr[1]>0){
         positive +=0;
         else{
             zore += 1;
         }
     }
    }
}
}
var pos = positive

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}