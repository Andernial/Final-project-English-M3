let display = document.getElementById('display')

function addNumber(number){
    display.value += number
}


function calculate(){
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = 'Error'
    }
   
}


function clean(){
    display.value = ''
}

function backspace(){
    display.value = result.value.slice(0,-1)
}