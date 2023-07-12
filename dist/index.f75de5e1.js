AOS.init();
const dataEvento = new Date("Jun 12 2024 18:00:00");
const timeStampEvento = dataEvento.getTime();
const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteEvento = timeStampEvento - timeStampAtual;
    const diaMs = 86400000;
    const horaMs = 3600000;
    const minutoMs = 60000;
    const diasAteEvento = Math.floor(distanciaAteEvento / diaMs);
    const horasAteEvento = Math.floor(distanciaAteEvento % diaMs / horaMs);
    const minutosAteEvento = Math.floor(distanciaAteEvento % horaMs / minutoMs);
    const segundosAteEvento = Math.floor(distanciaAteEvento % minutoMs / 1000);
    console.log(diasAteEvento);
    console.log(horasAteEvento);
    console.log(minutosAteEvento);
    console.log(segundosAteEvento);
    document.getElementById("contador").innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;
    if (distanciaAteEvento < 0) {
        clearInterval(contaHoras);
        document.getElementById("contador").innerHTML = "Evento expirado";
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
