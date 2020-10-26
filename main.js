
    // ............H A M B U R G H E R..............

var hamburgerMenu = $('.hamburger-menu');

hamburgerMenu.click( function () {
$('.hamburgher-menu').slideDown('slow');
});

// solo i figli della lista
$('.header-right').click( function() {
  $('.hamburger-menu').slideToggle('slow');
});
