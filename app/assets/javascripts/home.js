$(document).ready(function (){
    $('img').hide();

  var firstClick;
  var secondClick;
  var matchOne;
  var matchTwo;

  // $('#runner').runner();

  $('.black-bg').on('click', function() {
    $(this).find('img').slideToggle('black-bg');
    if($(this).hasClass('clicked')) {
    } else {

       $(this).removeClass('black-bg');
       if(firstClick) {
         secondClick = $(this);
         matchTwo = secondClick.children('img').attr('src');

         if(matchOne === matchTwo) {
           $(firstClick).addClass('clicked');
           $(secondClick).addClass('clicked');
           Materialize.toast('Match!', 1000);
           firstClick = null;
         } else {
           setTimeout(flipBack, 1000);
           Materialize.toast('Not a match!', 1000);
         }
       } else {
         firstClick = $(this)
         matchOne = firstClick.children('img').attr('src');
       }
   }

   function flipBack() {
     $(firstClick).find('img').slideToggle('black-bg');
     $(secondClick).find('img').slideToggle('black-bg');
     firstClick = null;
   };


  });
});
