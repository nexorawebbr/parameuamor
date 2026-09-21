```javascript
function abrirCarta() {

    const inicio = document.getElementById("inicio");
    const carta = document.getElementById("carta");

    inicio.style.display = "none";

    carta.classList.remove("escondida");

    carta.scrollIntoView({
        behavior: "smooth"
    });

    criarCoracoes();
}


function criarCoracoes() {

    const container = document.getElementById("coracoes");

    for (let i = 0; i < 25; i++) {

        const coracao = document.createElement("div");

        coracao.classList.add("coracao-flutuante");

        coracao.innerHTML = "♥";

        coracao.style.left = Math.random() * 100 + "vw";

        coracao.style.fontSize =
            (15 + Math.random() * 30) + "px";

        coracao.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        coracao.style.animationDelay =
            Math.random() * 1.5 + "s";

        container.appendChild(coracao);

        setTimeout(() => {
            coracao.remove();
        }, 7000);
    }
}
```
