//通常为了减轻web服务器的负载，我们把js、css，img等静态资源分离到另一台独立域名的服务器上，在html页面中再通过相应的标签从不同域名下加载静态资源，而被浏览器允许，基于此原理，
//我们可以通过动态创建script，再请求一个带参网址实现跨域通信。

//1.) 原生实现
<script>
    var script = document.createElement('script');
    script.type = 'text/javascript';

    // 传参并指定回调执行函数为onBack
    script.src = 'http://www.domain2.com:8080/login?user=admin&callback=onBack';
    document.head.appendChild(script);

    // 回调执行函数
    function onBack(res) {
        alert(JSON.stringify(res));
    }
 </script>
 
 // 服务端返回如下
 onBack({"status": true, "user": "admin"})
 
 // 2.)jquery ajax:
 $.ajax({
    url: 'http://www.domain2.com:8080/login',
    type: 'get',
    dataType: 'jsonp',  // 请求方式为jsonp
    jsonpCallback: "onBack",    // 自定义回调函数名
    data: {}
});

// 3.)Vue.js


this.$http.jsonp('http://www.domain2.com:8080/login', {
    params: {},
    jsonp: 'onBack'
}).then((res) => {
    console.log(res); 
})

// 后端node.js代码实例
var queryString=require('querystring);
var http=require('http');
var server =http.createServer();

server.on('request',function(req,res){
	var params=querystring.parse(req.url.split('?')[1]);
	var fn=params.callback;
	
	
	//jsonp返回设置
	res.writeHead(200,{'Content-Type':'text/javascript'});
	res.write(fn+'('+JSON.stringify(params)+')');
	
	
	res.end();
})


//jsonp缺点：只能实现get一种请求


