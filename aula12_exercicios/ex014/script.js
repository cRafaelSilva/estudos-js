function carregar() {
  var msg = document.getElementById("msg");
  var msg2 = document.getElementById("msg2");
  var img = document.getElementById("foto");
  var data = new Date();
  var hora = data.getHours();
  var fundo = document.getElementById("fundo");
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 6 && hora < 12) {
    img.src = "imgs/bomdia.jpg";
    fundo.style.background = "#aabafc";
    msg2.innerText = "Tenha um bom dia !";
  } else if (hora >= 12 && hora < 15) {
    img.src = "imgs/almoco2.jpg";
    fundo.style.background = "#dba36a";
    msg2.innerText = "Tenha um bom almoço !";
  } else if (hora >= 15 && hora < 20) {
    img.src = "imgs/anoitecer.jpg";
    fundo.style.background = "#ad8267";
    msg2.innerText = "Tenha uma boa tarde !";
  } else {
    img.src = "./imgs/noite.jpg";
    fundo.style.background = "#201b1b";
    msg2.innerText = "Tenha uma boa noite";
  }
}
