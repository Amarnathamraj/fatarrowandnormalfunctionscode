let student={
    name:"amar",
    arrow:()=>{
        console.log("my name is"+this.name);
        //undefined because arrow function looks for name in global scope ie. ouside of let function
    },

regular(){
    console.log("myname is"+this.name);
    //regular function look for name inside its lexical scope ie. this refers to objects property of the current instance of class created
}
};
student.arrow();
student.regular();
