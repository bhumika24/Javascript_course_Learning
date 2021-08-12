var user = {
    firstName : "john",
    lastName : "k",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn: true,
    courseList:[],
    buyCourse : function(courseName) {          //buyCourse is a method tht is defined inside the object.
        this.courseList.push(courseName);       //push() refered to the add value to keyvalue
    },
    getcourseCount:function(){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
    },
};
console.log(user.firstName);
user.buyCourse("Angular course");
console.log(user.getcourseCount());
