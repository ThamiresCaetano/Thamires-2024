const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Amizade verdadeira são aquelas que duram para sempre?",
        alternativas: [
            {
                texto: "Verdadeiro!",
                afirmacao: "Pode parecer que amizades duradouras indicam verdadeiras, mais a duração não é o unico fator",
            
                texto: "Falso",
                afirmacao: "Nem todas as amizades duram para sempre devido a mudança de vida."
            }
        ]
    }
    ,
    {
        enunciado: "Qual das seguintes não é uma característica importante de uma boa amizade?",
        alternativas: [
            {
                texto: "Confiança.",
                afirmacao: "Esse ncial para uma boa amizade."
            },
            {
                texto: "Competitividade.",
                afirmacao: "Prejudicial, pois pode causar rivalidade."
            }
        ]
    },
    {
        enunciado: "Amigos para sempre devem concordar em tudo?",
        alternativas: [
            {
                texto: "Verdadeiro.",
                afirmacao: "Idealmente, amigos deviam concordar, mas isso é uma visão limitada."
            },
            {
                texto: "Falso.",
                afirmacao: "Discodância são normais e podem fortalecer uma amizade"
            }
        ]
    },
    {
        enunciado: "Qual das seguintes é uma maneira de fortalecer a amizade",
        alternativas: [
            {
                texto: " Passar mais tempos juntos",
                afirmacao: "Ajudara criar laços mais profundos."
            },
            {
                texto: "Compartilhar segredos",
                afirmacao: "Também pode fortalecer a amizade mais é apenas uma parte do processo!"
            }
        ]
    },
    {
        enunciado: "Amigos verdadeiros sempre se apoiam nos momentos difíceis? ",
        alternativas: [
            {
                texto: "Verdadeiro.",
                afirmacao: "O apoia em momentos difíceis é um sinal da amizade verdadeira."
            },
            {
                texto: "Falso",
                afirmacao: "Embora ideal, pode haver situação em que o apoio não é possível. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "PERGUNTAS SOBRE AMIZADE...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();