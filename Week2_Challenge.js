function FirstReverse(str) { 
let splitString=str.split("");
let reverseArray=splitString.reverse();
let joinArray=reverseArray.join("");
return joinArray;


  // code goes here  
  return str; 

}
   
// keep this function call here 
console.log(FirstReverse(readline()));
