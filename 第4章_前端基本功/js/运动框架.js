/*
如何使用
	var btn200 = document.getElementById("btn200");
    var btn400 = document.getElementById("btn400");
    var box = document.getElementById("box");
    btn200.onclick = function() {
        animate(box,{width: 200, top: 800,left: 200},function(){alert("我来了")});
    }
    btn400.onclick = function() {
        animate(box,{top:500});
    }*/
   
    // 多个属性运动框架  添加回调函数
    function animate(obj,json,fn) {  // 给谁    json
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            var flag = true;  // 用来判断是否停止定时器   一定写到遍历的外面
            for(var attr in json){   // attr  属性     json[attr]  值
                //开始遍历 json
                // 计算步长    用 target 位置 减去当前的位置  除以 10
               // console.log(attr);
                var current = parseInt(getStyle(obj,attr));  // 数值
               // console.log(current);
                 // 目标位置就是  属性值
                var step = ( json[attr] - current) / 10;  // 步长  用目标位置 - 现在的位置 / 10
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                obj.style[attr] = current  + step + "px" ;
                console.log(current);
                if(current != json[attr])  // 只要其中一个不满足条件 就不应该停止定时器  这句一定遍历里面
                {
                    flag =  false;
                }
            }
            if(flag)  // 用于判断定时器的条件
            {
                clearInterval(obj.timer);
                //alert("ok了");
                if(fn)   // 很简单   当定时器停止了。 动画就结束了  如果有回调，就应该执行回调
                {
                    fn(); // 函数名 +  （）  调用函数  执行函数
                }
            }
        },30)
    }
    function getStyle(obj,attr) {  //  谁的      那个属性
        if(obj.currentStyle)  // ie 等
        {
            return obj.currentStyle[attr];  // 返回传递过来的某个属性
        }
        else
        {
            return window.getComputedStyle(obj,null)[attr];  // w3c 浏览器
        }
    }

