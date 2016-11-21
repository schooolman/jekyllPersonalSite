var topSection = $(".cls-1");
var topMid = $(".cls-5");
var mid = $(".cls-2");
var midBottom = $(".cls-4");
var bottom = $(".cls-3");
var leftIcon = $("cl-1");
var leftNav = $("splitNavLeft");
var rightIcon = $(".rightIcon");

if(window.attachEvent) {
    window.attachEvent('onload', logoAnimate);
} else {
    if(window.onload) {
        var curronload = window.onload;
        var newonload = function(evt) {
            curronload(evt);
            logoAnimate(evt);
        };
        window.onload = newonload;
    } else {
        window.onload = logoAnimate;
    }
}

//$(".splitNavLeft").mouseover(function() {
//
//    console.log("mouse is over");
//    TweenMax.to(leftIcon, 0.5, {fill:"#00ad5f"});
//});





 function logoAnimate() {


    TweenMax.to(bottom, 1.5, {delay:.5, fill: "#faed2d"});
    TweenMax.to(midBottom, 1.5, {delay:.5, fill: "#f78d28"});
    TweenMax.to(mid, 1.5, {delay: .5, fill: "#ef392e"});
    TweenMax.to(topMid, 1.5, {delay: .5, fill:"#8451f4"});
    TweenMax.to(topSection, 1.5, {delay: .5, fill:"#4ec9f5"});


    TweenMax.to(bottom, 1.5, {delay:2, fill: "#ef392e"});
    TweenMax.to(midBottom, 1.5, {delay:2, fill: "#8451f4"});
    TweenMax.to(mid, 1.5, {delay: 2, fill: "#4ec9f5"});
    TweenMax.to(topMid, 1.5, {delay: 2, fill:"#00ad5f"});
    TweenMax.to(topSection, 1.5, {delay: 2, fill:"#faed2d"});

    TweenMax.to(bottom, 1.5, {delay:3.5, fill: "#4ec9f5"});
    TweenMax.to(midBottom, 1.5, {delay:3.5, fill: "#00ad5f"});
    TweenMax.to(mid, 1.5, {delay: 3.5, fill: "#faed2d"});
    TweenMax.to(topMid, 1.5, {delay: 3.5, fill:"#f78d28"});
    TweenMax.to(topSection, 1.5, {delay: 3.5, fill:"#ef392e"});

    //TweenMax.to(topSection, 1, {delay: 5, rotation:360, transformOrigin:"50% 50%"});
    //TweenMax.to(topMid, 1, {delay: 5, rotation:360, transformOrigin:"50% 50%"});
    //TweenMax.to(mid, 1, {delay: 5, rotation:360, transformOrigin:"50% 50%"});
    //TweenMax.to(midBottom, 1, {delay: 5, rotation:360, transformOrigin:"50% 50%"});
    //TweenMax.to(bottom, 1, {delay: 5, rotation:360, transformOrigin:"50% 50%"});

};
