$(document).ready(function() {
    $('.bars').click(function(event) {
        $('.burger-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function() {
    $('.button-close-burger').click(function(event) {
        $('.burger-menu').removeClass('active');
        $('body').removeClass('lock');
    });
});
