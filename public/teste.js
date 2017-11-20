$('#botao-promocao').click(function() {

  var promocoes = $('.promocoes');
  if(promocoes.hasClass('invisivel')) {

    promocoes.removeClass('invisivel');
  } else {
    promocoes.addClass('invisivel');
  }

});
