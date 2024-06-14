var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello World!");
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
var GreetingNew = /** @class */ (function () {
    function GreetingNew() {
    }
    GreetingNew.prototype.greett = function () {
        console.log("Bye Everyone!");
    };
    return GreetingNew;
}());
var obj1 = new GreetingNew();
obj1.greett();
