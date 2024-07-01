const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Numa situação hipotética, você está vivendo em uma pequena fazenda, qual será sua primeira ação:",
        alternativas: [
        {
            texto: "Plantar vegetais para vender ou comer posteriormente",
            afirmacao: "afirmação",
        },
        {
            texto: "Separar o espaço para o cultivo de animais",
            afirmacao: "afirmação",
        }        
        ]
    },
    {
        enunciado: "Com seu território em mãos, você optaria por uso de agrotóxicos e outros produtos químicos?",
        alternativas: [
        {
            texto: "sim",
            afirmacao: "afirmação",
        },
        {
            texto: "não",
            afirmacao: "afirmação",
        }        
        ]
    },
    {
        enunciado: "Você optaria por introduzir máquinas na sua fazenda ou fará tudo manualmente?",
        alternativas: [
        {
            texto: "Irei introduzir o uso de algumas máquinas para processar meus produtos eficientemente",
            afirmacao: "afirmação",
        },
        {
            texto: "Irei optar pelo uso de minhas mãos somente, para evitar gastos desnecessários",
            afirmacao: "afirmação",
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
    caixaPerguntas.textContent = "Você é um bom agricultor, obteve alternativas limpas para sua subsistência, com o mínimo de prejuizo ao meio ambiente. Parabens!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "Você optou por lucros moderados, sem se preocupar muito com o meio ambiente, você é um pequeno empreendedor!";
}

mostraPergunta();