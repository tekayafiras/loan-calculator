
const firstInput = document.querySelector('.first')
const secondInput = document.querySelector('.second')
const thirdInput = document.querySelector('.third-input')

const button = document.querySelector('a');

//test
const result = document.querySelector('h1');

button.addEventListener('click',function(e){
    console.log(firstInput.value)
    console.log(secondInput.value)
    console.log(thirdInput.value)

    
    firstInput.value ='';
    thirdInput.value ='';
    secondInput.value ='';
})