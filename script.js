const textArea= document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value =" ";
    mensaje.style.backgroundImage = "none"
}



function encriptar(stringEncriptada){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0;i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}





function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value =" ";
    
}


function desencriptar(stringDesencriptada){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0;i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] ,matrizCodigo[i][0])

        }

    }
    return stringDesencriptada
}


function copiarTexto() {
    const texto = document.querySelector(".mensaje").value;
    navigator.clipboard.writeText(texto)
        .then(() => {
            console.log("Texto copiado al portapapeles");
            
        })
        .catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
}






/*<textarea class="mensaje" cols="20" rows="10"></textarea>
            <div class="texto-inferior">ingrese texto que desea encriptar o desencriptar</div>*/

            /*.mensaje{
                background: white;
                /*background-image: url(muñeco.png);
                background-repeat: no-repeat;
                border: none;
                border-radius: 24px;
                color: #0A3871;
                margin-left: 98px;
                margin-top: 20px;
                padding-left: 20px;
                position: fixed;
            
            }*/