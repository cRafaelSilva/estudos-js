let num = document.getElementById("txtnum");
var numberTable = document.getElementById("numberTable");
let res = document.getElementById("res");
let valores = [];

function isNumero(value) {
  if (Number(value) >= 1 && Number(value) <= 100) {
    return true;
  } else {
    return false;
  }
}
function inLista(value, list) {
  if (list.indexOf(Number(value)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado`;
    numberTable.appendChild(item);
    res.innerHTML = "";
  } else {
    alert("Valor inválido ou já encontrado na lista");
  }
  num.value = "";
  num.focus();
}

function finalizar() {
  if (valores.length == 0) {
    alert.apply("Adicione valores antes de finalizar");
  } else {
    let totalElementos = valores.length;
    let maiorValor = encontrarMaior(valores);
    let menorValor = encontrarMenor(valores);
    let somaValores = somar(valores);
    let mediaValores = media(valores, somaValores);
    res.innerHTML = "";
    res.innerHTML += `<p> Ao todo, temos ${totalElementos} números cadastrados </p>`;
    res.innerHTML += `<p> O maior valor adicionado foi ${maiorValor}`;
    res.innerHTML += `<p> O menor valor adicionado foi ${menorValor}`;
    res.innerHTML += `<p> A soma é de ${somaValores}`;
    res.innerHTML += `<p> A media dos valores é de ${mediaValores}`;
  }
}

function encontrarMaior(valores) {
  let maiorValor = valores[0];

  for (let pos in valores) {
    if (valores[pos] > maiorValor) {
      maiorValor = valores[pos];
    }
  }
  return maiorValor;
}

function encontrarMenor(valores) {
  let menorValor = valores[0];

  for (let pos in valores) {
    if (menorValor > valores[pos]) {
      menorValor = valores[pos];
    }
  }
  return menorValor;
}

function somar(valores) {
  let soma = 0;
  for (let pos in valores) {
    soma += valores[pos];
  }
  return soma;
}

function media(valores, soma) {
  let media = soma / valores.length;

  return media;
}
