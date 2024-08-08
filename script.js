const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você saiu da sua aula e jazz e observa um robô que lhe pergunta qual inteligência artificial você mais usa. O que você reponde? ",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa tecnologia e não respondo a pergunta. "
            },
            {
                texto: "Utilizo o Chat GPT!!",
                afirmacao: "Contei qual tecnologia mais utilizo."
            }
        ]
    },
    {
        enunciado: "Depois disso a inteligência te mostra novas formas de utilizar a IA. Como você reage a isso?",
        alternativas: [
            {
                texto: "Isso é incrivel!",
                afirmacao: "Fico animada e presto atenção no que o robô fala."
            },
            {
                texto: "Isso é muito perigoso!",
                afirmacao: "Não sei e goto muito dessa inovação, mas presto atenção mesmo assim."
            }
        ]
    },
    {
        enunciado: "Após sua aula de jazz você vai para a escola e a profesora propõe que você faça um trabalho, como você vai fazer?",
        alternativas: [
            {
                texto: "Vou utilizar o chat GPT, seguindo o que disse o robô.",
                afirmacao: "Faço o trabalho com os conselhos que o robô me deu, e finalizo rapidamente."
            },
            {
                texto: "Pesquiso em livros, pois não confio no robô.",
                afirmacao: "Demoro bastante para finaliar a atividade, perdendo uma boa parte do recreio."
            }
        ]
    },
    {
        enunciado: "Na hora do recreio você e seus amigos começam a conversar sobre o que acham da inteligencia artificial, qual sua opinião?",
        alternativas: [
            {
                texto: "Falo que gosto da IA e defendo o uso dela. ",
                afirmacao: "Argumento falando que a IA pode revolucionar o mundo e nos ajudar positivamente."
            },
            {
                texto: "Falo que não gosto da IA e argumento contra ela.",
                afirmacao: "Argumento falando que a IA pode tirar diveros empregos e que podemos perder o controle sob ela, causando um colapso. "
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
