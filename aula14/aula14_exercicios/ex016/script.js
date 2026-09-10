function contar() {
  var inico = document.querySelector("input#inicio");
  var fim = document.querySelector("input#fim");
  var passo = document.querySelector("input#passo");
  var msg = document.querySelector("div#msg");
  msg.innerText = "Contando: \n";
  var valor_inico = converterValores(inico);
  var valor_fim = converterValores(fim);
  var valor_passo = definirParada(passo);
  if (valor_inico === undefined || valor_fim == undefined) {
    msg.innerText = "Impossível contar!";
    return recarregar();
  }
  console.log(valor_passo);
  if (valor_fim >= valor_inico) {
    for (let c = valor_inico; c <= valor_fim; c += valor_passo) {
      console.log(valor_inico);
      msg.innerText += `${c} \u{1F449}`;
    }
  }
  if (valor_fim < valor_inico) {
    for (let c = valor_inico; c >= valor_fim; c -= valor_passo) {
      msg.innerText += `${c} \u{1F449}`;
    }
  }

  msg.innerText += "\u{1F3C1}";
}

function converterValores(valor) {
  if (valor.validity.valueMissing) {
    msg.innerText = "[ERRO] Favor inserir um valor nos campos inicio ou fim";
    return undefined;
  }
  return Number(valor.value);
}

function definirParada(valor) {
  console.log(Number(valor.value));
  if (valor.validity.valueMissing || Number(valor.value) === 0) {
    msg.innerText = "Passo invalido! Considerando PASSO 1";
    return 1;
  }
  return Number(valor.value);
}

function recarregar() {
  setTimeout(() => {
    window.location.reload();
  }, 3000);
}
