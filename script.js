function converterTempo() {
  const segundosTotais = parseInt(document.getElementById("tempoSegundos").value);

  if (isNaN(segundosTotais) || segundosTotais < 0) {
    document.getElementById("resultado").innerText = "Insira um valor válido";
    return;
  }

  const horas = Math.floor(segundosTotais / 3600);
  const minutos = Math.floor((segundosTotais % 3600) / 60);
  const segundos = segundosTotais % 60;

  document.getElementById("resultado").innerText = 
    `${horas} hora(s), ${minutos} minuto(s), ${segundos} segundo(s).`;
}
