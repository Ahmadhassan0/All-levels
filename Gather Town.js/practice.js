let arr = [-4, 3, -9, 0, 4, 1]
function plusMinus(arr){
  let n = arr.length;
  let positive = 0;
  let negative = 0;
  let zero = 0;

  for(let a = 0; a < n; a++){
    if(arr[a] > 0){
      positive += 1;
    } else if(arr[a] < 0){
      negative += 1;
    } else{
      zero += 1;
    }
  }

  let pro = positive / n;
  let nega = negative / n;
  let zer = zero / n;

  console.log(pro.toFixed(6) + "\n" + nega.toFixed(6) + "\n" + zer.toFixed(6));
}
plusMinus(arr);








