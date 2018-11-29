// 原型式继承

//实现方式：直接原型相等的原型继承方式，子类原型等于父类原型
//实现原理：原型链
//本质：原型链
//特点：不推荐
//：子类原型等于父类原型的继承方式会导致修改子类原型会直接反应在父类的原型上；引用类型共用

//父类
function SuperClassC(){
    this.superName = '原型继承-父类';
}
SuperClassC.prototype.superTit = '父类原型属性';
SuperClassC.prototype.getSuperName = function(){
    return this.superName;
}
 
//-------直接用原型相等继承-------
function SubClassC(){
    this.subName = '原型继承－子类';
}
SubClassC.prototype = SuperClassC.prototype;
 
var instance0 = new SubClassC();
 
//修改子类原型
SubClassC.prototype.subTit1 = '直接原型－子类原型属性';
//对子类原型对象的修改同时反映到了父类原型
console.log(SuperClassC.prototype.subTit1);  //'直接原型－子类原型属性',修改子类原型父类受到影响
