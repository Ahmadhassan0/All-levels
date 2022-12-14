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

    //----------------------------------------------------------------------------