const checkButton = document.querySelectorAll('.checkButton')
const container = document.querySelectorAll('.TaskContainer2')
const input = document.querySelectorAll('.TaskInputBox')
const progressBar = document.querySelector('.ProgressBarInsideBg')
const progressBarValue = document.querySelector('.ProgressValue')
const Quote = document.querySelector('.progressQuote')
const ErrorLabel = document.querySelector('.ErrorLabel')
// let arrayInput = [...input]
let allGoals = JSON.parse(localStorage.getItem('allGoals')) || {}
const quotes = [
    'Raise The Bar By Completing Your Goals!',
    'Good Job',
    'keep going',
    'way to go, great work, now enjoy your day'
]
let valuesCpl = Object.values(allGoals).filter((goals) => goals.completed).length
progressBarValue.innerText = `${valuesCpl}/${input.length} Completed`
checkButton.forEach((e) => {
    e.addEventListener('click', () => {
        console.log(e.id);
        const filled = [...input].every((i) => {
            return i.value
        })
        if (filled) {
            e.parentElement.classList.toggle('checked')
            e.classList.toggle('checkButtonClicked')
            ErrorLabel.classList.remove('errorLabel-on')
            const inputBoxId = e.previousElementSibling.id
            console.log(inputBoxId);
            allGoals[inputBoxId].completed = !allGoals[inputBoxId].completed
            valuesCpl = Object.values(allGoals).filter((goals) => goals.completed).length
            progressBar.style.width = `${valuesCpl/input.length *100}%`
            progressBarValue.innerText = `${valuesCpl}/${input.length} Completed`
            localStorage.setItem('allGoals',JSON.stringify(allGoals))
            Quote.innerText = quotes[valuesCpl]
        }else{
            ErrorLabel.classList.add('errorLabel-on')
            e.parentElement.classList.remove('checked')
            e.classList.remove('checkButtonClicked')
        }
    }
    )})
input.forEach((e) => {
    if(allGoals[e.id]){
        e.value = allGoals[e.id].sname
            if(allGoals[e.id].completed){
                Quote.innerText = quotes[valuesCpl]
                e.parentElement.classList.add('checked')
                progressBar.style.width = `${valuesCpl/input.length *100}%`
                progressBarValue.innerText = `${valuesCpl}/${input.length} Completed`
                e.nextElementSibling.classList.add('checkButtonClicked')
            }
    }    
    e.addEventListener('focusout', ()=>{
        if(e.value == false){
            e.parentElement.classList.remove('checked')
            e.nextElementSibling.classList.remove('checkButtonClicked')
        }
    })
    e.addEventListener('input',()=>{
        if(allGoals[e.id] && allGoals[e.id].completed){
            e.value = allGoals[e.id].sname
            return
        }
        allGoals[e.id] = {
            sname: e.value,
            completed: false
        } 
        localStorage.setItem('allGoals',JSON.stringify(allGoals))
        console.log(allGoals);
    })
})