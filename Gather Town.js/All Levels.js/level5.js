//Level 5
                                               //challenge 1 (Convert HTML Entities)

  /*function convertHTML(str) {

    str = str.replace(/&/g, "&amp;");
    str = str.replace(/</g, "&lt;");
    str = str.replace(/>/g, "&gt;");
    str = str.replace(/"/g, "&quot;");
    str = str.replace(/'/g, "&apos;");
    return str;
    }
    
    let result = convertHTML("<<>>/''''''&&&&");
    console.log(result);*/

                                              //Challenge 2 (Sum All primes)
    /*function checkPrimes(num){
      if(num == 2){
          return true;
      }
      for(let a = 2; a < num; a++){
          if(num % a == 0)
          return false;
      }
      return true;
    }
    function sumPrimes(num){
      let sum = 0;
      for(let a = 2; a <= num; a++){
          if(checkPrimes(a)){
              sum += a;
          }
  
      }
      return sum;
    }
  
  console.log(sumPrimes(10));*/

                                         //Challenge 3 (A Very Big Sum)
  /*function aVeryBigSum(ar) {
    // Write your code here
    let sum = 0;
    for(let a = 0; a < ar.length; a++){
        sum += ar[a];
    }
    return sum

}*/

                                   //Challenge 4(plusMinus)https://www.youtube.com/watch?v=gJTUYvDqGXs&ab_channel=FelixMcKenzie
/*function plusMinus(arr) {
  // Write your code here
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for(let a = 0; a < arr.length; a++){
      if(arr[a] > 0){
          positive ++;
      } else if(arr[a] < 0){
          negative ++;
      } else{
          zero ++;
      }
  }
  
console.log((positive/arr.length).toFixed(6))
console.log((negative/arr.length).toFixed(6))
console.log((zero/arr.length).toFixed(6))
}*/


                                      //Challenge 5(Stairase)
/*function staircase(n) {
    for (let i = 0; i < n; i++){
      let string = "";
      
      for(let j = 0; j < n-i-1; j++){
        string += " ";
      }
      
      for(let k = 0; k < i+1; k++){
        string += "#";
      }
      console.log(string)
    }
    
  }
  //staircase(6)
  
   // n = 6
  
  // SSSSS# i=0, s=5, #=1
  // SSSS## i=1, s=4, #=2
  // SSS### i=2, s=3, #=3
  // SS#### i=3, s=2, #=4
  // S##### i=4, s=1, #=5
  // ###### i=5, s=0, #=6
  
  // S = N - i - 1
  // # = i + 1*/


                                              //Challenge 6(Birthday Cake Candle)
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


                                             //Challenge 7(Breaking the Records)
/*function breakingRecords(scores) {
    // Write your code here
  
    let games = scores ;
    let min = games[0];
    let max = games[0];
    
    let minRecord = 0;
    let maxRecord = 0;
    
    for (const score of games) {
        if (max < score) {
            max = score;
            maxRecord++;
        }
        else if (score < min) {
            min = score;
            minRecord++;
        }
    }
    
    return [maxRecord, minRecord]
}*/

                                  //or
/*function breakingRecords(scores) {
    let currentHi = scores[0];
    let currentLow = scores[0];

    let totalHigh = 0;
    let totalLow = 0;
    
    for(let i = 1; i < scores.length; i++) {
        if (scores[i] > currentHi) {
            currentHi = scores[i];
            totalHigh++;
        }
        if (scores[i] < currentLow) {
            currentLow = scores[i]
            totalLow++;
        }
    }
    return [totalHigh, totalLow];
}*/


                                             //Challenge 8(Bill Division) guide(https://www.youtube.com/watch?v=_EvWY5J-ji4)
/*function bonAppetit(bill, k, b) {
    // Write your code here
    let count = 0;
    for(let i=0; i<bill.length; i++){
        count += bill[i];
    }
    
    let consumedItems = count - bill[k];
    let overCharged = b - (consumedItems / 2)
    if(!overCharged) {
        console.log("Bon Appetit")
    } else{
        console.log(overCharged)
    }
}*/



                                             //Challenge 9(Cats and a Mouse) guide https://www.youtube.com/watch?v=jxWxJ4JbzPI
/*function readLine() {
    return inputString[currentLine++];
}

// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    let distanceACat = Math.abs(x - z);
    let distanceBCat = Math.abs(y - z);
    if(distanceBCat > distanceACat) {
        return "Cat A"
    } else if(distanceBCat < distanceACat) {
        return "Cat B"
    } else {
        return "Mouse C"
    }
}*/



                              //Challenge 9(The Hurdle Race) guide https://medium.com/@jayram_manale/hackerrank-20-the-hurdle-race-easy-c0b5b210d79
/*function hurdleRace(k, height) {
    // Write your code here
    
    let maxPotion = 0;
    let usedPotion = 0;
    
    for (let i = 0; i < height.length; i++) {
        if (height[i] > k) {
           usedPotion = height[i] - k;
            if (usedPotion > maxPotion) {
                maxPotion = usedPotion;
            }

        }
    }
    if (maxPotion === 0) {
        return 0;
    }
    return maxPotion;

}*/
//-----------------------------------------------------------

