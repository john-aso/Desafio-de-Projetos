let valores = gets().split(" ");
let forca = parseInt(valores[0]);
let inteligencia = parseInt(valores[1]);

let classificacao = "";

if (forca < 20 && inteligencia < 15) {
    classificacao = "Aprendiz";
}
else if (forca >= 20 && inteligencia < 15) {
    classificacao = "Guerreiro";
}
else if (forca < 20 && inteligencia >= 15) {
    classificacao = "Mago";
}
else if (forca >= 20 && inteligencia >= 15) {
    classificacao = "ArquiMago";
}

print(classificacao.trim());