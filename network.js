/* FUNÇÃO QUE SERVE PARA FAZER A REQUISIÇÃO NO API */
function acessarAPI(callback){

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://next.json-generator.com/api/json/get/EkyZfHLU_");
    var dados = null;

    xhr.addEventListener("load", function(){
        var dadosString = xhr.responseText;
        dados = JSON.parse(dadosString);
        callback(dados);
    });

    xhr.send();
}

