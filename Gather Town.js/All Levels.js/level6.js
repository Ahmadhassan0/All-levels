
                                      //Problem #1 (If-then-else)Day 2: Conditional Statements: If-Else
/*function getGrade(score) {
    let grade = "";
    // Write your code here
    
        if(score >=25 && score <=30){
            grade += "A"
        } else if(score >=20 && score <=25){
            grade += "B"
        } else if(score >=15 && score <=20){
            grade += "C"
        } else if(score >=10 && score <=15){
            grade += "D"
        } else if(score >=5 && score <=10){
            grade += "E"
        } else if(score >=0 && score <=5){
            grade += "F"
        }
    
    
    return grade;
}*/
 

                                      //Problem #2 (Simple array sum)
/*function simpleArraySum(ar) {
    // Write your code here
   let sum = 0;
    for(let i=0; i<ar.length; i++){
        sum += ar[i];
    }
    return sum;;
}*/


                                      //Problem #3 (Day 3: Arrays)
/*function getSecondLargest(nums) {
    // Complete the function
    let largestNum = nums[0];
    for(let i=0; i<nums.length; i++){
        if(nums[i] > largestNum){
            largestNum = nums[i];
        }
    }
    let secondLargestNum = nums[0];
    for(let i=0; i< nums.length; i++){
        if(nums[i] > secondLargestNum && nums[i] < largestNum){
            secondLargestNum = nums[i];
        } 
    }
    return secondLargestNum;
}*/


                                      //Problem #4(Loops)Day 2: Loops
/*function vowelsAndConsonants(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let stringArray = s.split('');
    for(let i=0; i<s.length; i++){
        for(let j=0; j< vowels.length; j++){
            if(s[i] == vowels[j]){
                console.log(s[i])
            }
        }
    }
    
    const consonent = 'bcdefghjklmnpqrstvwxyz'.split('')
    for(let i=0; i<s.length; i++){
        for(let j=0; j< consonent.length; j++){
            if(s[i] == consonent[j]){
                console.log(s[i])
            }
        }
    }
    
}*/


                                         //Problem #5 (Multiples and modulus)....timeout problem
/*function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
    
    let sum = 0;
    for(let i = 0; i < n; i++){
        if(i % 3 == 0 || i % 5 == 0){
            sum += i;
        }
        
    }
    console.log(sum)
 }
}*/


                                  //Unguided problem (unassisted by coordinators)Time Conversion https://www.youtube.com/watch?v=MH_9M2KU-iw

/*function timeConversion(s) {

    
    // Find if AM or PM
    // if AM and 12 set it to 00
    // if PM and more than 12 add 12 to it
    // ignore the AM PM and return
    
    // 07:05:45PM
    //         ^ 
    let lastTwo = s.substring(8);
    
    // ignoring AM PM
    let fullTime = s.substring(0, 8);
    
    // array for test
    let times = fullTime.split(':');
    
    if(lastTwo === "PM") {
        if(times[0] !== "12") {
            times[0] = parseInt(times[0]) + 12;
        }
    } else {
        // AM case
        if(times[0] === "12") {
            times[0] = "00";
        }
    }
    
    return times.join(':');
}*/

//---------
//DAY 2


                                                //Problem #1 --Birthday Cake Candles(repeat challenege)
/*function birthdayCakeCandles(candles) {
    // Write your code here
    let max = 0;
    let tallestCandles = 0;
    for(let i=0; i<candles.length; i++){
        if (max < candles[i]){
            max = candles[i];
        }
    }
        for(let j=0; j<candles.length; j++){
            if( max == candles[j]) {
                tallestCandles ++;
            }
        }
        
        
    
    return tallestCandles;
}*/



                                                //Problem #2 --Sherlock and Array(difficult problem, not clear)
/*function balancedSums(arr) {
    // Write your code here
    let sum = arr.reduce((acc, val) => acc + val)             //reduce(previous, current) it's sum preious and current value
    let leftsum = 0;
    
    for(let i = 0; i < arr.length; i++){
        sum -= arr[i];
        if(sum === leftsum){
            return 'YES';
        };
        leftsum += arr[i];
    };
    return 'NO';
}*/ 
/*function balancedSums(arr) {
    let rightSum = arr.reduce((a,b) => a+b);
    let leftSum = 0;
    
    for(let i = 0; i < arr.length; i++){
    console.log("current number is ", arr[i]);
    rightSum -= arr[i];
    
    if(rightSum === leftSum){
    console.log("sum to the left is ", leftSum);
    console.log("sum to the right is ", rightSum);
    return "YES";
    }
    
    console.log("sum to the left is ", leftSum);
    console.log("sum to the right is ", rightSum);
    
    leftSum += arr[i];
    }
    return "NO";
    }*/
    //------
    /*function balancedSums(arr) {
    let sum = arr.reduce((a,b)=> a+b) - arr[0];
    let left = 0;
    let right = 0;
    while(right < sum){
    right += arr[left];
    sum -=arr[left + 1];
    
    left ++;
    }
    return right== sum? "YES" : "NO";
    }

    let result = balancedSums([1, 1, 4, 1, 1])
    console.log(result)*/


                                                 //Problem #3 --Day 4: Count Objects
