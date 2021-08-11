//Arrow functions

var  isEven = (element) => { //=> is call array function and wen we use arraow function then return should be thr
    // if (element % 2===0){
    //    return true;
    // }
    return element % 2 ===0; //without output will be undefined
};
//console.log(isEven(2));

//callback function 
 var result = [2,6,4,8].every((e) => e% 2 ===0 );
     
  //goes into array and checks and what we give function tht will do every() does
console.log(result) //ans will be flase because one number is odd number

//how call back is written simple function does not have value
//wen we use return then we have to use {} 
// another way var result = [2,4,6,8].evert((e) => (e % 2===0));

