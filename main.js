
    // ............H A M B U R G H E R..............

// var hamburgerMenu = $('.hamburger-menu');
//
// hamburgerMenu.click( function () {
// $('.hamburgher-menu').slideDown('slow');
// });
//
// // solo i figli della lista
// $('.header-right').click( function() {
//   $('.hamburger-menu').slideToggle('slow');
// });



var hamburgerIcon = $('.header-right > a ')
// console.log(hamburgerIcon);

var menu = $('.hamburger-menu');
var closeIcon = $('.hamburger-menu .close');

// click
hamburgerIcon.click( function() {
  menu.addClass('active');
});

closeIcon.click(function () {
  menu.removeClass('active');
});
