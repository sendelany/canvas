var backgroundImages = ['bg-02.jpg', 'bg-03.jpg', 'bg-04.jpg', 'bg-05.jpg', 'bg-06.jpg', 'bg-07.jpg', 'bg-01.jpg'];

$(document).ready(function () {

    var imageIndex = 0;

    setInterval(function () {
        // $('html').css('background', 'url(./images/' + backgroundImages[imageIndex] + ') no-repeat center center fixed')
        // .css('-webkit-background-size', 'cover')
        // .css('-moz-background-size', 'cover')
        // .css('-o-background-size', 'cover')
        // .css('background-size', 'cover'); 

        //Although the above is a niftier solution coupled with  ‘CSS: transition: background 1s linear;’, it is not as widely supported as the below JS only solution. 

        $('html').fadeTo('slow', 0.5, function () {
            $(this).css('background', 'url(./images/' + backgroundImages[imageIndex] + ') no-repeat center center fixed')
                .css('-webkit-background-size', 'cover')
                .css('-moz-background-size', 'cover')
                .css('-o-background-size', 'cover')
                .css('background-size', 'cover');
        }).fadeTo('slow', 1);

        imageIndex++;
        if (imageIndex >= backgroundImages.length)
            imageIndex = 0;
    }, 10000);

});

function changeSiteCurrency(value) {
    $('.currency-toggle').find('span').html(value);
}