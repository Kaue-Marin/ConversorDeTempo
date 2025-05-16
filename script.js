const TotalSeconds = parseInt(document.getElementById("tempoSegundos").value);

// função para formatar o tempo em segundos em formato de horas:minutos:segundos

const formatTime = () => {
  const data = new Date(TotalSeconds * 1000)

  // pega a hora usando o padrão mundial, conevrte em string
  // e completa com zeros caso nao tenham dois caracteres, tipo "06"
  const hours = String(data.getUTCHours()).padStart(2, '0');
  const minutes = String(data.getUTCMinutes()).padStart(2, '0');
  const seconds = String(data.getUTCSeconds()).padStart(2, '0');

  document.getElementById("resultado").innerText = 
  `${hours}:${minutes}:${seconds}`;
}