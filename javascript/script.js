/*  window.onscroll=function(){
      var top=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
      var node=document.getElementById('outer');
      if(top>96){//20就是滚动条滚动到的位置，大于20才显示
          node.style.display='';
      }else{
          node.style.display='none';
      }
  }
 */
   window.onscroll=function(){
      var top=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
      var node=document.getElementById('outer');
      if(top>745){//20就是滚动条滚动到的位置，大于20才显示
	  	  
          node.style.background='rgba(0,0,0,0.7)';
		  node.style.position='fixed';
		  node.style.height='30px';
		  node.style.lineHeight='55%';
		  node.style.color="red";
		  node.style.zIndex=2010;//优先层叠，数字越大，越上方
		  
      }else{
          node.style.background='rgba(0,0,0,0)';
		  node.style.position='absolute';
		  node.style.lineHeight='100%';
		  node.style.color='rgba(0,0,0,0.8)';
		  node.style.zIndex=2010;
      }
	  var node=document.getElementById('nav1');
      if(top>745){//20就是滚动条滚动到的位置，大于20才显示
	  	  lineHeight='20%';
          node.style.margin="-10px auto auto auto";
		  
      }else{
		  node.style.margin="0px auto auto auto";
      }
	  var node=document.getElementById('login-area');
      if(top>745){//20就是滚动条滚动到的位置，大于20才显示
	  	  lineHeight='20%';
          node.style.margin="-10px auto auto auto";
		  
      }else{
		  node.style.margin="0px auto auto auto";
      }
	 /* var node=document.getElementByClassName("textcolor");
      if(top>745){
	  	  
		  node.style.color="red";
		  
      }else{
		 node.style.color='rgba(0,0,0,0)';
		  
      }*/
	/*  var node=document.getElementById('sidebar-container');
      if(top>895){//20就是滚动条滚动到的位置，大于20才显示
		  node.style.position='fixed';
		  
      }else{
		  node.style.position='';
      }*/
	  var node=document.getElementById('backtop');
      if(top>500){
	  	  
		  node.style.display='';
		 /* node.style.color='rgba(0,0,0,0.6)';*/
		  node.style.zIndex=2010;
		  
      }else{
		  node.style.display='none';
		 /*node.style.color='rgba(0,0,0,0)';*/
		 node.style.zIndex=2010;
		  
      }
	  
	  var node=document.getElementById('sidebar-container');
      if(top>745){
	  	  
		  node.style.position='relative';
		  node.style.display='';
		  
      }else{
		  node.style.position='static';
		  
      }
	  var node=document.getElementById('sidebar-fix');
      if(top>875){
	  	  
		  node.style.position='fixed';
		  node.style.display='';
		  node.style.top='70px';
		  node.style.width='200px';
		  
      }else{
		  node.style.position='static';
		  
      }
/*	  var node=document.getElementByID('tag');
      if(top>950){
	  	  node.style.width='200px';
		  
      }else{
		  node.style.width='200px';
		  
      }*/
  }
  
  var flag = true,//状态true为正常的状态,false为放大的状态
           imgH,//图片的高度
           imgW,//图片的宽度
           img = document.getElementsByClassName('enlarge')[0];//图片元素
  img.onclick =  function(){
      //图片点击事件
       imgH = img.height; //获取图片的高度
       imgW = img.width; //获取图片的宽度
       if(flag){
           //图片为正常状态,设置图片宽高为现在宽高的2倍
           flag = false;//把状态设为放大状态
           img.height = imgH*2;
           img.width = imgW*2;
       }else{
           //图片为放大状态,设置图片宽高为现在宽高的二分之一
           flag = true;//把状态设为正常状态
           img.height = imgH/2;
           img.width = imgW/2;
       }
  }
  /*$(function(){$("[data-toggle='tooltip']").tooltip()}),$(document).ready(function(){$("table").wrap("<div class='table-responsive'></div>"),$("table").addClass("table")}),$(document).ready(function(){$('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>'),$('iframe[src*="youtube.com"]').addClass("embed-responsive-item"),$('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>'),$('iframe[src*="vimeo.com"]').addClass("embed-responsive-item")}),jQuery(document).ready(function(a){var b=970;if(a(window).width()>b){var c=a(".navbar-custom").height();a(window).on("scroll",{previousTop:0},function(){var b=a(window).scrollTop();b<this.previousTop?b>0&&a(".navbar-custom").hasClass("is-fixed")?a(".navbar-custom").addClass("is-visible"):a(".navbar-custom").removeClass("is-visible is-fixed"):(a(".navbar-custom").removeClass("is-visible"),b>c&&!a(".navbar-custom").hasClass("is-fixed")&&a(".navbar-custom").addClass("is-fixed")),this.previousTop=b})}});*/
/*   window.onscroll=function(){
      var top=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
      var node=document.getElementById('backtop');
      if(top>450){示
	  	  
		  node.style.display='';
		  node.style.color='rgba(0,0,0,0.6)';
		  
      }else{
		  node.style.display='none';
		 node.style.color='rgba(0,0,0,0)';
		  
      }
	  
  }*/
/*  
  $(document).ready(function() {

    // hide #back-top first
    $("#back-top").hide();

    // fade in #back-top
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

});
*/