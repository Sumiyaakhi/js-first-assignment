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
