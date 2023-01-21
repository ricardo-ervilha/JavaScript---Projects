var body = document.querySelector('body')
var img = document.querySelector('.image')
var strong = document.querySelector('.time')
const date = new Date().getHours().toLocaleString()


if(date > 6 && date <= 12){
    body.style.background = '#F2E1AC'
    img.src = 'manha.jpg'

}else if(date > 12 && date <= 18){ 
    body.style.background = '#F2A477'
    img.src = 'tarde.jpg'

}else if(date > 18 && date < 24){
    body.style.background = '#204F8C'
    img.src = 'noite.jpg'
}else{
    body.style.background = '#092140'
    img.src = 'madrugada.jpg'
}

strong.innerHTML = date