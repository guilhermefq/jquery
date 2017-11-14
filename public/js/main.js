var frase = $(".frase").text();
numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");

tamanhoFrase.text(numPalavras);


var campo = $(".campo-digitacao");
campo.on("input", function(){
    var conteudo = campo.val();
    var qntpalavras = conteudo.split(/\S+/).length -1;
    $("#contador-palavras").text(qntpalavras);

    var qntcaracteres = conteudo.length;
    $("#contador-caracteres").text(qntcaracteres);
});
