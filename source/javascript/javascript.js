(function(){
  var logoImg   = document.getElementById('logoImg');
  var logo      = document.querySelector('logo');
  var info      = document.getElementById('mb-info');
  
  window.onscroll = function() {
    function scrollFunction() {
      if (document.body.scrollTop > 380 || document.documentElement.scrollTop > 380) {
        logoImg.style.width = "70%";
      } else {
        logoImg.style.width = "100%";
      }
    }
    scrollFunction()
  };
  // window.onclick = function(){
  //   function burguer(){
  //     var burguer      = document.querySelector('.burguer');
  //     var veladura     = document.querySelector('.veladura');
  //     if(burguer.classList.contains('open')){
  //       veladura.style.display = 'none';
  //       burguer.classList.remove('open')
  //     } else{
  //       burguer.classList.add('open')
  //       veladura.style.display = 'block';
  //     }
  //   }
  //   burguer()
  // }
  $('.burguer').click(function(){
      $(this).toggleClass( "open" )
      if($(this).hasClass( "open" )){
          $('.veladura').fadeIn();
      } else{
          $('.veladura').fadeOut();
      }
 	});
})();