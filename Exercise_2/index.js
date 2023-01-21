var data = document.querySelector('.data')
var p = document.querySelector('.paragrafo')
var image = document.querySelector('.img-placeholder')
var genero = document.getElementsByName('genero')

function verificar(){
    
    campos = data.value.split('-')
    ano = campos[0]
    idade = 2023 - ano

    if(genero[0].checked){
        flag = 'm'
        p.innerHTML = "We've detected a man with " + idade + " years old."
    }
    else{
        flag = 'f'
        p.innerHTML = "We've detected a woman with " + idade + " years old."
    }

    if(idade >= 0 && idade < 18){
        if(flag == 'm')
            image.src = "menino.jpg"
        else
            image.src = "menina.jpg"
    }else if(idade >= 18 && idade < 40){
        if(flag == 'm')
            image.src = "adulto.jpg"
        else
            image.src = "adulta.jpg"
    }else{
        if(flag == 'm')
            image.src = "velho.jpg"
        else
            image.src = "velha.jpg"
    }

}