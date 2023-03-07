class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduceSelf() {
      console.log(`The name of the person is ${this.name} and age is ${this.age}`);
    }
  }
  
  const John = new Person('John', 20);
  John.introduceSelf();
  
  
  // An example of class without constructor
  class Car{
    speed(){
      console.log('200km/hr');
    }
  }
  const hondacity = new Car();
  hondacity.speed();
  
  
  // inheritance example
  // creating a new class students which inherits persons
  class Student extends Person{
    constructor(name, age, course){
      super(name, age);
      this.course = course;
    }
  
    introduceSelf(){
      console.log(`Student ${this.name} is ${this.age} years old and is studying ${this.course}`);
    }
  
    printMarks(marks){
      let sum = 0;
      for(let m1 of marks){
        sum += m1;
      }
      console.log(`Student has scored a total of ${sum}`);
    }
  }
  
  const Peter = new Student('Peter', 21, 'B.tech');
  Peter.introduceSelf();
  Peter.printMarks([90, 85, 95]);
  