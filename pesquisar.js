/* FUNÇÃO QUE FILTRA OS DADOS E MOSTRA OS NOMES NECESSÁRIOS */
acessarAPI(filtroDeBuscaListener);

function filtroDeBuscaListener(dados){
    var campoFiltro = document.querySelector("#procurador");

    campoFiltro.addEventListener("input", function(){
        var busca = this.value;
        var expressao = RegExp(busca, "i");
        var listaNomes = document.querySelector(".lista-de-nomes");
        listaNomes.innerHTML = '';
        for(usuario of dados){
            if(busca.length !==0 && expressao.test(usuario.nome)){
                montarResultadosDeBusca(usuario);
            }
        }
    });
}

/* CRIA ESTRUTURA PRO FILTRO DE BUSCA */
function montarResultadosDeBusca(JSONusuario){
    var span = document.createElement("span");
    var div = document.createElement("div");
    span.textContent = JSONusuario["nome"];

    span.classList.add("nome");
    
    div.appendChild(span);
    div.classList.add("pessoa");

    var listaNomes = document.querySelector(".lista-de-nomes");
    listaNomes.appendChild(div);
};

