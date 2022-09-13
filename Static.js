var Human = /** @class */ (function () {
    function Human() {
    }
    Human.breathe = "is breathing ...";
    return Human;
}());
var JohnDoe = new Human();
/*
console.log(JohnDoe.atmen)

Will Throw an Error because
 breathe no longer refers to himself/the
 new JohnDoe as Instance of the Class
 BUT to the Class itself / Class Mensch
*/
/* So to Console.log() the Class Variable we have to Call it like this */
console.log(Human.breathe);
