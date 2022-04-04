let precoComida;
let precoBebida;
let precoSobremesa;
let x;
let y;
let z;
let valorTotal;
let nomeComida;
let nomeBebida;
let nomeSobremesa;


function selecionarComida (itemComida) {
    let comidaSelecionada = document
    .querySelector(".opcoes-comida")
    .querySelector(".selecionado");
    let checkComida = document
    .querySelector (".opcoes-comida .selecionado div ion-icon");
    
    if (comidaSelecionada !== null) {
        comidaSelecionada.classList.remove("selecionado");
        checkComida.classList.add("escondido");
    }
    itemComida.classList.add("selecionado");
    aparecerCheckComida();
    finalizarPedido();
    contagemComida();
}

function contagemComida () {
    precoComida = document.querySelector (".opcoes-comida .selecionado div .preço").innerHTML;
    precoComida = precoComida.replace("R$ ","").replace(",",".");
    console.log(precoComida);
    x = Number(precoComida);
    console.log(x);
    nomeComida = document.querySelector (".opcoes-comida .selecionado h6").innerHTML;
    console.log(nomeComida);

}

function aparecerCheckComida() {
    let checkComida = document.querySelector(".opcoes-comida .selecionado div ion-icon")
    checkComida.classList.remove("escondido");
}


function selecionarBebida (itemBebida) {
    let bebidaSelecionada = document
    .querySelector(".opcoes-bebida")
    .querySelector(".selecionado");
    let checkBebida = document
    .querySelector (".opcoes-bebida .selecionado div ion-icon")
    if (bebidaSelecionada !== null) {
        bebidaSelecionada.classList.remove("selecionado");
        checkBebida.classList.add("escondido");
    }
    itemBebida.classList.add("selecionado");
    aparecerCheckBebida ();
    finalizarPedido();
    contagemBebida ();
}

function contagemBebida () {
    precoBebida = document.querySelector (".opcoes-bebida .selecionado div .preço").innerHTML;
    precoBebida = precoBebida.replace("R$ ","").replace(",",".");
    console.log(precoBebida);
    y = Number(precoBebida);
    console.log(y);
    nomeBebida = document.querySelector (".opcoes-bebida .selecionado h6").innerHTML;
    console.log(nomeBebida);

}

function aparecerCheckBebida() {
    let checkBebida = document.querySelector(".opcoes-bebida .selecionado div ion-icon")
    checkBebida.classList.remove("escondido");
}

function selecionarSobremesa (itemSobremesa) {
    let sobremesaSelecionada = document
    .querySelector(".opcoes-sobremesa")
    .querySelector(".selecionado");
    let checkSobremesa = document
    .querySelector (".opcoes-sobremesa .selecionado div ion-icon")
    if (sobremesaSelecionada !== null) {
        sobremesaSelecionada.classList.remove("selecionado");
        checkSobremesa.classList.add("escondido");
    }
    itemSobremesa.classList.add("selecionado");
    aparecerCheckSobremesa();
    finalizarPedido();
    contagemSobremesa ();
}

function contagemSobremesa () {
    precoSobremesa = document.querySelector (".opcoes-sobremesa .selecionado div .preço").innerHTML;
    precoSobremesa = precoSobremesa.replace("R$ ","").replace(",",".");
    console.log(precoSobremesa);
    z = Number(precoSobremesa);
    console.log(z);
    nomeSobremesa = document.querySelector (".opcoes-sobremesa .selecionado h6").innerHTML;
    console.log(nomeSobremesa);
    
}

function aparecerCheckSobremesa() {
    let checkSobremesa = document.querySelector(".opcoes-sobremesa .selecionado div ion-icon")
    checkSobremesa.classList.remove("escondido");
}

function finalizarPedido() {
    let verificarComida = document.querySelector(".opcoes-comida .selecionado");
    let verificarBebida = document.querySelector(".opcoes-bebida .selecionado");
    let verificarSobremesa = document.querySelector(".opcoes-sobremesa .selecionado");
    if (verificarComida !== null && verificarBebida !== null && verificarSobremesa !== null) {
        document.querySelector(".pedido").classList.add("escondido");
        document.querySelector(".finalizar").classList.remove("escondido");
    }
}



function enviarPedido () {
    valorTotal = x + y + z;
    let valorDecimal = valorTotal.toFixed(2);
    console.log(valorDecimal);
    let valorString = valorDecimal.replace(".",",");
    const msg = `Olá, gostaria de fazer o pedido:
    - Prato: ${nomeComida} 
    - Bebida: ${nomeBebida}
    - Sobremesa: ${nomeSobremesa}
    Total: R$ ${valorString}`;

    const codigo = encodeURIComponent(msg);
    window.open(`https://wa.me/5516997456986?text=${codigo}`);
    }

