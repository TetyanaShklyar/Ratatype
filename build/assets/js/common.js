$(document).ready(function(){
    $(".mode-btn").click(function(e) {
        e.preventDefault();
        $("body").toggleClass('dark');
    })
    $(".navbar-toggler").click(function(e) {
        e.preventDefault();
        $("header").toggleClass('active');
    })
    $(".restart-btn").click(function() {
        $(".trainer-input input").val(null);
        $('.text-type').text('ddfdf dffdf ffddd');
    })
});