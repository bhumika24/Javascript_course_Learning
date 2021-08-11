 var countries = ["india","us","russia","japan"];
 var states = new Array("Karnataka","ap","kerala","Delhi")

 console.log(states[2]);//states[2] indicate which index vaule does to run, so hear ans kerala
 console.log(states.length); //length says how much lengh does array have gives ans as 4

 //replaceing value 

 states[0] = "goa";
 //console.log(states)

 //add value without replacing

 var user = ["babe","babe@gmail.com","3","true"];
 //console.log(user);

 //how to delete or dump the detials from
 user.pop(); //pop is uses to delete or dump last value of an array
 //console.log(user);

 user.unshift("NEW VALUE"); //SHIFT works like as [newvalue,babe,babe@gmail.com,3] it shift the array like this: [
 //console.log(user);

 user.shift(); //will delete the unshift value of the
 //console.log(user);

 console.log(user.indexOf(2)); //this is a method  used to delete a task or object
//-1 dont delete because its not in array.

//converting string to array
console.log(Array.from("babe")); //form convert any datatype to array


 

