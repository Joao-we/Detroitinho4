// Menu Hambuguer
function openMenu() {
    document.getElementById("menuLateral").style.width = "250px";
}

function closeMenu() {
    document.getElementById("menuLateral").style.width = "0";
}


function ativarTexto(id) {
    const botao = document.getElementById(id);
    const texto = botao.querySelector("span");
    const imagem = botao.querySelector("img");

    // mexe em todos os botoes

    //mouse ao entrar 
    botao.addEventListener("mouseenter", () => {
        texto.style.display = "block";
        texto.style.justifyItems = "center";
        botao.style.width = "550px";
        botao.style.fontSize = "22pt";
        texto.style.padding = "3px"
        texto.style.color = "white"
    });

    //ao mouse sair
    botao.addEventListener("mouseleave", () => {
        texto.style.display = "none";
        botao.style.width = "120px";
        botao.style.transition = "all 0.7s ease";
    });
}

// ativa os textos
ativarTexto("inst");
ativarTexto("whats");
ativarTexto("agen");
ativarTexto("local");

// Mexe especificadamente no botao do Instagram
const inst = document.getElementById("inst");

//mouse ao entrar 
inst.addEventListener("mouseenter", () => {
    inst.style.background = "linear-gradient(rgb(255, 0, 221), rgb(255, 238, 0))";
});

//ao mouse sair
inst.addEventListener("mouseleave", () => {
    inst.style.background = "white";
});


// Mexe especificadamente no botao do WhatsApp
const whats = document.getElementById("whats");

//mouse ao entrar 
whats.addEventListener("mouseenter", () => {
    whats.style.background = "rgb(24, 207, 64)";
});

//ao mouse sair
whats.addEventListener("mouseleave", () => {
    whats.style.background = "white";
});

const agen = document.getElementById("agen");

agen.addEventListener("mouseenter", () => {
    agen.style.background = " rgb(0, 174, 255)";
});

agen.addEventListener("mouseleave", () => {
    agen.style.background = "white"
});

const local =document.getElementById("local");

local.addEventListener("mouseenter", () => {
    local.style.background = "rgb(214, 32, 32)"
});

local.addEventListener("mouseleave", () => {
    local.style.background = "white"
});


function ativarTexto(id) {
    const botao = document.getElementById(id);
    if (!botao) return; // se não existir, sai sem quebrar

    const texto = botao.querySelector("span");
    // opcional: se não tiver span, não tenta mostrar o texto
    // (a lógica de abertura ainda ajusta a largura do botão)
    
    botao.addEventListener("mouseenter", () => {
        if (texto) {
            texto.style.display = "block";
            texto.style.justifyItems = "center";
            texto.style.padding = "3px";
            texto.style.color = "white";
            botao.style.transform = "all 0.7 ease";
        }

        const w = window.innerWidth;
        if (w <= 468) {
            botao.style.width = "200px";
            botao.style.fontSize = "12pt";
            

         } else if (w >= 469) {
            botao.style.width = "550px";
            botao.style.fontSize = "22pt";
        }

        // remove transições pesadas no mobile para performance
        if (w <= 468) botao.style.transition = "none";
        else botao.style.transition = "all 0.7s ease";
    });

    botao.addEventListener("mouseleave", () => {
        if (texto) texto.style.display = "none";
        botao.style.width = "120px";
        botao.style.transition = "all 0.7s ease";
    });
}
