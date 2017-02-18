new WOW().init();

// humbarger menu
$( ".cross" ).hide();
$( ".navbar" ).hide();
$( ".hamburger" ).click(function() {
$( ".navbar" ).slideToggle( "slow", function() {
$( ".header-top-content" ).addClass("fixed");
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".header-top-content" ).removeClass("fixed");
$( ".navbar" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});