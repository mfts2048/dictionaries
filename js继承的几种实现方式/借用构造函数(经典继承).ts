// q: 借用构造函数的优点
// a: 1. 解决了原型链继承的引用类型属性被所有实例共享的问题
//    2. 可以在子类构造函数中向父类传参
//    3. 可以实现多继承
// q: 借用构造函数的缺点
// a: 1. 实例并不是父类的实例，只是子类的实例
//    2. 只能继承父类的实例属性和方法，不能继承原型属性/方法
//    3. 无法实现函数复用，每个子类都有父类实例函数的副本，影响性能

function Cat(cName: string, cAge: number) {
    this.name = cName;
    this.age = cAge;
    this.run = function () {
        console.log(this.name, "跑的快");
    }
    this.catchMouse = function () {
        console.log(this.name + "会抓老鼠");
    }
}

function Tiger(tName: string, tAge: number) {
    Cat.call(this, tName, tAge);
}

let t2 = new Tiger('大花猫', 2);
t2.catchMouse();
t2.run()
console.log(t2.name);
console.log(t2.age);