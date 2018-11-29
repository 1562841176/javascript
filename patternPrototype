//函数创建会拥有prototype属性，指向一个存放了某些特定实例的共用属性和方法的对象。构造函数Fn的实例a和b都可以调用Fn原型对象上的方法getName,得到的name值是一样的。
a.getName == b.getName,说明调用的是同一个getName方法，在构造函数的原型对象上，所以原型对象上的方法和属性是其所有实例共用的。
//通过原型对象可以解决构造函数模式提到每个实例保留一份的内存耗费问题

function Fn(){
   
}
Fn.prototype.name='啦啦'
Fn.prototype.getName = function(){
    return this.name;
}
var a = new Fn()
var b = new Fn()

a.getName() //啦啦
b.getName() //啦啦
a.getName == b.getName  //true
