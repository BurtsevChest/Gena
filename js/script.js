$(document).ready(function(){
     $("a.link_header").click(function (event) {
         event.preventDefault();
         var id  = $(this).attr('href'),
             top = $(id).offset().top;
         $('body,html').animate({scrollTop: top}, 1500);
     });
     $('.banner_link').click(function() {
        event.preventDefault();
        $('.banner_title').toggleClass('neon');
     }
     );
     $('.seevideo').click(function() {
     window.location.href = 'https://2gis.ru/vologda/search/Пункты%20приема%20металлолома';
     }
     )
 });



