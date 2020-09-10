/* CONTADOR DE CARACTERES */
var textareaParaCompartilhar = document.querySelector("#textarea-para-compartilhar");

textareaParaCompartilhar.addEventListener("input", function(){
    var conteudoTextarea = this.value;
    var contador = conteudoTextarea.length+"/140";
    
    var numeroDeCaracteres = document.querySelector("#contador-de-caracteres");
    var textoDeAlerta = document.querySelector("#ultrapassou-caracteres");
    var botaoDeEnviar = document.querySelector("#botao-de-enviar");

    numeroDeCaracteres.innerHTML = contador;

    if(conteudoTextarea.length > 140){
        numeroDeCaracteres.style.color = "red";
        textoDeAlerta.classList.remove("invisivel");
        botaoDeEnviar.classList.add("bloqueado");
        botaoDeEnviar.disabled = true;
    }else if(conteudoTextarea.length == 0){
        botaoDeEnviar.disabled = true;
        numeroDeCaracteres.style.color = "black";
        textoDeAlerta.classList.add("invisivel");
        botaoDeEnviar.classList.add("bloqueado");
    }else if(conteudoTextarea.length > 0 || conteudoTextarea <= 140){
        numeroDeCaracteres.style.color = "black";
        textoDeAlerta.classList.add("invisivel")
        botaoDeEnviar.classList.remove("bloqueado");
        botaoDeEnviar.disabled = false;
    }
});

/* CRIA ESTRUTURA DE CADA PIU DO API E COLOCA AS FUNÇÕES DE LIKE E DELETAR */
function criaPius(dados){
    /* CRIA ESTRUTURA DE CADA PIU */
    for(i=0; i<dados.length; i++){

        var dadosPessoa = dados[i];

        var container = document.querySelector("#bloco-ultimos-pius");

        var nome = dadosPessoa.nome;
        var username = dadosPessoa.username;
        var mensagem = dadosPessoa.mensagem;
        var imagem = dadosPessoa.imagem;

        var nomeStrong = document.createElement("strong");
        var usernameSpan = document.createElement("span");
        var mensagemSpan = document.createElement("span");
        var imagemDiv = document.createElement("div");
        var numerolikesSpan = document.createElement("span");
        var logolikeInput = document.createElement("input");
        var numeroretweetsSpan = document.createElement("span");
        var logoretweetImg = document.createElement("img");
        var numerocommentSpan = document.createElement("span");
        var logocommentImg = document.createElement("img");
        var logodeletarInput = document.createElement("input");

        var div5 = document.createElement("div");

        numerolikesSpan.textContent = "0";
        logolikeInput.src = "imagens/coracao.svg";
        numeroretweetsSpan.textContent = "0";
        logoretweetImg.src = "imagens/retweet.svg";
        numerocommentSpan.textContent = "0";
        logocommentImg.src = "imagens/comentar.svg";
        logodeletarInput.src = "imagens/bin.svg"

        div5.appendChild(numerolikesSpan);
        div5.appendChild(logolikeInput);
        div5.appendChild(numeroretweetsSpan);
        div5.appendChild(logoretweetImg);
        div5.appendChild(numerocommentSpan);
        div5.appendChild(logocommentImg);

        div5.classList.add("bloco-com-reacoes");

        numerolikesSpan.classList.add("numero-de-likes");
        logolikeInput.type = "image";
        logodeletarInput.type = "image";
        logolikeInput.classList.add("logo-like");
        logolikeInput.classList.add("logos");
        logoretweetImg.classList.add("logos");
        logocommentImg.classList.add("logos");
        logodeletarInput.classList.add("botao-de-excluir");

        nomeStrong.textContent = nome;
        usernameSpan.textContent = username;
        mensagemSpan.textContent = mensagem;
        imagemDiv.classList.add("foto-de-perfil");
        imagemDiv.style.backgroundImage = "url('"+imagem+"')";

        var div = document.createElement("div");

        div.appendChild(nomeStrong);
        div.appendChild(usernameSpan);
        div.classList.add("bloco-nome-usuario");

        var div2 = document.createElement("div");
        div2.appendChild(div);
        div2.appendChild(logodeletarInput);
        div2.classList.add("bloco-nome-usuario-excluir");

        var div3 = document.createElement("div");
        div3.appendChild(div2);
        div3.appendChild(mensagemSpan);
        div3.appendChild(div5);
        mensagemSpan.classList.add("bloco-conteudo-do-piu");
        div3.classList.add("bloco-tirando-foto");

        var div4 = document.createElement("div");
        div4.appendChild(imagemDiv);
        div4.appendChild(div3);
        div4.classList.add("bloco-para-cada-piu");

        container.appendChild(div4);
    }
    
    /* INSERE AS FUNÇÕES DE DELETAR E LIKAR */
    var todosOsPius = document.querySelectorAll(".bloco-para-cada-piu");
    for(var piu of todosOsPius){
        var logodeletarInput = piu.querySelector(".botao-de-excluir");
        logodeletarInput.addEventListener("click", function(){
            console.log("fui clicado");
            this.parentNode.parentNode.parentNode.remove();
        });

        var logolikeInput = piu.querySelector(".logo-like")
        logolikeInput.addEventListener("click", function(){

            numeroDeLikesElemento = this.parentNode.querySelector(".numero-de-likes");

            if(Number(numeroDeLikesElemento.textContent) == 0 ){
                numeroDeLikesElemento.textContent = Number(numeroDeLikesElemento.textContent)+1;
            }else{
                numeroDeLikesElemento.textContent = Number(numeroDeLikesElemento.textContent)-1;
            }

        });
    }
}

