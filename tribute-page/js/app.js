// Animate Smooth Scroll
$('#read-history').on('click', function() {
    const main = $('#main').position().top;
    $('html, body').animate(
        {
            scrollTop: main
        },900
    );
});