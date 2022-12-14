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
//------------------------------------------------------------------------------------

function gradingStudents(grades){
  let num = grades;
  let output = [];
  for(let i = 0; i < num.length; i++){
    if(num[i] > (2% 5)){
    output.push(num[i])
    console.log(output)
  }

  }
  return output;
}
let result = gradingStudents([73,67,38,33]);
console.log(result);




