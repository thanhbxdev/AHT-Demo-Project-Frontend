$(document).ready(function () {
    $('.nav-icon').click(function (e) {
        e.preventDefault();
        $('.navbar-center').addClass('active');
        $('.close').addClass('active');
    });
    $('.close').click(function (e) {
        e.preventDefault();
        $('.navbar-center').removeClass('active');
        $('.close').removeClass('active');
    });
    var day = $('.days span').html();
    var hrs = $('.hours span').html();
    var mins = $('.mins span').html();
    var secs = $('.secs span').html();
    setInterval(function(){
        secs--;
        if (secs==-1) {
            secs=59;
            mins--;
            if (mins==-1) {
                mins=59;
                hrs--;
                if (hrs==-1) {
                    hrs=23;
                    day--;
                }
            }
        }
        $('.days span').html(day);
        $('.hours span').html(hrs);
        $('.mins span').html(mins);
        $('.secs span').html(secs);
    }, 1000);
});