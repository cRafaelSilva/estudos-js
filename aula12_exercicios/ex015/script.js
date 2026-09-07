function verificar() {
  var corpo = document.getElementById("corpo");
  var data = new Date();
  var ano = data.getFullYear();
  var formAno = document.getElementById("txtano");
  var msg2 = document.getElementById("msg2");
  var moldura = document.getElementById("moldura");
  var res = document.querySelector("img#res");
  var fsex = document.getElementsByName("radsex");
  var idade = ano - Number(formAno.value);
  var genero = "";
  if (formAno.value.length == 0 || formAno.value > ano) {
    return alert(`[ERRO] Verifique os dados preenchidos e tente novamente`);
  }
  moldura.style.visibility = "visible";
  moldura.style.width = "250px";
  moldura.style.height = "250px";
  if (fsex[0].checked) {
    corpo.style.backgroundColor = "#3934e0";
    genero = "Masculino";
    if (idade <= 4) {
      res.setAttribute("src", "imgs/bebemenino.jpg");
    } else if (idade <= 12) {
      res.setAttribute("src", "imgs/criancamenino.jpg");
    } else if (idade <= 18) {
      res.setAttribute("src", "imgs/adolescentemenino.jpg");
    } else if (idade <= 29) {
      res.setAttribute("src", "imgs/jovemhomen.jpg");
    } else if (idade < 60) {
      res.setAttribute("src", "imgs/adultohomem.jpg");
    } else {
      res.setAttribute("src", "imgs/homem-idoso.jpg");
    }
    return (msg2.innerHTML = `<p> Sua idade é de ${idade} anos<br> e seu sexo é ${genero}`);
  }
  genero = " Feminino";
  corpo.style.backgroundColor = "#f7daa8";
  if (idade <= 4) {
    res.setAttribute("src", "imgs/bebemenina.jpg");
  } else if (idade <= 12) {
    res.setAttribute("src", "imgs/criancamenina.jpg");
  } else if (idade <= 18) {
    res.setAttribute("src", "imgs/adolescentemenina.jpg");
  } else if (idade <= 29) {
    res.setAttribute("src", "imgs/jovemmulher.jpg");
  } else if (idade < 60) {
    res.setAttribute("src", "imgs/adultomulher.jpg");
  } else {
    res.setAttribute("src", "imgs/mulher-idosa.jpg");
  }
  return (msg2.innerHTML = `<p> Sua idade é de ${idade} anos<br> e seu sexo é ${genero}`);
}
