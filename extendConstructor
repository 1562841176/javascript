//组合继承


//实现方式：在子类内对父类执行SuperClass.call(this,name...)语句同时传入this和指定参数
//实现原理：通过call函数改变执行环境（this的指向），使得子类复制得到父类构造函数内的属性并进行自定赋值，同时子类也可以有自己的属性（没有用到原型）
//本质：父类构造函数增强子类实例
//特点：改善类式继承中的父类的引用属性被所有子类实例共用的问题；可以在子类内call多个父类构造函数来实现多继承；子类实例化时可向父类传参
//缺点：只能继承父类的实例属性和实例方法，无法继承父类的原型属性和原型方法；通过子类new出来的实例只是子类的实例，不是父类的实例；影响性能
function SuperClassA(name){
    this.superName = name;
    this.books = ['aa','bb'];
}
SuperClassA.prototype.getSuperName = function(){
    return this.superName;
}
function SubClassA(name,age){
    SuperClassA.call(this,name);//通过call继承，new一次就复制一次
    this.age = age;
}
var instance1 = new SubClassA('莉莉',21);
var instance2 = new SubClassA('佳佳',23);
instance1.books.push('cc');
console.log(instance1.superName,instance1.age,instance1.books,instance2.superName,instance2.age,instance2.books,instance1.getSuperName);
//莉莉 , 21 , ["aa", "bb", "cc"] , 佳佳 , 23 , ["aa", "bb"] , undefined
console.log(SubClassA.prototype) //只包含constructor属性的对象
