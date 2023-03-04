let Father = {
    name: 'father',
    age: 50,
    say: function () {
        console.log(this.name)
    }
}

let Som = {
    name: 'som',
    age: 20,
}

for (const key in Father) {
    // q: 为什么这里要加上 hasOwnProperty 判断？
    // a: 因为 for in 会遍历原型链上的属性，如果不加这个判断，会导致原型链上的属性被覆盖
    if (!Som.hasOwnProperty(key)) {
        Som[key] = Father[key]
    }
}