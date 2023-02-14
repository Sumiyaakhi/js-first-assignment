/* In this function, we take an input and then multiplying its in 3 times and summation with 10 then total result would be dividing with 2 and at last get output subtracting 5.  */
function mindGame(number){
    if(typeof number !== 'number'){
      return "please enter a number.";
    } 
    const result = (((number * 3) + 10 ) / 2) - 5; 
return result;
}
