Site = {}

$(document).ready( function(){
  $(document).on('scroll', Site.toggleNav);

  $('.nav_link').on('click', Site.scrollToSection);
  $('img').on('click', Site.openImage);

  Site.toggleNav();
})

Site.scrollToSection = function(){
  event.preventDefault();
  if (this.hash !== "") {
    

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top + 1
    }, 1000, function(){
 
      window.location.hash = hash;
    });
  } 
}

Site.toggleNav = function(){
  Site.scroll_position = $(document).scrollTop();

  Site.y2017 = $('#y2017').offset().top;
  Site.y2016 = $('#y2016').offset().top;
  Site.y2015 = $('#y2015').offset().top;
  Site.y2014 = $('#y2014').offset().top;

  if (Site.scroll_position >= Site.y2017 && Site.scroll_position < Site.y2016 && !$('.link_2017').hasClass('selected')){
    $('.nav_link').removeClass('selected');
    $('.link_2017').addClass('selected');
  } else if (Site.scroll_position >= Site.y2016 && Site.scroll_position < Site.y2015 && !$('.link_2016').hasClass('selected')){
    $('.nav_link').removeClass('selected');
    $('.link_2016').addClass('selected');
  } else if (Site.scroll_position >= Site.y2015 && Site.scroll_position < Site.y2014 && !$('.link_2015').hasClass('selected')){
    $('.nav_link').removeClass('selected');
    $('.link_2015').addClass('selected');
  } else if (Site.scroll_position >= Site.y2014 || Site.scroll_position >= $(document).height() - $(window).height() && !$('.link_2014').hasClass('selected')) {
    $('.nav_link').removeClass('selected');
    $('.link_2014').addClass('selected');
  } 
}

Site.openImage = function(){
  $('.image_modal_container').css('background', 'url(' + $(this).data('src') + ')');
  $('.image_caption').empty();
  $('.image_caption').append($(this).data('text'));

  $('.image_modal_box').toggle(); 
  $('.image_modal_container').toggle();
  $('.image_caption').toggle();


}