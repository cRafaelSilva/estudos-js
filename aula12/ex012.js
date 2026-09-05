var agora = new Date();
var hora = agora.getHours();

console.log(`Agora são ${hora}`);

function cumprimentar(horario) {
  if (horario < 12) return "Bom dia";
  if (horario <= 18) return "Boa tarde;";

  return "Boa Noite";
}

console.log(cumprimentar(hora));
