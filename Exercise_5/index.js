var select = document.getElementById('sel')
var p = document.querySelectorAll('.stats p')
let vet = []

function addElement(){
    p.forEach(o => o.innerHTML = "")

    let fnum = document.getElementById('num')
    let num = Number(fnum.value)
    if(num < 1 || num > 100){
        window.alert("Invalid value. Enter a value between 1 and 100.")
    }else if(vet.indexOf(num) != -1){
        window.alert("The element has already been added to the list.")
    }else{
        var opt = document.createElement('option')
        opt.innerHTML = "Value " + num.toString() + " added."
        select.appendChild(opt)
        vet.push(num)
    }
}

function finalize(){
    if(vet.length != 0){
        p[0].innerHTML = "In all, the list have " + vet.length + " signed numbers."
        vet.sort()
        p[1].innerHTML = "The max value is " + vet[vet.length - 1]
        p[2].innerHTML = "The min value is " + vet[0]
        var soma = 0
        for(var i = 0; i < vet.length; i++){
            soma += vet[i]
        }
        p[3].innerHTML = "The sum of all values is " + soma
        p[4].innerHTML = "The average of this values is: " + (soma)/(vet.length)
    }else{
        window.alert("Unable to execute as the list has no elements.")
    }
}