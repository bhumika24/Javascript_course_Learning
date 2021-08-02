//Logical conditional for Purchase in javascript

//user is allowed to make a purchase when he is:-
//1.logged in 
//2.email verified 
//3.cardInfo - valid
//4.if any one is missing, stop purchase

var isLoggedIn = false;
var isEmailVarified = true;
var cardInfo = true;

// if (isLoggedIn) {
//     Console.log("logged in successfully");
//     if(isEmailVarified) {
//         console.log("Email is verified");
//         if(cardInfo) {
//             console.log("you can purchase");
//         }
//     }
// }

if (isLoggedIn && isEmailVarified && cardInfo) {
    console.log("allow user to make a purchase");
}else{
    console.log("you allow to purchase");
}