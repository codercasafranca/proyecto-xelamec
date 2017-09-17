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

//fullPage
$(document).ready(function(){
    $('#wrapper').fullpage({
        menu: '#menu',
        scrollBar: true,  
        autoScrolling: true,           
        scrollingSpeed: 600,
        easingcss3: 'cubic-bezier(0.77, 0, 0.175, 1)',
        lockAnchors: true,
        // anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
        navigation: true,
        navigationPosition: 'right',
        // navigationTooltips: ['Home', 'Xelamet Spot On', '¿Como funciona?', 'page4', 'page5', 'page6', 'page7', 'page8'],
        showActiveTooltip: true,        
        // slidesNavigation: false,
        // slidesNavPosition: 'top',  
    });
});

/*******************
 *     navScroll   *
 *******************/
$('.ui-nav-xelamec ul li a').click(function(e){
      e.preventDefault();
        enlace  = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(enlace).offset().top+1
        }, 1000);
});

/*******************************
 *           navEfects         *
 *******************************/
$(document).ready(function() { 
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#page2").offset();
        contenido2 = contenido2.top;
 
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
        contenido2 = contenido2.top;
 
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
        contenido2 = contenido2.top;
 
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
        contenido2 = contenido2.top;
 
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
        contenido2 = contenido2.top;
 
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
        contenido2 = contenido2.top;
 
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
        contenido2 = contenido2.top;
 
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