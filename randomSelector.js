let introduction = document.getElementById('intro')
let nameIntro = document.querySelector('h2')

introduction.addEventListener('click', () =>{
    introduction.textContent = input.value
    input.value = ""
    nameIntro.prepend(`Hello ${input.value}, here are your`) 
} )
