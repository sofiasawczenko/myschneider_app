$(document).ready(function() {
    $('.navbar-toggler').click(function() {
      $('#navbarSuperior').toggle(); // Alterna a visibilidade da navbar superior
    });
  });

$(document).ready(function() {
    // Ao carregar a página
    $('.navbar-web').show();  // Mostra a navbar da versão web
    $('.navbar-mobile').hide();  // Esconde a navbar da versão móvel

    // Quando o botão de alternância é clicado
$('.navbar-toggler').click(function() {
    $('.navbar-web').toggle();  // Alterna a visibilidade da navbar da versão web
    $('.navbar-mobile').toggle();  // Alterna a visibilidade da navbar da versão móvel
    });
});

  
