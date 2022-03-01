$(document).ready(function () {
    $('.web-info-button').click(function (e) { 
        e.preventDefault();
        $(this).find('.info-content').toggle('show');
        $(this).siblings().toggle('hide');
        $('.sl-language').toggleClass('in-active');
    });
    $('.nav-icon').click(function (e) { 
        e.preventDefault();
        $('.navbar').addClass('active');
        $('.cover').addClass('active');
    });
    $('.cover').click(function (e) { 
        e.preventDefault();
        $('.navbar').removeClass('active');
        $('.cover').removeClass('active');
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