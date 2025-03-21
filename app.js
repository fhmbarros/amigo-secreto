//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Lista para adicionar os nomes dos amigos
let amigos = [];

//Adiciona a funcionalidade de falar a mensagem inicial
let mensagemInicial = document.querySelector('h2');
let textoInicial = "Digite o nome dos seus amigos"
mensagemInicial.innerHTML = textoInicial
responsiveVoice.speak(textoInicial, 'Brazilian Portuguese Female', {rate:1.2});


//Adiciona funcionalidade de chamar a função adicionarAmigo() ao apertar a tecla enter.
document.getElementById("amigo").addEventListener("keydown", apertarTeclaEnter);

function apertarTeclaEnter(evento) {
    if (evento.key === "Enter") {
        adicionarAmigo();
    }
}

//Função para adicionar nomes à lista amigos.
function adicionarAmigo() {
    let nomeAmigo = document.querySelector("#amigo").value.trim();

    if  (nomeAmigo === ""){
        alert("Por favor, insira um nome válido.");
        return;
    } else if (amigos.includes(nomeAmigo)) {
        alert("Este nome já foi incluído.");
        return;
    } else {
        amigos.push(nomeAmigo);
    }

    limparCampo();

    atualizarListaAmigos();    
}


// Função para exibir listagem com os nomes abaixo do elemento de input.
function atualizarListaAmigos() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(nome => {
        let item = document.createElement('li');
        item.textContent = nome;
        lista.appendChild(item);
    });
}

//Função para sortear um dos nomes da lista.
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("É preciso adicionar nomes antes de sortear");
        return;
    } else if (amigos.length < 2) {
        alert("É preciso no mínimo 2 nomes para realizar o sorteio.")
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let nomeSorteado = amigos[indiceAleatorio];

    //console.log(nomeSorteado);

    let resultado = document.getElementById("resultado");
    let texto = `O nome sorteado foi ${nomeSorteado}.`;
    resultado.innerHTML = texto;

    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
      
    limparLista();
}

function limparCampo () {
    document.getElementById("amigo").value = "";
}

function limparLista() {
    amigos = [];
    atualizarListaAmigos();
    
}














