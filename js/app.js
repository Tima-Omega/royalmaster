$(document).ready(function(){
    $(".contact__input").mask("(999) 999-99-99");
    $(".modal__input--tel").mask("+7 (999) 999-99-99");
    $(".burger__btn").click(function(){
        $(".burger__list").slideToggle();
    });
    $('.overlay').click(function () {
        $(this).fadeOut();
        $('.modal').fadeOut();
    });
    $('.wedo__btn').click(function() {
        $('.overlay').fadeIn();
        $('.modal__wedo').fadeIn();
    });
    $('.order').click(function() {
        $('.overlay').fadeIn();
        $('.modal-order').fadeIn();
    });
    $('.order__mail').click(function() {
        $('.overlay').fadeIn();
        $('.modal-order-big').fadeIn();
    });
    $('.done').click(function() {
        $('.overlay').fadeIn();
        $('.modal-done').fadeIn();
    });
    $('.modal__close').click(function () {
        $(this).closest('.modal').fadeOut();
        $('.overlay').fadeOut();
    });
    
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.modal').fadeOut();
            $('.overlay').fadeOut();
        }
    });

});
