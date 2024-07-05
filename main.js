const sinalApagado = document.getElementById("sinalApagado");
const sinalVermelho = document.getElementById("sinalVermelho");
const sinalAmarelo = document.getElementById("sinalAmarelo");
const sinalVerde = document.getElementById("sinalVerde");
const sinalAutomatico = document.getElementById("sinalAutomatico");
let intervalo = null;

function vermelho(){
    sinalApagado.src = "img/semaforo-vermelho.png";
};

function amarelo(){
    sinalApagado.src = "img/semaforo-amarelo.png";
};

function verde(){
    sinalApagado.src = "img/semaforo-verde.png";
};

function modoAutomatico() {
    if (intervalo === null) {
        let estadoAtual = "vermelho";
        intervalo = setInterval(() => {
            if (estadoAtual === "vermelho") {
                verde();
                estadoAtual = "verde";
            } else if (estadoAtual === "verde") {
                amarelo();
                estadoAtual = "amarelo";
            } else if (estadoAtual === "amarelo") {
                vermelho();
                estadoAtual = "vermelho";
            }
        }, 1000);
    } else {
        clearInterval(intervalo);
        intervalo = null;
    }
}

sinalVermelho.addEventListener("click", vermelho);

sinalAmarelo.addEventListener("click", amarelo);

sinalVerde.addEventListener("click", verde);

sinalAutomatico.addEventListener("click", modoAutomatico);