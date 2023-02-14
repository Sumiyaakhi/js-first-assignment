/* In this function, we take an input and then multiplying its in 3 times and summation with 10 then total result would be dividing with 2 and at last get output subtracting 5.  */
function mindGame(number){
    if(typeof number !== 'number'){
      return "please enter a number.";
    } 
    const result = (((number * 3) + 10 ) / 2) - 5; 
return result;
}
/*In this function, we should take an input of string which length should be calculated and if string length is even in number then is provide the output 'even' else it provides 'odd'.  */ 
function evenOdd(string){
    if (typeof string !==  'string'){
        return 'please enter a string';
    }
    else if (string.length % 2 == 0){
        return 'even'
    }
    else{
        return 'odd'
    }
}
/* In this function, we should take an input of any number.Then we have to find difference between this number and 7. If this difference is less then 7 then it return the subtract value. Else,it return the twise of input value. */
function isLGSeven(inputnumber){
    if (typeof inputnumber !==  'number'){
        return 'please enter a number';
    }
    else if (inputnumber < 7){
        const subtraction = inputnumber - 7;
        return subtraction;
    }
    else{
        const twise = inputnumber * 2 ;
        return twise;
    }
}
/* In this function, we declare an array as input.If any value of this array is greater then or equal zero then it takes this value another array.The last return value will  be the length of new array of data.   */
function findingBadData(numbers){
    const badDataNumber = [];
    if(Array.isArray(numbers) !== true ){
        return 'please enter an array of numbers.';
    }
    for(let i=0; i< numbers.length; i++){
     
     const element = numbers[i];
     if(element < 0 ){
       badDataNumber.push(numbers);
      result = badDataNumber.length;
    }
    else {
        result = 0;
    }
    }
    return result;
}
/* In this function, we take three number of parameter which take the number of gems of three friends.Where friend-1 provide 21,friend-2 provide 32and friend-3 provide 43 gems for each gems to diamond.If the 3 friends total gems is greater then 2000 then it subtract 2000 from the total value.Otherwise it will be the result of return. */
function gemsToDiamond(num1,num2,num3){
    if (typeof num1 !== 'number' || typeof num2 != 'number'  || typeof num3 !== 'number' ){
   return 'please enter any numbers.';
    }
  const  friend1 = num1 * 21;
  const friend2 = num2 * 32;
  const  friend3 = num3 * 43;
  totalDiamond =friend1 + friend2 + friend3 ;
  if(totalDiamond > (1000 * 2)){
    const subtractValue = total - 2000;
    return subtractValue;
  }
  return totalDiamond;
}
