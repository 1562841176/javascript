//通过自定义构造函数可以创建特定类型，具有类似属性和功能的的实例对象。例如，通过Fn创建出大量不同姓名，不同年龄，但是都有获取实例姓名属性的实例个体。只需要通过 new 关键字实例化就可以了，代码量相比于字面量的方式大大减少。

//缺点:就是在new的过程中多个实例相同（共用）的属性和方法在每个实例上保留一份，耗费内存。

function Fn(name,age){
    this.name = name;
    this.age = age;
    this.getName = function(){
        return this.name;
    }
}
var person1 = new Fn('啦啦',18)
var person2 = new Fn('菲菲',17)
