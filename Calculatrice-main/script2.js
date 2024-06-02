const display = document.getElementById('display')

display.innerText = "0";



function appendToDisplay(input){
    if(display.innerText === "0"){
        display.innerText = input
    }else
        display.innerText += input;
}

function clearDisplay(){
    display.innerText = "0";
}


function calculate(){
    try{
        display.innerText = eval(display.innerText)

    }
    catch(error){
        display.innerText = "Error"
    }


}


document.addEventListener('keydown', function(event) {
    console.log(event.key)
    if ((event.key >= "0" && event.key <= "9") 
        || event.key === '+' || event.key === '-'
        || event.key === '/'||  event.key ==='*') {
        appendToDisplay(event.key)
    }else if (event.key === 'Enter'){
        calculate()
    }else if(event.key === 'Backspace'){
        display.innerText = display.innerText.slice(0, -1)
    }
})