acessarAPI(criaPius);

/* CRIA ESTRUTURA PARA O PIU QUE VOCÊ ENVIA E CRIA AS FUNÇÕES DE LIKE E DELETAR*/
var enviar = document.querySelector("#botao-de-enviar");
enviar.addEventListener("click", function(){
    var texto = document.querySelector("#textarea-para-compartilhar");
    var piuSpan = document.createElement("span");
    var container = document.querySelector("#bloco-ultimos-pius");

    piuSpan.textContent = texto.value;
    piuSpan.classList.add("bloco-conteudo-do-piu");
    var mensagemSpan = piuSpan;

    var nomeStrong = document.createElement("strong");
    var usernameSpan = document.createElement("span");
    var imagemImg = document.createElement("img");
    var numerolikesSpan = document.createElement("span");
    var logolikeInput = document.createElement("input");
    var numeroretweetsSpan = document.createElement("span");
    var logoretweetImg = document.createElement("img");
    var numerocommentSpan = document.createElement("span");
    var logocommentImg = document.createElement("img");
    var logodeletarInput = document.createElement("input");

    var div5 = document.createElement("div");

    numerolikesSpan.textContent = "0";
    logolikeInput.src = "imagens/coracao.svg";
    numeroretweetsSpan.textContent = "0";
    logoretweetImg.src = "imagens/retweet.svg";
    numerocommentSpan.textContent = "0";
    logocommentImg.src = "imagens/comentar.svg";
    logodeletarInput.src = "imagens/bin.svg"
    imagemImg.src = "imagens/foto-elias.svg"
    

    div5.appendChild(numerolikesSpan);
    div5.appendChild(logolikeInput);
    div5.appendChild(numeroretweetsSpan);
    div5.appendChild(logoretweetImg);
    div5.appendChild(numerocommentSpan);
    div5.appendChild(logocommentImg);

    div5.classList.add("bloco-com-reacoes");
    numerolikesSpan.classList.add("numero-de-likes");
    logolikeInput.type = "image";
    logodeletarInput.type = "image";
    logolikeInput.classList.add("logo-like");
    logolikeInput.classList.add("logos");
    logoretweetImg.classList.add("logos");
    logocommentImg.classList.add("logos");
    logodeletarInput.classList.add("botao-de-excluir");

    nomeStrong.textContent = "Elias Hwang";
    usernameSpan.textContent = "@eliashwang98";
    imagemImg.classList.add("foto-de-perfil");

    var div = document.createElement("div");

    div.appendChild(nomeStrong);
    div.appendChild(usernameSpan);
    div.classList.add("bloco-nome-usuario");

    var div2 = document.createElement("div");
    div2.appendChild(div);
    div2.appendChild(logodeletarInput);
    div2.classList.add("bloco-nome-usuario-excluir");

    var div3 = document.createElement("div");
    div3.appendChild(div2);
    div3.appendChild(mensagemSpan);
    div3.appendChild(div5);
    mensagemSpan.classList.add("bloco-conteudo-do-piu");
    div3.classList.add("bloco-tirando-foto");

    var div4 = document.createElement("div");
    div4.appendChild(imagemImg);
    div4.appendChild(div3);
    div4.classList.add("bloco-para-cada-piu");

    container.prepend(div4);

    logodeletarInput.addEventListener("click", function(){
        console.log("fui clicado");
        this.parentNode.parentNode.parentNode.remove();
    });
    
    var logolikeInput = document.querySelector(".logo-like")
    logolikeInput.addEventListener("click", function(){

        numeroDeLikesElemento = this.parentNode.querySelector(".numero-de-likes");

        if(Number(numeroDeLikesElemento.textContent) == 0 ){
            numeroDeLikesElemento.textContent = Number(numeroDeLikesElemento.textContent)+1;
        }else{
            numeroDeLikesElemento.textContent = Number(numeroDeLikesElemento.textContent)-1;
        }

    });
})


