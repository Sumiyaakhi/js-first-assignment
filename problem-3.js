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
