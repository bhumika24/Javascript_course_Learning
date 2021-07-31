const uid = "abc123";

var fullName = "Babedali";
var email = "babedali@gmail.com";
var password = "123456";
var confirmPassword = "123456";
var courseCount = 0;
var isLoggedInFromGoogle = false;
var state = "Karnataka";
var country= "india";

console.log(uid);
console.log("Full Name is:" + fullName);
console.log(email);

console.log(`
         with unique ID:${uid}
         user is :${fullName}
         his email is:${email}
         uses the password:${password}
         state:${state}
         country:${country}
         `); //interpolication