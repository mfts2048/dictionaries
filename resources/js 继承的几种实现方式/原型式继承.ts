// 原型式继承

function CreateObj(o: any) {
    function Fn() { }
    Fn.prototype = o;
    return new Fn()
}