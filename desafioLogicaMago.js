const mensagem = ("Você é nivel:")
let forca = 20
let inteligencia = 9

if (forca < 20 && inteligencia < 15){
    console.log(mensagem + " Aprendiz")
}

else if (forca >= 20 && inteligencia < 15){
    console.log(mensagem + " Guerreiro")
}

else if (forca < 20 && inteligencia >= 15){
    console.log(mensagem + " Mago")
}

else if (forca >= 20 && inteligencia >= 15){
    console.log(mensagem + " ArquiMago")
}

