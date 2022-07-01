var btn1 = document.getElementById("btn1");

btn1.onclick = function () {
  var nome = prompt("Qual é o comando para criar um git remoto?");
  if ((nome == "git remote add origin")) {
    alert(" Parabéns você acertou!");
  }
  else{
    alert(" que pena voce errou");
  }
};

var btn2 = document.getElementById("btn2");

btn2.onclick = function(){
  var nome = prompt("Qual é o comando ?");
  if ((nome == "git remote add origin")) {
    alert(" Parabéns você acertou!");
  }
  else{
    alert(" que pena voce errou");
  }
  window.location="";
};
