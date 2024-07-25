function showCopy(){
        document.getElementById("result").style.display = 'flex';
}
function hideCopy(){
    document.getElementById("result").style.display = 'none';
}

function hideToogle(){
    document.getElementById("toogleabe").style.display = 'none';
}

function showToogle(){
    document.getElementById("toogleabe").style.display = 'block';
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
    let botoes = document.getElementById("buttons");
    let selectBotoes = botoes.querySelectorAll(".button__style")
    if(document.getElementById("input_area_text").value==="") {
        for(let i=0; i < selectBotoes.length; i++)
        selectBotoes[i].disabled = true}
        
}

function unlockButton(){
    let areaInput = document.getElementById("input_area_text");
    areaInput.addEventListener("input", unlock);

    function unlock(){let botoes = document.getElementById("buttons");
        let selectBotoes = botoes.querySelectorAll(".button__style")
            for(let i=0; i < selectBotoes.length; i++)
            selectBotoes[i].disabled = false}
}

function cleanTextArea(){
    document.getElementById('input_area_text').value = '';
}

lockButton();
unlockButton();

function encriptar() {
    hideToogle();
    showCopy();
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

    document.getElementById("result_cripto").innerHTML = z;
    
    cleanTextArea();
    
}


function desencriptar() {
        hideToogle();
        showCopy();
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
    document.getElementById("result_cripto").innerHTML = z;
    cleanTextArea();
}


function copyText(){
    let inlineTxt = document.getElementById("result_cripto");
    navigator.clipboard.writeText(inlineTxt.innerHTML);

    hideCopy();
    showToogle();

}