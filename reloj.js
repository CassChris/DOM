const d = document;

export function digitalClock(relojDigital, btnIniciarReloj, btnDetenerReloj) {
  let relojAhora;

  d.addEventListener("click", (e) => {
    // inicar reloj,
    if (e.target.matches(btnIniciarReloj)) {
      relojAhora = setInterval(() => {
        let relojHora = new Date().toLocaleTimeString();
        d.querySelector(relojDigital).innerHTML = `<h3>${relojHora}</h3>`;
      }, 1000);
      e.target.disabled = true;
    }

    // detener reloj
    if (e.target.matches(btnDetenerReloj)) {
      clearInterval(relojAhora);
      d.querySelector(relojDigital).innerHTML = null;
      d.querySelector(btnIniciarReloj).disabled = false;
    }
  });
}
export function alarm(sonidoAlarma, btnIniciarAlarma, btnDetenerAlarma) {
  let alarmaTiempo;
  const $alarm = document.createElement("audio");
  $alarm.src = sonidoAlarma;
  d.addEventListener("click", (e) => {
    // iniciar alarma
    if (e.target.matches(btnIniciarAlarma)) {
      alarmaTiempo = setTimeout(() => {
        $alarm.play();
      }, 100);
      //   d.querySelector(btnIniciarAlarma).setAttribute("disabled", "");
      d.querySelector(btnIniciarAlarma).disabled = true;
    }
    // detener alarma
    if (e.target.matches(btnDetenerAlarma)) {
      $alarm.pause();
      $alarm.currentTime = 0;
      d.querySelector(btnIniciarAlarma).disabled = false;
    }
  });
}
