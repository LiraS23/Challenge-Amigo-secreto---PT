//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
  let nomeAmigo = document.getElementById('amigo').value;

  if (nomeAmigo.trim() === '') {
      alert('Por favor, insira um nome.');
      return;
  }

  listaAmigos.push(nomeAmigo);
  atualizarListaAmigos();
  document.getElementById('amigo').value = '';
}

// Função para atualizar a lista de amigos na página
function atualizarListaAmigos() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  listaAmigos.forEach(function(amigo) {
      let li = document.createElement('li');
      li.textContent = amigo;
      lista.appendChild(li);
  });
}

// Função para sortear um amigo
function sortearAmigo() {
  if (listaAmigos.length === 0) {
      alert('Nenhum amigo disponível para sortear.');
      return;
  }

  let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
  let amigoSorteado = listaAmigos[indiceAleatorio];
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}

// Função para resetar a lista de amigos e o resultado do sorteio
function resetarLista() {
  listaAmigos = [];
  document.getElementById('listaAmigos').innerHTML = '';
  document.getElementById('resultado').innerHTML = '';
}
