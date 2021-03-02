
const firstInput = document.querySelector('.first')
const secondInput = document.querySelector('.second')
const thirdInput = document.querySelector('.third-input')

const result = document.querySelector('.result');
const message = document.querySelector('.message')

const monthlyPayment = document.querySelector('.monthly-payment')
const totalPayment = document.querySelector('.total-payment')
const totalInterest = document.querySelector('.total-interest')

const load = document.querySelector('.load');
let mPayment;
let tPayment;
let tInterest;

const button = document.querySelector('a');

button.addEventListener('click',function(e){

    const loanAmount = firstInput.value;
    const annualInterest = secondInput.value;
    const replaymentYears = thirdInput.value;
    result.style.display='none';

    

    let numbers = /^[0-9]+$/;
    console.log(loanAmount.match(numbers))
    console.log(annualInterest.match(numbers))
    console.log(replaymentYears.match(numbers))

    const UIamount = parseFloat(loanAmount);
    const UIinterest = parseFloat(annualInterest) /100 /12;
    const UIreplayment = parseFloat(replaymentYears) *12 ;

    const x = Math.pow(1 + UIinterest, UIreplayment);
    const monthly = (UIamount * x * UIinterest)/(x-1);

    console.log(UIamount);
    console.log(UIinterest);
    console.log(UIreplayment);

    

    firstInput.value ='';
    thirdInput.value ='';
    secondInput.value ='';

    

    if(loanAmount =='' || annualInterest ==''|| (replaymentYears=='' && loanAmount.match(numbers) == null || annualInterest.match(numbers) == null || replaymentYears.match(numbers) == null)){
        message.style.display ='block'

        setTimeout(clearMessage, 1200);

        function clearMessage(){
            message.style.display ='none';
        }
    }
    else{
        message.style.display ='none';
        load.style.display='inline';
        mPayment = monthly.toFixed(2);
        tPayment = (monthly * UIreplayment).toFixed(2);
        tInterest = ((monthly * UIreplayment) - UIamount).toFixed(2);

        monthlyPayment.innerHTML= `${mPayment}`;
        totalPayment.innerHTML=`${tPayment}`;
        totalInterest.innerHTML=`${tInterest}`;
        
        setTimeout(clearSVG,1000);

        function clearSVG(){
            load.style.display='none';
            result.style.display='block';
        }

    }
})