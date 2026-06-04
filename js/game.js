const menu = document.getElementById("menu");
const receita = document.getElementById("receita");

const btnJogar = document.getElementById("btn-jogar");
const btnCompras = document.getElementById("btn-compras");

btnJogar.addEventListener("click", () => {
    window.location.href = "mercado.html";
});

btnCompras.addEventListener("click", () => {

    alert("Próxima etapa: Mercado");

});