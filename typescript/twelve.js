;
var Person = /** @class */ (function () {
    function Person(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    Person.prototype.fullName = function () {
        return this.fname + " " + this.lname;
    };
    Person.prototype.disp = function () {
        console.log("hi " + this.fullName());
    };
    return Person;
}());
var p1 = new Person("Sachin", "Tendulkar");
p1.disp();
