const nameField = document.querySelector('.enterName')
const btnNameSubmit = document.querySelector('.nameSubmit')
const getUserName = document.querySelector('.intro')
const btnBeginExercise = document.querySelector('.beginExercise')
const buttonSelector = document.querySelector('.exercise')
const selectNumber = document.querySelector('.selectBgnNm')
let completeInstruction = false

// Todo remove buttonGenerator, and randomize additionNumber

function numberGenerator() {
    let number = Math.floor(Math.random() * (10 - 1) + 1)
    return number
}

function createNumberButton() {
    let randomNumberNode = numberGenerator()
    let buttonGenerator = document.createElement('button')
    let buttonNumber = document.createTextNode(randomNumberNode)
    buttonGenerator.appendChild(buttonNumber)
    buttonGenerator.addEventListener('click', () => {
        let additionNumberGenerator = buttonNumber.textContent
        for (let i = 0; i < additionNumberGenerator; i++) {  
            let additionGenerator = document.createElement('button')
            let additionNumber = document.createTextNode(randomNumberNode)
            additionGenerator.appendChild(additionNumber)
            buttonSelector.append(additionGenerator)
        }
          
    })
    buttonSelector.append(buttonGenerator)
}

btnNameSubmit.addEventListener('click', () => {
    const instructionOverview = document.querySelector('.instruct')
    const instruction = document.querySelector('.whatToDo')
    instructionOverview.insertAdjacentHTML(
        'afterend'
        , `<h3>Hi ${nameField.value} here are your instructions:</h3>`
    )
    instruction.insertAdjacentHTML(
        'beforeend'
        , `<li>Select a number from the 10 circles below.</li>
          <li>Add the generated numbers together.</li>
          <li>Submit your answer in the answer box below.</li>
          <li>Get your answer verified and receive your price!</li>`
    )
    completeInstruction = true
    getUserName.remove()
    nameField.remove()
    btnNameSubmit.remove()
})

btnBeginExercise.addEventListener('click', () => {
    if (completeInstruction === false) {
        alert('Please enter your name')
    } else {
        let randomNumber = numberGenerator()

        for (let i = 1; i < randomNumber; i++) {
            createNumberButton()
        }

        selectNumber.insertAdjacentHTML('afterend', '<h2>Select an option from the buttons below</h2>')
        selectNumber.remove()
        btnBeginExercise.remove()
        
    }

})




