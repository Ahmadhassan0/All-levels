//Level 2

/*var a = 2
    a ++;  //(It's means 2 + 1 = 3) when we add a ++ it add 1 in (a = 2) 
    a ++;  //(It's means 3 + 1 = 4) and again when we add a ++ it add 1 in (a = 3)
or
    a --;  //(It's means 2 - 1 = 1) same like upper + case
    a --;  //(It's means 1 - 1 = 0)*/
//---------------------------------------------------------------------------------
                                    // level 2 slide 10(== and === in if else)

/*let myApples = 4;   //if and else mean that if the value is match in if condition then only if condition will run otherwise else condition will run

if(myApples === 4){
myApples += 8;
  console.log("You have", myApples, "apples")
}
else if(myApples === 10){
    myApples = 10;
    console.log("You dont have", myApples, "apples");
}

else{
  myApples = 98;
  console.log("you dont have", myApples, "apples")
}*/    
 // TYPE or VALUE dono ko check karna ho to (===) dalna ho ga agar VALUE check karna ho to  sirf(==) he lagana ho ga 
      // TYPE or VALUE dono ko compare karta ha (!==) dalna ho ga agar VALUE compare karna ho to sirf(!=) he lagana ho ga
      // (!) It's mean NOT EQUAL TO
//-------------------------------------------------------------------------------------
                                          //switch//    

/*let student = 57;
switch(student){
    case 4:
        console.log("Only 4 student present");
        break;
        case 9:
            console.log("Only 9 student present");
            break;
            case 23:
                console.log("Only 23 student present");
                break;
                case 44:
                    console.log("Only 44 student present");
                    break;
                    case 50:
                        console.log("Onlt 50 student present");
                        break;
                        case 57:
                            console.log("Only 57 student present");
                            break;
                            case 63:
                                console.log("Only 63 student present");
                                break;
                                default:
                                    console.log("Class is empty");
                                    break;
}*/
//----------------------------------------------------------------------------------
                                //!== and != in if else//

/*let a = 0;
if(a !== 0){
    console.log("I'm right");
}
else if(a !== 6){
    console.log("it's match, It's mean it fasle");
}
   else if(a !== 7){
        console.log("it's match, It's mean it fasle99999");
    }
    else{
        console.log("I'm not comferm");
    }*/     //!== is case ma agar kise be line pa value match nahi hoti to wohe hama output ma dekhna ko mila ga ELSE sa pehla he stop ho jaye ga
    //--------------------------------------------------------------------------------------------------
                                          //>, <, >=, <=, in if else//

    /*let b = 10;
    if(b >= 4) {
        console.log("it's right");
    } 
    else {
        console.log("statment is wrong");
    }*/
    //--------------------------------------------------------------------------
                                 //while loop//

    /*let d = 5;
    while(d < 10){
        console.log(d);  //we can also use (d ++) before console.log
        d ++; 
    }*/
    //------------------------------------------------------------------
                                //for loop//

    /*for(let c = 2; c < 15; c ++){
        console.log(c);
    }*/
    //------------------------------------------------------------------
                             //Array//

    /*let ARR =["Black", "Blue", 3, "Red", "pink"];
    console.log(ARR);
    console.log(ARR[0]);
    console.log(ARR[3]);*/
    //----------------------------------------------------------
                     //check > 5 element in array// (not for notes)*

    /*let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let lo = arr.length;
    for (let a = 0; a < lo; a++) {
      if (arr[a] > 5) {
        console.log(arr[a]);
      }
    }*/
    //----------------------------------------------------------------------------------------------------------------
    //LEVEL3                                         //Slide 3  (we can +, -, *, /, in loop)  Slide 5, 8, 12 miss

    /*for (let a = 102; a >= 27; a -= 3){
        console.log(a);
    }*/
    //-------------------------------------------------------------
                                            //Slide 4 Video(Array operations push, pop, shift, unshift, splice)   Slide 5 miss

    /*let something = ["Apples", "pink", "mango", 3, 93, "patato"]
console.log(something);

something.push("orange");           //it's use for to push something in the end of array

let add = something.pop();          //it's use for to remove last element  in array,  and you can store in another variable

let shift = something.shift();      //it's use for to remove first element  in array, and you can store in another variable

something.unshift(50);              //it's use for to add  element  in starting of array

let fly = something.splice(2,3);    //it's use for to remove multiple element in array, and you can store in another variable


console.log(something);
console.log(add);
console.log(shift);
console.log(fly);*/

//---------------------------------------------------------------------------------
                                                          //Slide 6 video (logical operation)

/*let example = 9;                                              //6(&& use for "and")

if(example > 4 && example < 15){
  console.log("example is greater then 4 and smaller then 15")
}*/
                            //----------

/*let ex = 5;                                                   //6(|| use for "or")

if(ex === 4 || ex === 5 || ex || 9){
  console.log("It's 3 or 5 or 9")
}*/
                          //-----------                    
                                                           //Slide 7 example                 slide 8 miss
