function openPresentacion(evt, cityPresentacion) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent-presentacion");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityPresentacion).style.display = "block";
    evt.currentTarget.className += " active";
}

/*******************
 *     vertical dots   *
 *******************/
$('.ui-btn-vertical-dots li a').click(function(e){
      e.preventDefault();
        enlace  = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(enlace).offset().top-111
        }, 1000);
});

// vertical dots colores
$(document).ready(function() {
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#page2").offset();
        contenido2 = contenido2.top-111;

        if(windowHeight >= contenido2  ){
          $('.ui-btn-vertical-dots').addClass("vertical-dots-dos");
            }else{
          $('.ui-btn-vertical-dots').removeClass("vertical-dots-dos");
        }
    });
});

// vertical dots colores
$(document).ready(function() {
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#page3").offset();
        contenido2 = contenido2.top-111;

        if(windowHeight >= contenido2  ){
          $('.ui-btn-vertical-dots').addClass("vertical-dots-tres");
            }else{
          $('.ui-btn-vertical-dots').removeClass("vertical-dots-tres");
        }
    });
});

// vertical dots colores
$(document).ready(function() {
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#page4").offset();
        contenido2 = contenido2.top-111;

        if(windowHeight >= contenido2  ){
          $('.ui-btn-vertical-dots').addClass("vertical-dots-cuatro");
            }else{
          $('.ui-btn-vertical-dots').removeClass("vertical-dots-cuatro");
        }
    });
});

// vertical dots colores
$(document).ready(function() {
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#page5").offset();
        contenido2 = contenido2.top-111;

        if(windowHeight >= contenido2  ){
          $('.ui-btn-vertical-dots').addClass("vertical-dots-cinco");
            }else{
          $('.ui-btn-vertical-dots').removeClass("vertical-dots-cinco");
        }
    });
});

// vertical dots colores
$(document).ready(function() {
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#page6").offset();
        contenido2 = contenido2.top-111;

        if(windowHeight >= contenido2  ){
          $('.ui-btn-vertical-dots').addClass("vertical-dots-seis");
            }else{
          $('.ui-btn-vertical-dots').removeClass("vertical-dots-seis");
        }
    });
});

// vertical dots colores
$(document).ready(function() {
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#page7").offset();
        contenido2 = contenido2.top-111;

        if(windowHeight >= contenido2  ){
          $('.ui-btn-vertical-dots').addClass("vertical-dots-siete");
            }else{
          $('.ui-btn-vertical-dots').removeClass("vertical-dots-siete");
        }
    });
});

// vertical dots colores
$(document).ready(function() {
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#page8").offset();
        contenido2 = contenido2.top-111;

        if(windowHeight >= contenido2  ){
          $('.ui-btn-vertical-dots').addClass("vertical-dots-ocho");
            }else{
          $('.ui-btn-vertical-dots').removeClass("vertical-dots-ocho");
        }
    });
});

// vertical dots colores
$(document).ready(function() {
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#page9").offset();
        contenido2 = contenido2.top-111;

        if(windowHeight >= contenido2  ){
          $('.ui-btn-vertical-dots').addClass("vertical-dots-nueve");
            }else{
          $('.ui-btn-vertical-dots').removeClass("vertical-dots-nueve");
        }
    });
});

/*******************
 *     navScroll   *
 *******************/
$('.ui-nav-xelamec ul li a').click(function(e){
      e.preventDefault();
        enlace  = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(enlace).offset().top-111
        }, 1000);
});

/*******************************
 *           navEfects         *
 *******************************/
$(document).ready(function() {
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#page2").offset();
        contenido2 = contenido2.top-111;

        if(windowHeight >= contenido2  ){
          $('.ui-nav-xelamec').addClass("menu-page-dos");
            }else{
          $('.ui-nav-xelamec').removeClass("menu-page-dos");
        }
    });
});

$(document).ready(function() {
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#page3").offset();
        contenido2 = contenido2.top-111;

        if(windowHeight >= contenido2  ){
          $('.ui-nav-xelamec').addClass("menu-page-tres");
            }else{
          $('.ui-nav-xelamec').removeClass("menu-page-tres");
        }
    });
});

$(document).ready(function() {
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#page4").offset();
        contenido2 = contenido2.top-111;

        if(windowHeight >= contenido2  ){
          $('.ui-nav-xelamec').addClass("menu-page-cuatro");
            }else{
          $('.ui-nav-xelamec').removeClass("menu-page-cuatro");
        }
    });
});

$(document).ready(function() {
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#page5").offset();
        contenido2 = contenido2.top-111;

        if(windowHeight >= contenido2  ){
          $('.ui-nav-xelamec').addClass("menu-page-cinco");
            }else{
          $('.ui-nav-xelamec').removeClass("menu-page-cinco");
        }
    });
});

$(document).ready(function() {
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#page6").offset();
        contenido2 = contenido2.top-111;

        if(windowHeight >= contenido2  ){
          $('.ui-nav-xelamec').addClass("menu-page-seis");
            }else{
          $('.ui-nav-xelamec').removeClass("menu-page-seis");
        }
    });
});

$(document).ready(function() {
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#page7").offset();
        contenido2 = contenido2.top-111;

        if(windowHeight >= contenido2  ){
          $('.ui-nav-xelamec').addClass("menu-page-siete");
            }else{
          $('.ui-nav-xelamec').removeClass("menu-page-siete");
        }
    });
});

$(document).ready(function() {
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#page8").offset();
        contenido2 = contenido2.top-111;

        if(windowHeight >= contenido2  ){
          $('.ui-nav-xelamec').addClass("menu-page-ocho");
            }else{
          $('.ui-nav-xelamec').removeClass("menu-page-ocho");
        }
    });
});

$(window).load(function(){
      $(".demo").twentytwenty({default_offset_pct: 0.7});
});

// seccion contacto
function openContacto(evt, contactoName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent-contacto");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks-contacto");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(contactoName).style.display = "block";
    evt.currentTarget.className += " active";
}

$("#item-contacto-uno").click(function(){
    $("#mascotaImagen").show();
});

$("#item-contacto-dos").click(function(){
    $("#veterinarioImagen").show();
});

$(document).ready(function(){
  $('.bxslider.producto-home').bxSlider({
    pager:false,
    mode:'fade',
    speed: 500,
    auto:true,
  });
});

$(document).ready(function(){
    $( ".ui-btn-responsive" ).click(function() {
      $( "#menu-responsive" ).slideToggle("slow");
    });
});

$(document).ready(function(){
    $( "#menu-responsive > ul li" ).click(function() {
      $( "#menu-responsive" ).fadeOut("slow");
    });
});

/**************************
 *     navScroll Footer   *
 **************************/
$('.ui-lista-footer li a').click(function(e){
    e.preventDefault();
        enlace  = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(enlace).offset().top-111
    }, 1000);
});

$(window).load(function() {
    $('.flexslider-banner').flexslider();
});

$(window).load(function() {
    $('.flexslider-circulos').flexslider();
});


function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

$(document).ready(function() {
    setTimeout(function() {
        $(".flexslider-banner").fadeIn();
    },100);
});

$(document).ready(function() {
    setTimeout(function() {
        $(".ui-box-items-icons-banner > .ui-box").fadeIn();
    },100);
});

 $(document).ready(function() {
     setTimeout(function() {
         $(".ui-loading-xelamec").fadeOut();
     },6000);
 });

/********************************
 *       modalEfectividad       *
 ********************************/
$("#btn-modal-efectividad-tool").hover(function(){
    $("#mensaje-tool").show();
}, function(){
    $("#mensaje-tool").hide();
});