function atualizarRelogio() {
    const relogioElement = document.getElementById('relogio');
    const data = new Date();
    const horas = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');
    const segundos = String(data.getSeconds()).padStart(2, '0');
    const horario = `${horas}:${minutos}:${segundos}`;
    relogioElement.textContent = horario;
}

setInterval(atualizarRelogio, 1000);