/*let arr = [ 3, 10, 9, 5, 3, 11, 7, 15, 12, 4, 1, 13, 6, 14, 8];

for (let a = 0; a <= 15; a++){
  if (arr[a] >= 3 && arr[a] <= 7){
    console.log(arr[a]);
  }
}*/
//-----------------------------------------------
                                                        //??Pushing in Array*

/*let arr = [];

for(let a = 3; a <= 12; a++){
  arr.push(a);

}
console.log(arr);*/
//-------------------------------------------------------
                                                                  //Slide 10 (substring)         

/*let ex = "Microverse"                 //it's use when you want to see some past of string in output
console.log(ex.substring(5,10))*/
//------------------------------------------------------
                                                                 //Slide 11 Video (includes) Slide 12 miss

/*let user = ["Ahmad", "Muhammad", "Hassan", "School"];
let login = "School";                                      
 if(user.includes(login)){            // agar #login ke value #user ma hoi to ya true ho ga or if statment run ho ge otherwise flase hona ma else run ho ga
   console.log("Welcome to home")
 }
else{
  console.log("You don't have permission to enter")
}*/
//----------------------------------------------------------
                                                      //Slide 14 (ayk array sa dosra array ma loop k through kuch be add karna)

/*let arr = [1,2,3,4,5,6,7,8,9,10];
let add = [];
for (let i=0; i<arr.length; i++){
  if(arr[i] >=4 && arr[i]<=9){
    add.push(arr[i])
    
  }
}
console.log(add);*/
//-------------------------------------------------------------------------
                                                       //Slide 16 (how to access subarrays in arrays with nasted loop)

/*let bigArr = [[1, 2, 3, 4], [5, 6, 7, 8,], [9, 10, 11, 12]];

for (let i=0; i<bigArr.length; i++){
  console.log(bigArr[i])
  
  for(let j=0; j<bigArr[i].length; j++){
    console.log(bigArr[i][j])
  }
}*/

                                                        //---------- Slide 18 (reverse start loop) 

/*let arr =[[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (let i=arr.length-1; i>=0; i--){
console.log(arr[i]);

for (let j=arr[i].length-1; j>=0; j--){
console.log(arr[i][j]);
}
}*/
//------------------------------------------------------------------------
                                             //Slide 17 Video (how to build subarray with array using nasted loop)

/*let arr = [];
let eng = 9;

for(let i=3; i>0; i--){
  let li = [];                                    //You can use increment insted of decrement

  for(let j=3; j>0; j--){
    li.push(eng);
    eng ++;
  }
  arr.push(li)
}
console.log(arr );*/
//--------------------------------------------------------------- 
                         //                       Slide 20 (Function)

/*function small(x, y) {
  console.log(x + y)
}

small(5, 4)
small(5, 74)*/
                      //                          Slide 20--------------------------

/*function small(name) {
  console.log("Hello", name)
}

small("Muhamad hassan")*/
                        //---------                  Slide 21 Video(return in function)

/*function good(x, z) {
  return x + z;
}

let bad = good(22, 33);

console.log(bad);*/
                                             // Slide 22 (loop in function return)

/*function laptop(hp){
  let run = [];
  for(let i = 0; i < hp.length; i++){
    run.push(hp[i] * 5 );
  }
  return run;
}

let check = laptop([1,22,33,44,55,66])
let check2 = laptop([1,2,3,4,5,1])

console.log(check);
console.log(check2)*/
                           //Slide 23 video (reverse loop()

/*function example(arr){
  let empty = [];
  for(let i =arr.length -1; i >= 0; i--){
    empty.push(arr[i] -1)
  }
  return empty;
}
let a = example([1,2,3,4,5,67,2])

console.log(a)*/
//------------------------------------------------

                                                  // Slide 24(Translating Array)
 
/*let small = [1, 2, 3, 4];

function School(arr){
  for(let i = arr.length -1; i > 0; i--){
    if(arr[i] === 1){
      console.log("one")
    }
    if(arr[i] ===2){
      console.log("two")
    }
    if(arr[i] === 3){
      console.log("three")
    }
    if(arr[i] === 4){
      console.log("four")
    }
    if(arr[i] ===5){
      console.log("five")
    }
  }
}

let translate = School([1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2, 3, 4])*/

//------------------------------------------------------------------------------------------------------------------------------------
//Level 4

                                               //slide 4 challenge 1 (Convert Celsius to Fahrenheit)
/*function convertToF(celsius) {
  var fahrenheit = (celsius * 9/5) + 32;
  // Only change code below this line
  
  // Only change code above this line
  return fahrenheit;
}

// Change the inputs below to test your code
let a =convertToF(0);

console.log(a);*/

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

  //----------------------------------------------------------------------------------------------------------------------------------------
  //Level 5
                                               //challenge 1

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

    let arr = [];
    let eng = 9;
    
    for(let i=3; i>0; i--){
      let li = [];                                    //You can use increment insted of decrement
    
      for(let j=3; j>0; j--){
        li.push(eng);
        eng ++;
      }
      arr.push(li)
    }
    console.log(arr );
