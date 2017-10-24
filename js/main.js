
(function(){

    $(window).on("scroll", function () {
        var distanceTop = $(window).scrollTop();
        if ($(window).scrollTop()>400) {
            $('.scrollToTop').css("display","inline-block");
        }
        else {
            $('.scrollToTop').css("display","none");
        }
    })

    $('.scrollToTop').on("click", function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('header').offset().top
        }, 800);
    })


    function findLorem() {
        var textStrony = document.getElementsByTagName('body')[0].outerText;
        var lowerText = textStrony.toLowerCase();

        var lorem = lowerText.search('lorem');

        console.log(lorem);

    }

    findLorem();



})();
