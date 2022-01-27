class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
    this.previousOperandTextElement= currentOperandTextElement

    }


clear (){
}
delete(){
}

appendNumber(number){
}
chooseOperation(operation){
}
compute(){
}
updateDisplay(){
}

}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButtons = document.querySelector('[data-delete]')
const allClearButtons = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
