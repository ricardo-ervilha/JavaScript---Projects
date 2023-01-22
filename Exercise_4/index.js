var fnum = document.getElementById('num')
var select = document.getElementById('sel')

function generateTable(){
    var num = Number(fnum.value)
    var options = document.querySelectorAll("#sel option")
    options.forEach(o => o.remove())
    
    for(var i = 1; i <= 10; i++){
        var opt = document.createElement('option')
        opt.value = i
        var mult = num * i
        opt.innerHTML = num.toString() + " × " + i.toString() + ' = ' + mult.toString()
        select.appendChild(opt)
    }

}