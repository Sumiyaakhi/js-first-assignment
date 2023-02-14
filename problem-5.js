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
    const subtractValue= total - 2000;
    return subtractValue;
  }
  return totalDiamond;
}
console.log(gemsToDiamond(1,1,1));