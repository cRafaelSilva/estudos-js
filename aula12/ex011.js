var idade = 66;

if (idade < 16) {
  console.log("Não Vota");
} else {
  if (idade < 18 || idade > 70) {
    console.log("Voto Opcional");
  } else {
    console.log("Voto obrigatório");
  }
}

// Padrão Ouro

function verificarVoto(idade_atual) {
  if (idade_atual < 16) return "Não vota";
  if (idade_atual < 18 || idade_atual > 70) return "Voto opcional";

  return "Voto Obrigatorio";
}

var minha_idade = 120;
const status_voto = verificarVoto(minha_idade);
console.log(status_voto);
