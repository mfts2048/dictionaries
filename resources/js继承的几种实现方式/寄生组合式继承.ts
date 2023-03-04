// 寄生组合式继承(最理想的继承方式)

function Parent3() { }
function Child3() {
    Parent3.call(this);
}
let F = function () { };
F.prototype = Parent3.prototype;
F.prototype.constructor = F;
Child3.prototype = new F();