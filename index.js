let display = document.getElementById('display')

function addNumber(number) {
    const operators = ['+', '-', 'x', '/'];
    const lastChar = display.value.charAt(display.value.length - 1);

    if (operators.includes(lastChar) && operators.includes(number)) {
        // Se o último caractere e o número a ser adicionado são operadores, substitua o último operador pelo novo
        display.value = display.value.slice(0, -1) + number;
    } else {
        // Adicione o número normalmente
        display.value += number;
    }
}


function calculate(){
    if(display.value){
        try {
            display.value = eval(display.value)
        } catch (error) {
            display.value = ''
            display.placeholder='Error'
        }
    }
   
   
}


function clean(){
    display.value = ''
}

function backspace(){
    display.value = display.value.slice(0,-1)
}