var fbegin = document.getElementById('begin')
var fend = document.getElementById('end')
var fstep = document.getElementById('step')
var p = document.getElementsByTagName('p')

function count(){

    var begin = Number(fbegin.value)
    var end = Number(fend.value)
    var step = Number(fstep.value)

    if(begin > end){
        p[0].innerHTML = 'Impossible count. The beginning is smaller than end.'
    }else{
        if(step <= 0){
            step = 1
            p[0].innerHTML = 'Counting with step = 1...'
        }else{
            p[0].innerHTML = 'Counting...'
        }
        var string = ''
        while (begin <= end) {
            string += begin.toString() + '&#128073;'

            begin = begin + step
        }
        p[1].innerHTML = string + '&#127937;'
    }
}