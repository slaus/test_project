//Scripts


$(function () {

//Smooth scrolling of the page when you click on the menu
    $(".smooth-scroll").on("click", function (event) {
        var menu = $(this).attr('href');

        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);

    });

//Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

// scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});