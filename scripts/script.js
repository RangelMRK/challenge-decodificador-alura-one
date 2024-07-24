let divOriginal = `
<div id="result">
<img src="assets/img/ilustration.svg" alt="Menina com uma Lupa olhando um cristal">
<div id="paragrafos">
<p class="p1">Nenhuma mensagem encontrada</p>
<p class="p2">Digite um texto que você deseja criptografar ou descriptografar</p>
</div>
</div>
<div id="copy" class="copy__button" onclick="copyText()"><button id="copy__button__style">Copiar</button></div>`;

let cssOriginal = `  display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;

    padding: 2rem;
    
    width: 25rem;
    border-radius: 2rem;
    box-shadow: 0px 24px 32px -8px #00000014;

    height: 59rem;


    background-color: white;`;

    let divResize = `<div id="result">
            <div id="paragrafos">
            <p class="p1">Nenhuma mensagem encontrada</p>
            <p class="p2">Digite um texto que você deseja criptografar ou descriptografar</p>
            </div>
            </div>
            <div id="copy" class="copy__button" onclick="copyText()"><button id="copy__button__style">Copiar</button></div>`;
    let cssResize = `margin-left: 2.5rem;

    
        padding: 2rem;
        
        width: 43rem;
        border-radius: 2rem;
        box-shadow: 0px 24px 32px -8px #00000014;
    
        height: 21.4rem;
    
    
        background-color: white;`;


let resuOriginal = `
        display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 2rem;
    
    width: 25rem;
    border-radius: 2rem;
    box-shadow: 0px 24px 32px -8px #00000014;

    height: 59rem;


    background-color: white;
    `;

let resuResize = `
    display: flex;
    justify-content: space-between;


    box-sizing: border-box;
    padding: 2rem;

    margin-left: 2.5rem;
    
    width: 43rem;
    border-radius: 2rem;
    box-shadow: 0px 24px 32px -8px #00000014;
    
    height: 21.4rem;
    
    
    background-color: white;
    `;

let copyOriginal = `
    height: 4.20rem;
    border-radius: 1.5rem;
    width: 20.5rem;
    background-color: white;
    color:#0A3871;
    border: 1px solid #0A3871;
    `;

let copyResize = `
    height: 4.15rem;
    border-radius: 1.5rem;
    width: 39rem;
    background-color: white;
    color:#0A3871;
    border: 1px solid #0A3871;`;

function showCopy(){
        document.getElementById("copy").style.display='block';
}
function transformDiv(){
    var screenSize = window.matchMedia("(max-width: 1200px");

    if(screenSize.matches)
        {document.getElementById("text_show").style.cssText = resuResize}
    else{
    document.getElementById("text_show").style.cssText = resuOriginal};
}

function transformCopy(){
    var screenSize = window.matchMedia("(max-width: 1200px");

    if(screenSize.matches)
        {document.getElementById("copy__button__style").style.cssText = copyResize}
    else{
        document.getElementById("copy__button__style").style.cssText = copyOriginal};
}

function hidePlaceholder(){
    document.getElementById("input_area_text").placeholder = "";
}

function showPlaceholder() {
    let textarea = document.getElementById("input_area_text");
    if (textarea.value.trim() === "") {
        textarea.placeholder = "Digite seu texto";
    }
}

function lockButton() {
    let botoes = document.getElementById("testes");
    let botoess = botoes.querySelectorAll(".button__style")
    if(document.getElementById("input_area_text").value==="") {
        for(let i=0; i < botoess.length; i++)
        botoess[i].disabled = true}
        
}

function unlockButton(){
    let areaInput = document.getElementById("input_area_text");
    areaInput.addEventListener("input", unlock);

    function unlock(){let botoes = document.getElementById("testes");
        let botoess = botoes.querySelectorAll(".button__style")
            for(let i=0; i < botoess.length; i++)
            botoess[i].disabled = false}
}

function cleanTextArea(){
    document.getElementById('input_area_text').value = '';
}

lockButton();
unlockButton();

function encriptar() {
    showCopy();
    transformDiv();
    transformCopy();
    var x = document.getElementById("input_area_text").value;
    var y = {
        e:"enter",
        i:"imes",
        a:"ai",
        o:"ober",
        u:"ufat"
        };
    

    z = x.replace(/e|i|a|o|u/gi, function(encript){
    return y[encript]});

    document.getElementById("result").innerHTML = z;
    
    cleanTextArea();
    
}


function desencriptar() {
        showCopy();
        transformDiv();
        transformCopy();
    var x = document.getElementById("input_area_text").value;
    var y = {
        enter:'e',
        imes:'i',
        ai:'a',
        ober:'o',
        ufat: 'u'
    };

    z = x.replace(/enter|imes|ai|ober|ufat/gi, function(desencript){
    return y[desencript]});
    document.getElementById("result").innerHTML = z;
    cleanTextArea();
}

function revertDiv(){
    
    var screenSize = window.matchMedia("(max-width: 1200px")

    if(screenSize.matches)
    {document.getElementById('text_show').innerHTML = divResize;
        document.getElementById("text_show").style.cssText = cssResize;
    }else{
    document.getElementById('text_show').innerHTML = divOriginal;
    document.getElementById("text_show").style.cssText = cssOriginal;
    }
}

function copyText(){
    let inlineTxt = document.getElementById("result");
    navigator.clipboard.writeText(inlineTxt.innerHTML);

    revertDiv();
}