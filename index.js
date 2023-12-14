let display = document.getElementById('display')

function addNumber(number) {
    const operators = ['+', '-', '*', '/'];
    const lastChar = display.value.charAt(display.value.length - 1);

    if (operators.includes(lastChar) && operators.includes(number)) {
      
        display.value = display.value.slice(0, -1) + number;
    } else {
       
        display.value += number;
    }
}


function calculate(){
    if(display.value){
        try {
            display.placeholder=''
            display.value = eval(display.value)
        } catch (error) {
            display.value = ''
            display.placeholder='Error'
        }
    }
   
   
}


function clean(){
    display.placeholder='0'
    display.value = ''
}

function backspace(){
    display.placeholder='0'
    display.value = display.value.slice(0,-1)
}