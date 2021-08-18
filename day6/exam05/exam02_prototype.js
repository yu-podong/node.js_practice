/*
class Car {
    String m_strName;
    Car(String name) {
        this.m_strName = name;
    }
}
*/

function Car(name,speed) {
    this.name = name
    this.speed = speed
    this.printName1 = ()=> {
        console.log(this.name)
    }
}

Car.prototype.printName2 = function() {
    console.log(this.name)
}

var car1 = new Car("bmw",220)
var car2 = new Car("hyndai",225)
var car3 = new Car("honda",125)

car1.printName1()
car1.printName2()
car2.printName2()

console.log(car3)
// console.log(car1)
// console.log(car2)
// console.log(car3)