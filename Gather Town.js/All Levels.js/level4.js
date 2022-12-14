//Level 4

                                               //slide 4 challenge 1 (Convert Celsius to Fahrenheit)
/*function convertCtoF(celsius) {
  // Only change code below this line
  var fahrenheit = (celsius * 9/5) + 32;
  
  // Only change code above this line
  return fahrenheit;
}

// Change the inputs below to test your code
let a =convertCtoF(0);

console.log(a)*/

                                       //slide 8 challenge 2 (Reverse a String)
/*function reverseString(str) {
  let full = [];
  for(let a = str.length -1; a >= 0; a--)
  full += str[a];
  return full;
}

let result = reverseString("hello");
console.log(result)*/

                                        //slide 12 challenge 3 (Factorialize a Number)
/*function factorialize(num) {
  let output =1;
  for(let a = 1; a <=num; a++){
   output *= a;
  }
    return output;
  }
  
   let result = factorialize(3);
   console.log(result)*/
                                            // slide 16 challenge 4(Truncate a String)
   /*function truncateString(str, num) {
    let output = str.substring(0,num )
  if(output.length < str.length){
    output += '...';
  }
    return output;
  }
  
  let result = truncateString("A-tisket a-tasket A green and yellow basket", 8);
  console.log(result)*/

                                             //sliede 20 challenge 5 (Where do I Belong)
  /*function getIndexToIns(arr, num) {
    let belong =  0; 
    for(let a = 0; a < arr.length; a++)
    if(arr[a] < num){
      belong ++;
    }
    return belong;
  }
  
  let result = getIndexToIns([40, 60], 50);
  console.log(result)*/

                                            //slide 23 Challenge 6(Chunky Monkey)
  /*function chunkArrayInGroups(arr, size) {
    let bigArr = [];
    let sub = [];
    let subctr = 0;
    for(let a = 0; a < arr.length; a++){
      if(subctr === size){
        subctr = 0;
        bigArr.push(sub);
        sub = [];
      }
      sub.push(arr[a]);
      subctr ++;
      console.log(subctr,sub)
    }
  
    bigArr.push(sub)
    console.log(bigArr)
    return bigArr;
  }
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);*/


                                          //slide 27 Challenge 7(Sum All Numbers in a Range)
  /*function sumAll(arr) {
    let start = arr[0];
    let end = arr[1];
  
    if(end < start){
      start = arr[1]
      end = arr[0]
    }
    let sum = 0;
    for(let a = start; a <= end; a++ ){
      sum += a;
    }
    return sum;
  }
  
  
  let result = sumAll([4,1]);
  console.log(result)*/


                                    //  slide  31 challenege 8(Seek and Destroy)
  /*function destroyer(arr) {

    let input = arguments[0];
    let output = [];
    let destroy = [];
  
    for(let a = 1; a < arguments.length; a++){
      destroy.push(arguments[a])
    }
  
    for(let b = 0; b < input.length; b++){
      console.log("is", input[b], "included in", destroy, "?" );
      if(destroy.includes(input[b]) === false){
        output.push(input[b])
        console.log("No. So keep it")
      } else {
        console.log("Yes. Delete it")
      }
      
    }
    console.log(output);
    return output;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);*/


                                  //  slide  35 challenege 9(Pig Latin)
  /*function translatePigLatin(str) {
    let firstLetter = str[0];
    let vowels = "aeiou";
  
    if(vowels.includes(firstLetter) === true){
      return  str + "way";
    }
  
    let cluster = "";
    let a = 0;
    while(vowels.includes(str[a]) === false && a < str.length){
      cluster += str[a]
      a ++;
      console.log(a)
    }
    return str.substring(a) + cluster + "ay";
  }
  
  let result = translatePigLatin("rhythm");
  console.log(result)*/


                                  //  slide  39 challenege 10(DNA Pairing)
  /*function pairElement(str) {
    let output = [];
    
  for(let a = 0; a < str.length; a++){
    if(str[a] === "A"){
      output.push(["A", "T"])
    }
    if(str[a] === "T"){
      output.push(["T", "A"])
    }
    if(str[a] === "G"){
      output.push(["G", "C"])
    }
    if(str[a] === "C"){
      output.push(["C", "G"])
    }
  }
  
    return output;
  }
  
  let result = pairElement("GCG");
  console.log(result)*/
  //------------------------------------------------------------