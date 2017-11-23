$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function fraseAleatoria() {
    $("#spinner").toggle();
    $(".frase").hide();


    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(function() {
        $("#erro").toggle();
        setTimeout(function() {
            $("#erro").toggle();
        },1500);
    })
    .always(function() {
        $("#spinner").toggle();
        $(".frase").show();
    });

}

function trocaFraseAleatoria(data) {
    var frase = $(".frase");
    var numAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numAleatorio].tempo);
}

function buscaFrase() {
    $("#spinner").toggle();
    var fraseID = $("#frase-id").val();

    var dados = {id: fraseID};

    $.get("http://localhost:3000/frases", dados, trocaFrase)
        .fail(function(){
            $("#erro").toggle();
            setTimeout(function() {
                $("#erro").toggle();
            },2000);
        })
        .always(function() {
            $("#spinner").toggle();
        });
}

function trocaFrase(data) {
    console.log(data);

    var frase = $(".frase");
    frase.text(data.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}
