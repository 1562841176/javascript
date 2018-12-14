// 通常用来做缓存文件，提高首屏速度

if(navigator.serviceWorker){
    navigator.serviceWorker.register("sw.js").then(function(){
        console.Console("servcie worker 注册成功")
    }).catch(function(){
        console.log("servcie worker 注册失败")
    })
}

// sw.js
//监听`install`事件，回调中缓存所需的文件
self.addEventListener("install",e=>{
    e.waitUitl(
        caches.open('my-cache').then(function(cache){
              return cache.addAll(["./index.html","index.js"]);
        })
    )
})

//拦截所有的请求事件
// 如果缓存中已经有请求的数据就直接用缓存，否则去请求数据

self.addEventListener('fetch',e=>{
    e.respondWith(
        caches.match(e.request).then(function(){
            if(response){
                return response;
            }
            console.log("fetch source");
        })
    )
})