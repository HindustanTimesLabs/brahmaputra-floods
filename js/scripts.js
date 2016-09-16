$(document).ready(function(){

  // share links
  var url = window.location.href;

  var twitterShare = 'https://twitter.com/home?status=Every year, flooding and erosion on the Brahmaputra become more destructive. ' + url + ' via @htTweets';
  $('.twitter-share').attr('href', twitterShare);
  var facebookShare = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
  $('.facebook-share').attr('href', facebookShare);

  var navBreak = 768;

  // position caption
  function captionPos(caption,introHeight,introTop,captionHeight){
    var introBot = introHeight+introTop;
    caption.css('top',introBot-captionHeight-40);
  }
  captionPos($('#introduction .caption'),$('#intro-wrapper').height(),$('#intro-wrapper').offset().top,$('#introduction .caption').height());
  $(window).resize(function(){
    captionPos($('#introduction .caption'),$('#intro-wrapper').height(),$('#intro-wrapper').offset().top,$('#introduction .caption').height());
  });

  // change logo
  function mobileLogo(imgDesktop,imgMobile,win){
    if (win<navBreak){
      imgDesktop.hide();
      imgMobile.show();
    } else {
      imgDesktop.show();
      imgMobile.hide();
    }
  };
  mobileLogo($('.navbar-brand-desktop'),$('.navbar-brand-mobile'),$(window).width());
  $(window).resize(function(){
    mobileLogo($('.navbar-brand-desktop'),$('.navbar-brand-mobile'),$(window).width());
  });


  // assign ids to auto-scroll parts
  $('.row.section').each(function(i){
    $(this).attr('id','part'+(i+1));
  });
  $('.nav-part').each(function(i){
    $(this).attr('href',"#part"+(i+1));
  });

  // switch up the navbar
  function navSwitch(imgDesktop,imgMobile,height,nav,scroll){
    if ($(window).width()>navBreak){
      if (scroll > height){
        nav.show();
        imgDesktop.hide();
        imgMobile.show();
      } else {
        nav.hide();
        imgDesktop.show();
        imgMobile.hide();
      }
    }
  }
  navSwitch($('.navbar-brand-desktop'),$('.navbar-brand-mobile'),$('#intro-wrapper').height()+$('#intro-wrapper').offset().top,$('.navbar-collapse .navbar-nav'),$(window).scrollTop());
  $(window).scroll(function(){
    navSwitch($('.navbar-brand-desktop'),$('.navbar-brand-mobile'),$('#intro-wrapper').height()+$('#intro-wrapper').offset().top,$('.navbar-collapse .navbar-nav'),$(window).scrollTop());
  });
  $(window).resize(function(){
    navSwitch($('.navbar-brand-desktop'),$('.navbar-brand-mobile'),$('#intro-wrapper').height()+$('#intro-wrapper').offset().top,$('.navbar-collapse .navbar-nav'),$(window).scrollTop());
    $(window).scroll(function(){
      navSwitch($('.navbar-brand-desktop'),$('.navbar-brand-mobile'),$('#intro-wrapper').height()+$('#intro-wrapper').offset().top,$('.navbar-collapse .navbar-nav'),$(window).scrollTop());
    });
  });


  // Script for smooth scroilling
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top-50
          }, 1000);
          return false;
        }
      }
    });
  });
});
