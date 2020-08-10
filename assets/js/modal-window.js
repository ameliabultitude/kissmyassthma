$(document).ready(function (){
    $('a[href="ex1"]').click(function(){
        $(this).modal({
        fadeDuration: 1000,
        fadeDelay: 0.50
        });
    });
});