
/* Interface Just says that the Class that implements 
it has to have a specific function or variable... 
that is pre defined inside the Interface.
*/
interface Animal{
    bark : ()=>void;
}

class Dog implements Animal {
    bark() : void {
            console.log("wuff")
    }
}
const Rex : Dog = new Dog();
Rex.bark()

/* 
Interface Animal doesnt know what bark is, 
just that bark is there and if not it will throw an Error 
*/

