

// https://api.mymemory.translated.net/get?q=Hello World!&langpair=en|it
// let nome = "Mundo";
let traducao = document.querySelector('.title')
let idioma = document.querySelector('.idioma')
async function traduzirTexto() {
    let pegar = document.querySelector(".input-texto").value;
    // let endereco = `https://api.mymemory.translated.net/get?q=${pegar}&langpair=en|it`;
    let endereco = "https://api.mymemory.translated.net/get?q=" + pegar + "&langpair=pt-br|" + idioma.value;
    let resposta = await fetch(endereco);

    let dados = await resposta.json();

    traducao.textContent = dados.responseData.translatedText;
    console.log(dados);
}

function OuvirVoz() {
    // let traducao = document.querySelector('.title').textContent;
    // let falar = new SpeechSynthesisUtterance(traducao);
    // falar.lang = idioma.value;
    // speechSynthesis.speak(falar);
    let speak = window.webkitSpeechRecognition;

    //    deixando ela pronto para o uso
    let reconhecimento = new speak();
    reconhecimento.lang = "pt-br";

    // Me avise quando ele terminar de ouvir
    reconhecimento.onresult = function (event) {
        let fala = event.results[0][0].transcript;
        document.querySelector('.input-texto').value = fala;
        traduzirTexto();
    }

    reconhecimento.start();
}