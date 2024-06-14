var Person = /** @class */ (function () {
    function Person(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    Person.prototype.fullName = function () {
        return this.fname + " " +
            this.lname;
    };
    Person.prototype.disp = function () {
        console.log("Hi " + this.fullName());
    };
    return Person;
}());
var p1;
var p2;
var p3;
var Person_arr = [new Person("Sachin", "Tendulkar"), new Person("MS", "Dhoni"), new Person("Virat", "Kohli")];
Person_arr.sort(function (n1, n2) {
    if (n1.fname < n2.fname) {
        return -1;
    }
    else if (n1.fname > n2.fname) {
        return 1;
    }
    else
        return 0;
});
console.log(JSON.stringify(Person_arr));
