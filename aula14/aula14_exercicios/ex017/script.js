function gerarTabuada() {
  let num = document.getElementById("num");
  let selectTab = document.getElementById("seltab");
  if (num.value.length == 0) {
    window.alert("Por favor, digite um número!");
  } else {
    num = Number(num.value);
    selectTab.innerHTML = "";
    for (let c = 0; c <= 10; c++) {
      let item = document.createElement("option");
      item.text = `${num} x ${c} = ${num * c}`;
      item.value = `${c}`;
      selectTab.appendChild(item);
    }
  }
}
