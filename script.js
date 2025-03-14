const aumentaFonteBotao = document.getElementById('aumentar-fonte')
let tamnahoFonteAtual = 1;

aumentaFonteBotao.addEventListener('click', function() {
tamanahoFonteAtual +=0.1;
document.body.style.fontSize = ${tamnahoFonteAtual}rem
})