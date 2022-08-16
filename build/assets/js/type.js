$('.trainer-input input').on('keypress', function (e) {
    const letter = $('.text-type').text().substr(0,1);
    const string = $('.text-type');
    if(e.key == letter) {
        string.text( string.text().substr(1,string.text().length));
        $('.trainer-block .image').addClass('fine');

        setTimeout(function() {
            $('.trainer-block .image').removeClass("fine");
        }, 300);
    }
    else  {
        $('.trainer-block .image').addClass('error');

        setTimeout(function() {
            $('.trainer-block .image').removeClass("error");
        }, 800);
    }
})