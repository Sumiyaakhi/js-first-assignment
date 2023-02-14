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