/*function getCount(objects) {
    let same = 0;
    for(let i=0; i<objects.length; i++){
        if(objects[i]['x'] == objects[i]['y']){
            same ++;
        }
    }
    return same;
}*/


                                                 //Problem #4 --Missing Numbers(Error clear)
/*function missingNumbers(arr, brr) {
    // Write your code here
    const first = arr;
    const second = brr;
    let hash = {};
    
    //just add second arr value in hash
    for(let i=0; i < second.length; i++){
        let key = second[i];
        hash[key] = 0;
    }
    console.log(hash)

    //for checking the repeated number
    for(let i = 0; i < second.length; i++){
        let key = second[i];
        hash[key] += 1;
    }
    console.log(hash)
    
    //remove all the first element that present in second arr
    for(let i = 0; i < first.length; i++){
        let key = first[i];
        hash[key] -= 1;
    }
    console.log(hash)
    
    //for showing output element
    let output = [];
    for(const e in hash){
        if(hash[e] > 0){
            output.push(e)
        }
    }
    
    return output;
    
}
let result = missingNumbers([203, 204, 205, 206, 207, 208, 203, 204, 205, 206], [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204])
console.log(result)*/
                                             //Unguided Challenge --Gemstones
/*function gemstones(arr) {
    let firstRockArr = [];
  
    for (let i = 0; i < arr[0].length; i ++) {
      if (!firstRockArr.includes(arr[0][i])) {
        firstRockArr.push(arr[0][i]);
      }
    }
  
    for (let i = 1; i < arr.length; i ++) {
      for (let j = 0; j < firstRockArr.length; j ++) {
        if (!arr[i].includes(firstRockArr[j])) {
          firstRockArr.splice(j, 1);
          j --;
        }
      }
    }
  
    return firstRockArr.length;
  }
  
  let result = gemstones(['aabbbbbcdec', 'abc', 'adecf']);
  
  console.log(result);*/
//---------------------------------short but difficult solution(https://medium.com/@olgamelnykovych/gemstones-hackerrank-js-solution-240ea5d8d311)
/*function gemstones(arr) {
    let combined  = arr.join('');
    let unique = [...new Set(combined)];
    let result = unique.filter(ch => 
        arr.every(str => str.includes(ch)));
    return result.length;
}*/

//-----------
//Day 3

                                   //Sum of all odd length subarrays (leetCode) guidehttps://www.geeksforgeeks.org/sum-of-all-odd-length-subarrays/
/*var sumOddLengthSubarrays = function(arr) {
      
    // Stores the sum
    var sum = 0;
   
    // Size of array
    var allNum = arr.length;
   
    // Loop through the array
    for(var i = 0; i < allNum; i++){
          
        // Generate all subarray of odd length
        for(var j = i; j < allNum; j += 2){
  
            for(var k = i; k <= j; k++){
                  
                // Add the element to sum
                sum += arr[k];
            }
        }
    }
    // Return the final sum
    return sum;
}
let result = sumOddLengthSubarrays([1,4,2,5,3])
console.log(result)*/


                                  // Apple and Orange (hackeRrank) guide  https://medium.com/@jenlindner22/apple-and-orange-65a394026c2c
/*function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesCount = 0;
    let orangesCount = 0;
    
    for(let i=0; i<apples.length; i++){
        if(a + apples[i] >= s && a + apples[i] <= t){
            applesCount ++;
        }
    }
    
    for(let i=0; i<oranges.length; i++){
        if(b + oranges[i] >= s && b + oranges[i] <= t){
            orangesCount ++;
        }
    }
    console.log(applesCount);
    console.log(orangesCount);
}*/


                                        //Count odd numbers in an interval range (leetCode)
/*var countOdds = function(low, high) {
    let count = 0;
      for(let i=low; i<=high; i+=2){
         count ++  
      }
        return count;
    };*/


//--------
//Day #4


                                           //Square Wave problem (Microverse original, Modulus + Flags )
/*let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

function squareWave(arr) {
  let zeroes = true; // This is our flag

  // A flag is generally a boolean that determines how the rest of the code is going to be executed.

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 5 === 0) {
      if (zeroes) {
        zeroes = false;                                    //zeros = !zeroes
      } else {
        zeroes = true;
      }
    }

    if (zeroes) {
      arr[i] = 0;
    } else {
      arr[i] = 1;
    }
  }

  return arr;
}

const result = squareWave(input);
console.log(result);*/



                                         //Solve "Second Greatest" problem, but instead, find the Second Smallest number                                 
/*function getSecondLargest(nums) {
    // Complete the function
    let largestNum = nums[2];
    for(let i=0; i<nums.length; i++){
        if(nums[i] < largestNum){
            largestNum = nums[i];
        }
    }
    let secondLargestNum = nums[2];
    for(let i=0; i< nums.length; i++){
        if(nums[i] < secondLargestNum && nums[i] > largestNum){
            secondLargestNum = nums[i];
        } 
    }
    return secondLargestNum;
}*/
//--------------------------------------------------------------

