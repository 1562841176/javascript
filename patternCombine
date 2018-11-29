//通过两者组合的方式可以实现每个实例对象拥有一份自己的实例属性，同时还能够访问构造函数原型对象上的共享的原型属性和原型方法。
//同时拥有构造函数模式和原型模式创建对象的优点。


function Fn(name,age){
   this.name = name;
    this.age = age;
}

Fn.prototype.getName = function(){
    return this.name;
}
var a = new Fn('啦啦',23)
var b = new Fn('呼呼',15)

a.getName() //啦啦
b.getName() //呼呼
