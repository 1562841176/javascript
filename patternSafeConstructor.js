所谓的稳妥构造函数实际上本意是起到保护变量的作用，只能通过对象提供的方法操作构造函数传入的原始变量值，防止通过其他途径改变变量的值，其实质是闭包。

function Fn(name,age){
    var obj = new Object();
    var name = name;
    var age = age
    obj.getName = function(){
        return name
    }
    obj.setName = function(n){
        name = n
    }
    return obj;
}
var fn = Fn('家家',23)
fn.getName()  //'家家'
fn.setName('lala')
fn.getName()  //'lala'
