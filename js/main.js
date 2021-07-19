document.addEventListener('DOMContentLoaded', ()=> {
    $(document).ready(main);
    var contador = 1;

    function main() {
        const btn = document.querySelector('.menu-burger');
        let open = false;
        $('.menu_bar').click(function(){
            if(contador == 1) {
                $('.barra-menu').animate({
                    left: '0'
                });
                btn.classList.add('open');
                open = true;
                contador = 0;
            }else {
                btn.classList.remove('open');
                open = false;
                contador = 1;
                $('.barra-menu').animate({
                    left: '-100%'
                
                });
            }

        });
        
    };
});

document.addEventListener('DOMContentLoaded', ()=> {
  $(document).ready(main);
  var contador = 1;

  function main() {
      const btn = document.querySelector('.menu-burger-o');
      let open = false;
      $('.menu_bar-o').click(function(){
          if(contador == 1) {
              $('.barra-menu-o').animate({
                  right: '0'
              });
              btn.classList.add('openn');
              open = true;
              contador = 0;
          }else {
              btn.classList.remove('openn');
              open = false;
              contador = 1;
              $('.barra-menu-o').animate({
                  right: '-100%'
              
              });
          }

      });
      $('.btn-enlace').click(function(){
        if(contador == 1) {
            $('.barra-menu-o').animate({
                right: '0'
            });
            btn.classList.add('openn');
            open = true;
            contador = 0;
        }else {
            btn.classList.remove('openn');
            open = false;
            contador = 1;
            $('.barra-menu-o').animate({
                right: '-100%'
            
            });
        }
    });    
  };
});


$(document).ready(function() {
  var ir_a = $(".down");

  ir_a.click(function(e) {
      e.preventDefault();
      $("body, html").animate(
          {
              scrollTop: $(this.hash).offset().top,
          }, 3800,         
      )
  })
})

$(document).ready(function() {
  var ir_a = $(".desplazar");

  ir_a.click(function(e) {
      e.preventDefault();
      $("body, html").animate(
          {
              scrollTop: $(this.hash).offset().top,
          }, 3000,         
      )
  })
})

$(document).ready(function() {
$(".ir-arriba").click(function(e) {
  e.preventDefault();
  $("body, html").animate({
    scrollTop: '0px'
  },2000);
})

$(window).scroll(function() {
  if($(this).scrollTop() > 0) {
    $(".ir-arriba").slideDown(300);
  }else {
    $(".ir-arriba").slideUp(300);
  }
})
})
