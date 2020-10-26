
    // ............H A M B U R G H E R..............

var hamburgerMenu = $('hamburger-menu ul li a');

hamburgerMenu.click( function () {
$('.hamburgher-menu').hide('slow');
});

var hidden;
// solo i figli della lista
$('.header-right a i').click( function() {
  if (hidden = true){
    $('.hamburger-menu').show('slow');
  }
});
