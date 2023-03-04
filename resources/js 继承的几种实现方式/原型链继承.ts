// q: 原型链继承的优点
// a: 1. 实现简单
//    2. 实例可以继承父类原型上的属性
//    3. 可以实现多继承
// q: 原型链继承的缺点
// a: 1. 引用类型的属性被所有实例共享
//    2. 创建子类实例时，不能向父类构造函数传参
//    3. 无法实现函数复用，每个子类都有父类实例函数的副本，影响性能

function Human() { }
let father = {
    name: 'father',
    age: 50,
}

Human.prototype = father
let h1 = new Human()

console.log(h1.name) // father
console.log(h1.age) // 50