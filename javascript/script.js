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
      if(top>877){//20就是滚动条滚动到的位置，大于20才显示
          node.style.background='rgba(0,0,0,0.35)';
		  node.style.position='fixed';
		  
      }else{
          node.style.background='rgba(0,0,0,0)';
		  node.style.position='absolute';
		  
      }
  }
  
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