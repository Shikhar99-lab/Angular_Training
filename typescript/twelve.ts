interface saysHi{
    sayhi: Function;
  };
  class Person implements saysHi{ 
     constructor(private fname:string,private lname:string) {
      }  
      fullName():string{
          return this.fname+" "+this.lname
      }
     disp():void { 
        console.log("hi "+this.fullName()) 
     }
  }
  
  let p1=new Person("Sachin","Tendulkar")
  p1.disp();