const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "enunciado 1",
        alternativas: [
        {
            texto: "a",
            afirmacao: "afirmação",
        },
        {
            texto: "b",
            afirmacao: "afirmação",
        }        
        ]
    },
    {
        enunciado: "enunciado 2",
        alternativas: [
        {
            texto: "a",
            afirmacao: "afirmação",
        },
        {
            texto: "b",
            afirmacao: "afirmação",
        }        
        ]
    },
    {
        enunciado: "enunciado 3",
        alternativas: [
        {
            texto: "a",
            afirmacao: "afirmação",
        },
        {
            texto: "b",
            afirmacao: "afirmação",
        }        
        ]
    },
    {
        enunciado: "enunciado 4",
        alternativas: [
        {
            texto: "a",
                afirmacao: "afirmação",
        },
        {
            texto: "b",
                afirmacao: "afirmação",
        }        
        ]
    },
    {
        enunciado: "enunciado 5",
        alternativas: [
        {
            texto: "a",
            afirmacao: "afirmação",
        },
        {
            texto: "b",
            afirmacao: "afirmação",
            }        
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();