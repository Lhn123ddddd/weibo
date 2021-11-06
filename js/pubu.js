window.onload = function(){ 
    //在window加载完毕时调用此函数 
    warterfall("main","box"); 
    var dataInt = {
         "data":[ 
             { "src":'./images/hh1.jpg' },
             { "src":'./images/hh2.jpg' },
             { "src":'./images/hh3.jpg' },
             { "src":'./images/hh4.jpg' },
             { "src":'./images/hh5.jpg' } ] }
             //监听window的滚动条事件 
             window.onscroll = function(){
                  if(checkScrollSlide){ 
                      var oParent = document.getElementById('main'); 
                      //将数据块渲染到页面的尾部 
                      for(var i = 0;i < dataInt.data.length;i++){
                           var oBox = document.createElement("div"); 
                           oBox.className = "box"; 
                           oParent.appendChild(oBox);
                            var oPic = document.createElement("div"); 
                            oPic.className = "pic"; 
                            oBox.appendChild(oPic); 
                            var oImg = document.createElement("img");
                             oImg.src = dataInt.data[i].src;
                             oPic.appendChild(oImg); 
                            }
                        warterfall("main","box");   
                         } 
                         } 
                    }
                    //定义waterfall函数 
                    function warterfall(parent,box){ 
                        //将main下的所有class为box的元素取出来 
                        var oParent = document.getElementById(parent); 
                        var oBoxs = getByClass(oParent,box); 
                        //计算整个页面显示的列数(页面宽/box的宽); 
                        var oBoxW = oBoxs[0].offsetWidth; 
                        var cols = Math.floor(document.documentElement.clientWidth/oBoxW); 
                        //设置mian的宽度 
                        oParent.style.cssText = 'width:' + oBoxW * cols + 'px;margin:0 auto'; 
                        var hArr = []; 
                        for(var i = 0; i < oBoxs.length;i++){ 
                            if(i < cols){ 
                                // 将前cols张图片的宽度记录到hArr数组中(第一行的高度) 
                                hArr.push(oBoxs[i].offsetHeight);
                             }else{
                                 //从第二行开始就开始找最小的高度了，决定带插入图片该插入到哪里 
                                 // 找到高度最小的值 
                                 var minH = Math.min.apply(null,hArr); 
                                 var index = getMinhIndex(hArr,minH); 
                                 // 设置最小高度的图片的style为绝对定位，并设置top和left 
                                 oBoxs[i].style.position = 'absolute';
                                  oBoxs[i].style.top = minH + 'px'; 
                                  oBoxs[i].style.left = oBoxW * index + 'px'; 
                                  hArr[index] += oBoxs[i].offsetHeight; 
                                }
                             } }
                             //根据class获取元素 
                             function getByClass(parent,clsName){
                                  var boxArr = [];
                                  //用来存储获取到的所有class为box的元素 
                                  var oElements = parent.getElementsByTagName("*"); 
                                  for(var i = 0; i < oElements.length;i++){
                                       if(oElements[i].className == clsName){
                                            boxArr.push(oElements[i]); 
                                        } }
                                        return boxArr;
                                     }//定义函数获取hArr数组中最小值的下标值 
                                     function getMinhIndex(arr,val){
                                          for(var i in arr){
                                               if(arr[i] == val){
                                                    return i; 
                                                } 
                                            } }
                                            //定义函数检测是否具备了滚动加载数据块的条件 
                                            function checkScrollSlide(){
                                                 var oParent = document.getElementById('main');
                                                  var oBoxs = getByClass(oParent,'box'); 
                                                  //获取最后一块数据到顶部的距离+ 它自身一半的距离
                                                  var lastBoxH = oBoxs[oBoxs.length - 1].offsetTop + Math.floor(oBoxs[oBoxs.length - 1].offsetHeight/2); 
                                                  //获取滚动条滚动距离 
                                                  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop; 
                                                  // 获取window可视化的高度 
                                                  var height = document.body.clientHeight || document.documentElement.clientHeight; 
                                                  return (lastBoxH < scrollTop + height)?true:false; 
                                            }