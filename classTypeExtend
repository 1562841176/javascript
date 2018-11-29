//类式继承


//实现方式：类式继承需要将第一个类的实例赋值给第二个类的原型
//继承原理：父类的实例赋值给子类的原型，那么这个子类的原型同样可以访问父类原型上的属性和方法与从父类构造函数中复制的属性和方法
//本质：重写子类的原型对象（导致子类的圆形对象中的constructor的指向发生改变，变为父类构造函数）
//特点：实例即是子类的实例也是父类的实例；父类新增的原型方法和原型属性实例均可以访问，并且是所有实例共享
//缺点：如果父类中的共有属性是引用类型，那么就会被子类的所有实例共用，其中一个子类的实例改变了从父类继承来的引用类型则会直接影响其他子类；创建子类实例时，无法向父类构造函数传参；无法实现多继承
function SuperClass(){ //父类
    this.superName = '类式继承-父类';
    this.superArr = ['a','b'];
}
SuperClass.prototype.getSuperName = function(){ //父类原型方法
    return this.superName;
}
function SubClass(){ //子类
    this.subName = '类式继承-子类';
    this.subArr = [1,2];
}
var superInstance = new SuperClass(); //父类实例
SubClass.prototype = superInstance;  //继承父类
SubClass.prototype.getSubName = function(){ //子类原型方法
    return this.subName;
}
var instance1 = new SubClass(); //子类的实例
var instance2 = new SubClass();//子类的实例
console.log(instance1.superArr,
    instance1.getSuperName(),
    instance1.subArr,
    instance1.getSubName()); //'a,b' '类式继承-父类' [1,2] '类式继承-子类'
    
instance1.subArr.push(3); //更改子类的实例属性引用值
instance1.superArr.push('c');//更改父类的实例属性引用值

console.log(instance2.superArr,instance2.subArr) // 'a,b,c' [1,2] 由于是引用类型所以其他实例上的属性也被更改
