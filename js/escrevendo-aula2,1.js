var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para criar um git remoto?");
  if ((nome == "git remote add origin")) {
    alert(" Parabéns você acertou!");
  }
  else{
    alert(" que pena voce errou");
  }
  window.location="aula3.html";
};
