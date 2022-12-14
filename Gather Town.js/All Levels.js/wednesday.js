//Challenge #2                               guide video(https://www.youtube.com/watch?v=fEEkWN3EnYw&t=196s&ab_channel=DigitalHorizon)

/*function gradingStudents(grades) {
    // Write your code here
    for(let i=0; i<grades.length; i++){
                                  //73
        if((grades[i] >= 38) && (((grades[i] % 5) == 3) || ((grades[i] % 5) == 4))) {
            //73      =   73      + (5 -        (3))      Answer = 75
            grades[i] = grades[i] + (5 - (grades[i] % 5));
    }

}
return grades;
}
let result = gradingStudents(73,67,38,33)
console.log(result)

//71 % 5 = 1
//72 % 5 = 2
//73 % 5 = 3
//74 % 5 = 4*/
//----------------------------------------------------------------------------
//Problem #3                                  guide video(https://www.youtube.com/watch?v=nyaKSO2p1k8&ab_channel=AdyNgom) (https://www.youtube.com/watch?v=NuBv9lhdqbM&ab_channel=JamesGuest)

/*function sockMerchant(n, ar) {
    // Write your code here
    // sort use to arrange all num in ascending order
    let sorted = ar.sort((a,b) => a - b);
    let pairs = 0;
    
    for(let i=0; i < n-1; i++){
        if(sorted[i] === (sorted)[i + 1]){
            pairs ++;
            i += 1
        }
    }
    return pairs;
}*/
//------------------------------------------------------------------------------------
//Problem #4

//                                      Counting Valleys(https://www.youtube.com/watch?v=OgOYttaHAy8&ab_channel=SubratDash)

/*function countingValleys(steps, path) {
    // Write your code here
    let seaLevel = 0;
    let valleys = 0;
    let mountains = 0;
    
    for(let i = 0; i < path.length; i++){
        if(path[i] == "U"){
            if(seaLevel == 0){
                mountains ++;
            }
            seaLevel++
        }
        if(path[i] == "D"){
            if(seaLevel == 0){
                valleys++;
            }
            seaLevel--;
        }
    }
    return valleys;
}*/