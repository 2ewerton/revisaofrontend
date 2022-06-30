var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para iniciar o git?");
  if ((nome == "git init")) {
    alert("O " + nome + ", Parabéns você acertou!");
  }
  else{
    alert("O " + nome + ", que pena voce errou");
  }
  window.location="aula4.html";
};
