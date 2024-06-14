class Person {
    constructor(public fname: string, public lname: string) {
    }

    fullName(): string {
        return this.fname + " " +
            this.lname
    }

    disp(): void {
        console.log("Hi " + this.fullName());
    }
}
let p1: Person
let p2: Person
let p3: Person
let Person_arr: Person[] = [new Person("Sachin", "Tendulkar"), new Person("MS", "Dhoni"), new Person("Virat", "Kohli")]
Person_arr.sort((n1: Person, n2: Person): number => {
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
