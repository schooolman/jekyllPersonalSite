


$(document).ready(function() {

    // Global Variables declared here
    var headerOne = $(".sectionOneHeader");
    var headerTwo = $(".sectionOneSubHeader");
    var planeOne = $(".airplane");
    var planeTwo = $(".airplaneTwo");
    var planeThree = $(".airplaneThree");

    //This time line fires on page load. Use callbacks for more animations
    //
    var tl = new TimelineMax();
    tl.to(headerOne, 1, {scale: 1.2})
        .to(headerTwo, 1, {scale: 1.1});

    //----------------------------------------------------//
    //----------------------------------------------------//
    //------Animations triggered on scroll functions------//
    //----------------------------------------------------//
    //----------------------------------------------------//
    $(window).scroll(function(){
        var logoMove = $(this).scrollTop();

       if($(this).scrollTop() < 1200) {
           $('.logoMain').css('right', logoMove);
       }

        if($(this).scrollTop() > 1000) {
            //fadeLogo();
            $('.logoMain').css('opacity', 0);
            console.log("animation has fired");
        } else  {
            $('.logoMain').css('opacity', 1);
        }

        if($(this).scrollTop() > 1050) {
            getPlaneTimeline();
        }
    });


    //-----------------------------------------------------//
    //-----------------------------------------------------//
    //------Airplane animations for content section 3------//
    //-----------------------------------------------------//
    //-----------------------------------------------------//
    function getPlaneTimeline() {
        var planeTimeline = new TimelineMax();

        planeTimeline.to(planeOne, 2, {bottom: 300, left: 400})
            .to(planeTwo, 2, {delay: -1, bottom: 400, left: 800})
            .to(planeThree, 2, {delay: -1, bottom: 400, left: 1000})
            .to(planeOne, 0.01, {delay: -1, bottom: -200, left: 600, autoAlpha: 0})
            .to(planeOne, 0.01, {autoAlpha: 1})
            .to(planeOne, 1.5, {bottom: 300, left: 1000})
            .to(planeTwo, 0.01, {delay: -1, bottom: -200, left: 800, autoAlpha: 0})
            .to(planeTwo, 0.01, {autoAlpha: 1})
            .to(planeTwo, 1.5, {bottom: 300, left: 1200});
    }

    function moveLogo(){
        $(window).scroll(function(){
            scrollCounter++;
            $(".logoMain").css("right", (scrollCounter + 5));
            console.log(scrollCounter);
            return scrollCounter;
        });
    }

    function fadeLogo(){
        $(".logoMain").css("opacity", 0);
        console.log("else!");
    }

});
