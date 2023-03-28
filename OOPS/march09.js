function circle1(){
    this.radius=5;
    this.Area=function(){
      let area=3.14*this.radius*this.radius;
      console.log("area of the circle is : ",area);
    }
  }
  let  Circle=new circle1();
  Circle.Area();

  const Animal = function(sound){
    let _sound = sound;
    function speak(){
      setTimeout(() => console.log(_sound),0);
    }
    return{
      speak
    };
  };
  const owl = Animal("HOOT");
  const pig = Animal("OINK");
  owl.speak();
  pig.speak();