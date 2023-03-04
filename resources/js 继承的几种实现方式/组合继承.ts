// 组合继承
function Parent() {}
function Child() {
    Parent.call(this);
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;