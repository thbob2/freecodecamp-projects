// Animate Smooth Scroll
$('#read-history').on('click', function() {
    const history = $('#tribute-info').position().top;
    $('html, body').animate(
        {
            scrollTop: history
        },900
    );
});