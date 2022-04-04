let itemSelecionado;
let lucas;
function selecionar (itemMenu) {
    itemSelecionado = document.querySelector(".selecionado");
    if (itemSelecionado !== null) {
        itemSelecionado.classList.remove("selecionado");
    }
    itemSelecionado.classList.add("selecionado");
    lucas=itemMenu.HTML;
}
