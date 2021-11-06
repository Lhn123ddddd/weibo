// 阻止按钮自动提交
$("button").click(function(event){
    event.preventDefault();
  });
// 生成年份
  (function(){
    for(let i=2021;i>=1970;i--){
      let mption='<option>'+i+'</option>';
      $('#year').append(mption);
    }
    for(let j=1;j<13;j++){
      let mption='<option>'+j+'</option>';
      $('#month').append(mption);
    }
    for(let m=1;m<32;m++){
      let dption='<option>'+m+'</option>';
      $('#day').append(dption);
    }
  })()
// 个人注册 官方注册来回切换
$(".tlist").on("click","li",function(){
    $(this).addClass("active").siblings().removeClass("active");
    let index = $(this).index();
    console.log(index);
    $('.form').children('div').eq(index).css('display','flex').siblings().css('display','none')
  })