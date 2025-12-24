let numeroLimite = 10;
let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;

//molde função para exibir texto na tela
const exibirTextoNaTela = (tag, texto) => {
    const elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
}

function exibirTexto() {
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela(".texto__paragrafo", "Descubra o número secreto entre 1 e 10!");
}
exibirTexto();

function gerarNumeroSecreto() {
    let numeroSecreto = parseInt((Math.random() * numeroLimite) + 1);
    let tamanhoLista = listaDeNumerosSorteados.length;

    if (tamanhoLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroSecreto)) {
        return gerarNumeroSecreto();
    } else {
        listaDeNumerosSorteados.push(numeroSecreto);
        return numeroSecreto;
    }

}

function verificarChute() {
    let inputChute = document.querySelector("input").value;

    let mensagemMenor = `O número secreto é menor que ${inputChute}`;
    let mensagemMaior = `O número secreto é maior que ${inputChute}`;

    if (inputChute == numeroSecreto) {
        let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";

        let mensagemAcerto = `Parábens! Você acertou o número secreto 👉 ${numeroSecreto}, com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela("h1", "Você acertou!");
        exibirTextoNaTela("p", mensagemAcerto);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (inputChute > numeroSecreto) {
            exibirTextoNaTela("h1", "Você errou!");
            exibirTextoNaTela("p", mensagemMenor);
        } else {
            exibirTextoNaTela("h1", "Você errou!");
            exibirTextoNaTela("p", mensagemMaior);
        }
        tentativas++;
        limparCampo();
    }
}

function limparCampo() {
    document.querySelector("input").value = "";
}

function reniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    tentativas = 1;
    exibirTexto();
    limparCampo();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

const meuBotao = document.querySelector('.container__botao');
const meuInput = document.querySelector("input");

meuInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        meuBotao.click();
        event.preventDefault();
    }
});