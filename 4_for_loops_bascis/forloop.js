// //for loop 
// for( let i =0;i<10;i++){
//        console.log(i);
// }

const myState = [
    "katnataka",
    "goa",
    "delhi",
    1996,
    "ap",
    "kerala",
    "tamil Nadu",
];

for (let i = 0;i< myState.length;i++){
    if(typeof myState[i] !=="string") break; //all the strings need to be displayed and break used to stop everthing after maches then stop execution
    console.log(myState[i]);
}
