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
      if(top>895){//20就是滚动条滚动到的位置，大于20才显示
	  	  
          node.style.background='rgba(0,0,0,0.7)';
		  node.style.position='fixed';
		  node.a.style.color='red';
		  
      }else{
          node.style.background='rgba(0,0,0,0)';
		  node.style.position='absolute';
		  node.style.color='rgba(0,0,0,0.8)';
		  
      }
	/*  var node=document.getElementById('sidebar-container');
      if(top>895){//20就是滚动条滚动到的位置，大于20才显示
		  node.style.position='fixed';
		  
      }else{
		  node.style.position='';
      }*/
	  var node=document.getElementById('backtop');
      if(top>500){
	  	  
		  node.style.display='';
		  node.style.color='rgba(0,0,0,0.6)';
		  
      }else{
		  node.style.display='none';
		 node.style.color='rgba(0,0,0,0)';
		  
      }
	  
  }
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