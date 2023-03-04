function Cat1(cName: string, cAge: number) {
    this.name = cName;
    this.age = cAge;
    this.run = function () {
        console.log(this.name + "在跑");
    }
}

function Tiger1(tName: string, tAge: number) {
    // 改变 this 指向
    this.copy = Cat1;
    this.copy(tName, tAge);
    delete this.copy;
}

let t1 = new Tiger1("老虎", 20);
console.log(t1.name);