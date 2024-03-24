const height = document.getElementById("height");
const weight = document.getElementById("weight");
const meuh1 = document.createElement("h1");
const message = document.getElementById("message");

meuh1.style.fontSize = "24px";
meuh1.style.color = "slateblue";
meuh1.style.textAlign = "center";
meuh1.style.marginTop = "20px";

const btn = document.getElementById("btn");
let mensagemExibida = false;
btn.addEventListener("click", function (event) {
  if (!height.value || !weight.value) {
    alert("Por favor, preencha ambos os campos.");
  } else {
    if (!mensagemExibida) {
      let imc = weight.value / (height.value * height.value);

      if (imc < 18.5) {
        meuh1.innerText = "Abaixo do peso";
        message.appendChild(meuh1);
      } else if (imc >= 18.5 && imc <= 24.9) {
        meuh1.innerText = "Peso Normal";
        message.appendChild(meuh1);
      } else if (imc >= 25 && imc <= 29.9) {
        meuh1.innerText = "Sobrepeso";
        message.appendChild(meuh1);
      } else if (imc >= 30 && imc <= 34.9) {
        meuh1.innerText = "Obesidade";
        message.appendChild(meuh1);
      } else if (imc >= 35 && imc <= 39.9) {
        meuh1.innerText = "Obesidade nível 2";
        message.appendChild(meuh1);
      } else {
        meuh1.innerText = "Obesidade mórbida";
        message.appendChild(meuh1);
      }
    }
  }
});
