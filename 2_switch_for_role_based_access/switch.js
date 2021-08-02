var user ="abcde";

switch(user){
    case "admin":
            console.log("you get full access");
            break;
    case "subadmin":
            console.log("get access to create/delete course");
            break;
    case "testprep":
            console.log("get access to create/delete test");
            break;
     case "user":
            console.log("gets access to consume content");
            break;


        default:
            console.log("trail user")
        break;
}