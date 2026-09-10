function contar() {
  const inico = document.querySelector("input#inicio");
  const fim = document.querySelector("input#fim");
  const passo = document.querySelector("input#passo");
  const msg = document.querySelector("div#msg");

  const valorInicio = converterValores(inico, msg);
  const valorFim = converterValores(fim, msg);

  if (valorInicio === undefined || valorFim == undefined) return recarregar();

  msg.innerText = "Contando: \n";

  const valorPasso = definirParada(passo, msg);

  if (valorFim >= valorInicio) {
    for (let c = valorInicio; c <= valorFim; c += valorPasso) {
      msg.innerText += `${c} \u{1F449}`;
    }
  } else if (valorFim < valorInicio) {
    for (let c = valorInicio; c >= valorFim; c -= valorPasso) {
      msg.innerText += `${c} \u{1F449}`;
    }
  }

  msg.innerText += "\u{1F3C1}";
}

function converterValores(valor, msg) {
  if (valor.validity.valueMissing) {
    msg.innerText = "[ERRO] Favor inserir um valor nos campos inicio ou fim";
    return undefined;
  }
  return Number(valor.value);
}

function definirParada(valor, msg) {
  if (valor.validity.valueMissing || Number(valor.value) === 0) {
    msg.innerText += "Passo invalido! Considerando PASSO 1 \n";
    return 1;
  }
  return Number(valor.value);
}

function recarregar() {
  setTimeout(() => {
    window.location.reload();
  }, 3000);
}
