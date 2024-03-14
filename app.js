let listaDeNumerosSorteados = [];
let numeroLimite = 50;
let numeroSecreto = numAleatorio();
let tentativas = 1;
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"

function exibirTexto (tag, texto){
    //função que exibe texto na tela.
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTexto("h1", "Bem-vindo ao jogo dos números!" );
    exibirTexto("p", `Escolha um numero entre 1 e ${numeroLimite}:`);
}

exibirMensagemInicial();

function verificarChute(){
    //função sem parâmetro e sem retorno.
    //value é colocado pois é um valor que foi colocado dentro do sistema.
    //atribui o tipo boolean (valor verdadeiro ou falso).
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto){
        exibirTexto("h1", "Parabéns!");
        //criada para que não ocorra um erro, ja que o html não costuma ler template strings.
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTexto("p", mensagemTentativas);
        //O Id é um identifficador único;
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        if (chute > numeroSecreto){
            exibirTexto("p", `O número secreto é menor que ${chute}!`);
        } else{
            exibirTexto("P", `O número secreto é maior que ${chute}!`);
        }
        //tentativas = tentativas + 1;
        tentativas++
        limparCampo();
    }
    
}

function numAleatorio(){
    //função sem parâmetro mas com retorno.
    let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    //includes verifica se o item esta presente na lista.
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return numAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    // Nesse caso não adicionamos o "VALUE" pois não quermos que retorne um valor para gente;
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    numeroSecreto = numAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    //getElementById seleciona o id especifico e setAttribute aciona o atributo desabilitado junto da confirmação "true";
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

