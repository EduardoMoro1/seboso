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
            afirmacao: "Você pensa no futuro, quer promover um sustento básico antes de  tudo",
        },
        {
            texto: "Separar o espaço para o cultivo de animais",
            afirmacao: "Você pensa como um empreendedor, optou pelo caminho mais lucrativo",
        }        
        ]
    },
    {
        enunciado: "Com seu território em mãos, você optaria por uso de agrotóxicos e outros produtos químicos?",
        alternativas: [
        {
            texto: "sim",
            afirmacao: "Você não se importa com o meio-ambiente ou o ambiente onde mora, apenas quer lucro sem esforço",
        },
        {
            texto: "não",
            afirmacao: "Você é um agricultor padrão, opta pela segurança do meio-ambiente",
        }        
        ]
    },
    {
        enunciado: "Você optaria por introduzir máquinas na sua fazenda ou fará tudo manualmente?",
        alternativas: [
        {
            texto: "Irei introduzir o uso de algumas máquinas para processar meus produtos eficientemente",
            afirmacao: "Você é agora um empreendedor, seu lucro irá provavelmente aumentar muito, contudo, o meio-ambiente sofrerá com suas ações",
        },
        {
            texto: "Irei optar pelo uso de minhas mãos somente, para evitar gastos desnecessários",
            afirmacao: "Você quer apenas viver por viver, não quer lucro, apenas uma vida simples",
        }        
        ]
    },
    {
        enunciado: "Você pretende ter uma vida simples ou pretende maximizar o lucro?",
        alternativas: [
        {
            texto: "Vou ter uma vida simples, sem me preocupar com despesas ou maquinário",
            afirmacao: "Você é um grande protetor do meio-ambiente, está preservando tudo do jeito correto e mantendo o ciclo",
        },
        {
            texto: "Vou priorizar o lucro acima de tudo, independente das circunstâncias",
            afirmacao: "Você é um grande inimigo do meio-ambiente, você não liga para a vegetação, mares, você apenas age sem pensar nos impactos de suas ações",
        },
            
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
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();