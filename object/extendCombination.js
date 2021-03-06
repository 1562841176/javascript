//组合继承


//实现方式：在子类构造函数中执行弗雷构造函数，在子类原型上实例化父类
//实现原理：类式继承＋构造函数继承，通过call函数改变执行环境（this的指向），使得子类复制得到父类构造函数内的属性并进行自定赋值，同时子类也可以有自己的属性，再通过类式继承的原型来继承父类的原型属性和原型方法
//本质：父类构造函数增强子类实例＋重写子类原型对象
//特点：实例属性，实例方法，原型属性，原型方法均可继承；解决引用属性共享的问题；可向父类传参；new出来的实例即是父类实例也是子类实例
//缺点：耗内存
function SuperClassB(name){
    this.superName = name;
    this.books = ['aa','bb'];
}
SuperClassB.prototype.getSuperName = function(){
    return this.superName;
}
function SubClassB(name,age){
    SuperClassB.call(this,name);//通过call继承，new一次就复制一次
    this.age = age;
}
 
var instanceSuperClassB = new SuperClassB();
SubClassB.prototype = instanceSuperClassB;
 
var instance1 = new SubClassB('莉莉',21);
var instance2 = new SubClassB('佳佳',23);
 
instance1.books.push('cc');
console.log(instance1.superName,instance1.age,instance1.books,instance2.superName,instance2.age,instance2.books,instance1.getSuperName());
//莉莉 , 21 , ["aa", "bb", "cc"] , 佳佳 , 23 , ["aa", "bb"] , 莉莉
