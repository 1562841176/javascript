//闭包是指有权限访问另一个函数作用域中的变量的函数。

闭包的优缺点

作用：

访问其他函数内部的变量
使变量常驻内存，在特定情况下实现共享（多个闭包函数访问同一个变量）
封装变量，避免命名冲突，多用在插件封装，闭包可以将不想暴漏的变量封装成私有变量
缺点：

当大量变量常驻内存时会导致内存耗费过量，影响速度，在ie9-版本会导致内存泄漏
不当使用闭包会导致被引用变量发生非预期变更

//.解决异步导致的执行函数参数在执行时真实值不符合期望
var arr = []
for(var i =0; i < 3; i++){
    arr[i] = function(i){
        console.log(i)
    }
}
arr[0]()  //3
arr[1]()  //3
arr[2]()  //3

//改进,闭包＋自执行函数实现i的顺序输出
var arr = []
for(var i =0; i < 3; i++){
    arr[i] = (function(i){
        return function(i){
           console.log(i)
        }
    })(i)
}
arr[0]()  //0
arr[1]()  //1
arr[2]()  //2

//.封装私有函数插件，避免命名冲突


ar obj = (function(){
    var name = '111'
    var obj = {
        setName:function(){
            name = '222'
        },
        getName:function(){
            return name
        }
    }
    return obj
})()
obj.setName()
obj.getName()   //
