const Today = document.querySelector('.time-current')
const zoomed = document.querySelector('.zoom-features')
const startTimer = document.querySelectorAll('.stop-w-start')
const stopTimer = document.querySelectorAll('.stop-w-stop')
const resetTimer = document.querySelectorAll('.stop-w-reset')
const secondStopW    = document.querySelector('.stop-w-second')
const TimerRender = document.querySelector('.timer-count')
const TimeZoomBtn = document.querySelector('.time-zoom')
const ZoomCloseBtn = document.querySelector('.closebtn')
const addTaskBtn = document.querySelector('.add-task')
const removetaskBtn = document.querySelector('.remove-task')
const inputContainer = document.querySelector('.task-input-container')
const TaskPanels = document.querySelector('.task-panels')
const allInputBoxes= document.querySelector('.task-input-container')
const studyMode = document.querySelector('.study-mode')
const ZoomSeconds = document.querySelector('.zoom-features-seconds')
const ShowSeconds = document.querySelector('.ShowSeconds')
const ToolsBtn = document.querySelector('.tools')
const darkMode = document.querySelector('.Dark-Light-mode')
const LightMode = document.querySelector('.Dark-Light-mode2')
const taskPanel1 = document.querySelector('.panel1')
const loading = document.querySelector('.loading')
const zoomTimer = document.querySelector('.zoom-timer-btn')
const zoomStopW = document.querySelector('.zoom-stop-w-btn')
const zoomAlarm = document.querySelector('.zoom-Alarm-btn')
const zoomClock = document.querySelector('.zoom-clock-btn')
const toolsClosebtn = document.querySelector('.Close-tools')
const colorPalet = document.querySelectorAll('.color1')
const colorPanel = document.querySelector('.color-panel')
const dayMonthDate = document.querySelector('.day-month')
const TimeEmptyContainer = document.querySelector('.empty-time')


// loading.style.display = 'block'

setTimeout(() => {
try {
loading.style.display = 'none'

let date = new Date()
const month = [`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`]
const weekDays = [`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturdey`]
const timehr = [`01`,`02`,`03`,`04`,`05`,`06`,`07`,`08`,`09`,`10`,`11`,`12`,`01`,`02`,`03`,`04`,`05`,`06`,`07`,`08`,`09`,`10`,`11`,`12`]
const seconds00 = [`00`,`01`,`02`,`03`,`04`,`05`,`06`,`07`,`08`,`09`]
const monthName = month[date.getMonth()]
const dayName = weekDays[date.getDay()]
const currentDate   = date.getDate()
const fullYear   = date.getFullYear()
console.log(date.getDay());
console.log(monthName);
console.log(dayName);
console.log(currentDate);
dayMonthDate.innerHTML = `${dayName}, ${monthName} ${currentDate}`
let SecondsTimercounter = 0
let MinutesTimercounter = 0
let k = 0
let holdCount = 0
let InputContainArray = []
let final = []
let time = new Date()
let currentTime = time.toLocaleTimeString();
let alarmHours = 0
let alarmMins = 0


const updateTime = function(){                          // function updates the time on screen
    let time = new Date()
    let hr = timehr[time.getHours()-1];
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    if(seconds < 10){
        seconds = seconds00[seconds]
    }
    if(minutes < 10){
        minutes = seconds00[minutes]
    }
    Today.innerHTML =  `${hr}:${minutes}:${seconds}`
    zoomed.innerHTML =  `${hr}:${minutes}`
    ZoomSeconds.innerHTML = `${seconds}`
    
}
console.log('timeUpdated');
setInterval(updateTime,10);



let allTasks = JSON.parse(localStorage.getItem('allTasks')) || {}
allTasks.colorChanged = allTasks.colorChanged || ""
allTasks.holdSecondsCount = allTasks.holdSecondsCount || 0
allTasks.valueofn = allTasks.valueofn ? allTasks.valueofn : 1
allTasks.DarkLight = allTasks.DarkLight || 0
allTasks.alarmHrs = allTasks.alarmHrs || 0
allTasks.alarmMin = allTasks.alarmMin || 0
alarmHours = +allTasks.alarmHrs
alarmMins = +allTasks.alarmMin
localStorage.setItem('allTasks',JSON.stringify(allTasks))

studyMode.style['background-color'] = allTasks.colorChanged

ShowSeconds.addEventListener('click',() =>{
    DpNone()
    if(ShowSeconds.innerHTML == 'Show Seconds'){
        allTasks.holdSecondsCount = 1
        console.log('seconds On');

        ZoomSeconds.style.display = 'block'
        ShowSeconds.style['background-color'] = '#E88D67'
        ShowSeconds.innerHTML = 'Hide Seconds'
    }
    else{
        console.log('seconds OFF');

        ZoomSeconds.style.display = 'none'
        allTasks.holdSecondsCount = 0
        ShowSeconds.style['background-color'] = '#77E4C8'

        ShowSeconds.innerHTML = 'Show Seconds'
    }
    ShowSeconds.style.display = 'none'
})
const secondsOnOff = () =>{
    if(allTasks.holdSecondsCount == 1){
        console.log('seconds On');
        
        allTasks.holdSecondsCount = 0
        ZoomSeconds.style.display = 'block'
        ShowSeconds.style['background-color'] = '#E88D67'
        ShowSeconds.innerHTML = 'Hide Seconds'
        
    }
    else{

        console.log('seconds OFF');

        ZoomSeconds.style.display = 'none'
        allTasks.holdSecondsCount = 1
        ShowSeconds.style['background-color'] = '#77E4C8'
        ShowSeconds.innerHTML = 'Show Seconds'
    }
    localStorage.setItem('allTasks',JSON.stringify(allTasks))
}
secondsOnOff()


const LightModeSet =  function(){
    const divsDark = document.querySelectorAll('.Input-box-div')
const body = document.querySelector('body')
    taskPanel1.classList.remove('panel1Dark')

    divsDark.forEach(e =>{
        e.classList.remove('Input-box-div-dark')
    })
    darkMode.style.display = 'block'
    LightMode.style.display = 'none'
        const inputDark = document.querySelectorAll('.input-css')
    inputDark.forEach(e =>{
        e.classList.remove('input-css-dark')
    })
    body.style['background-image'] = `linear-gradient(to right bottom, #d16ba5, #c15ea9, #ac53ad, #934cb3, #7247b8, #5d42b4, #433db0, #1d38ac, #192f9f, #142792, #0e1e85, #071678)`
localStorage.setItem('allTasks',JSON.stringify(allTasks))
    
}
const darkModeSet =  function(){
    darkMode.style.display = 'none'
const body = document.querySelector('body')

    LightMode.style.display = 'block'
    taskPanel1.classList.add('panel1Dark')
    const inputDark = document.querySelectorAll('.input-css')
    inputDark.forEach(e =>{
        e.classList.add('input-css-dark')        
    })
    const divsDark = document.querySelectorAll('.Input-box-div')
    divsDark.forEach(e =>{
        e.classList.add('Input-box-div-dark')
    })
    body.style['background'] = 'black'
localStorage.setItem('allTasks',JSON.stringify(allTasks))

}




if(allTasks.DarkLight == 1){
    LightModeSet()
}
else{
    darkModeSet()
}
darkMode.addEventListener('click',() =>{
    allTasks.DarkLight = 0
    darkModeSet()
    
})
LightMode.addEventListener('click',() =>{
    allTasks.DarkLight = 1
    LightModeSet()
})



const repeat = () => {
    for (let i = 2; i <= allTasks.valueofn; i++) {
        allInputBoxes.innerHTML +=  allTasks[`div${i}`] 
        let inputK = document.querySelector(`#input${i-1}`)                 
            inputK.addEventListener('input',() => {
                console.log(inputK.value);
                allTasks[`div${i}`] = `<div id=\"input-box-div${i-1}\" class=\"Input-box-div\"><input class=\"input-css\" id=\"input${i-1}\" placeholder=\"${inputK.value}"></div>`
                localStorage.setItem('allTasks',JSON.stringify(allTasks))
    })
}   
    console.log('task refreshed');
    console.log('tasks loaded successfully');
    if(allTasks.DarkLight == 0){
        const inputDark = document.querySelectorAll('.input-css')
        inputDark.forEach(e =>{
            e.classList.add('input-css-dark')        
        })
        const divsDark = document.querySelectorAll('.Input-box-div')
        divsDark.forEach(e =>{
            e.classList.add('Input-box-div-dark')
        })
    }
    else return
}
repeat();
startTimer.forEach((e) =>{
    e.addEventListener('click', () =>{
        TimerRender.style.color = 'red'
    setTimeout(() => {
        TimerRender.style.color = 'white'
        
    }, 1000);
    setTimeout(() => {
        document.querySelector('.stop-w-heading').style.opacity="0%"
    }, 200);
    if(holdCount == 0){
    var  hello =   startOne()
    console.log('timer start'); 
    }
    stopTimer.forEach((e) =>{

    e.addEventListener('click', () => {
        clearInterval(hello)
        SecondsTimercounter = +SecondsTimercounter
        holdCount=0
        console.log(SecondsTimercounter);
        console.log('timer stopped');
        
    })
})
    resetTimer.forEach((e) =>{
    e.addEventListener('click', () => {
        clearInterval(hello);
        console.log('timer reset successful');
        
        SecondsTimercounter = 0
        holdCount = 0
        MinutesTimercounter = 0
        TimerRender.innerHTML = '00:00'
        secondStopW.innerHTML = '00:00'
        })
       })
      });
    })
const startOne = () => {
    if (MinutesTimercounter == 0 || MinutesTimercounter == '00') {
        MinutesTimercounter = seconds00[+MinutesTimercounter]
        console.log(MinutesTimercounter);
    }
   let thisinterval = setInterval(() => {
        SecondsTimercounter++;
        holdCount++
        
        console.log(SecondsTimercounter , MinutesTimercounter);
        if(SecondsTimercounter < 10){
            SecondsTimercounter = seconds00[SecondsTimercounter]
        }
        TimerRender.innerHTML = `${MinutesTimercounter}:${SecondsTimercounter}`
        secondStopW.innerHTML = `${MinutesTimercounter}:${SecondsTimercounter}`
        if ( SecondsTimercounter > 59) {
            MinutesTimercounter++;
            SecondsTimercounter = 0;
            SecondsTimercounter = seconds00[SecondsTimercounter]
            if(MinutesTimercounter < 10){
                MinutesTimercounter = seconds00[MinutesTimercounter]
            }
        }
        TimerRender.innerHTML = `${MinutesTimercounter}:${SecondsTimercounter}`
        secondStopW.innerHTML = `${MinutesTimercounter}:${SecondsTimercounter}`
        if(MinutesTimercounter > 59){
            console.log('minutes shifted successfully');
            TimerRender.style.margin = '11rem 0 0 35%';
            document.querySelector(".minutes-heading").style.margin = "13rem 0 0 66%"
            TimerRender.innerHTML = `${MinutesTimercounter}`
            secondStopW.innerHTML = `${MinutesTimercounter}`

        }
        if(MinutesTimercounter > 99){
            console.log('minutes shifted successfully');
            TimerRender.style.margin = '11rem 0 0 27%';
            document.querySelector(".minutes-heading").style.margin = "13rem 0 0 76%"
            TimerRender.innerHTML = `${MinutesTimercounter}`
            secondStopW.innerHTML = `${MinutesTimercounter}`


        }
        if(MinutesTimercounter > 999){
            console.log('minutes shifted successfully');
            TimerRender.style.margin = '11rem 0 0 22%';
            document.querySelector(".minutes-heading").style.margin = "13rem 0 0 86%"
            TimerRender.innerHTML = `${MinutesTimercounter}`
            secondStopW.innerHTML = `${MinutesTimercounter}`

        }
    },1000)
    return thisinterval;
}
TimeZoomBtn.addEventListener('click', () =>{
    console.log('study mode active');
    loading.style.display = 'block'
    TaskPanels.style.display = 'none'
    // body.style.overflow = hidden
    setTimeout(() => {
        loading.style.display = 'none'
        studyMode.style.display = 'block'
    }, 900);
})
ZoomCloseBtn.addEventListener('click', () =>{
    console.log('study mode inactive');
    loading.style.display = 'block'
    TaskPanels.style.display = 'block'

    setTimeout(() => {
        loading.style.display = 'none'
        document.querySelector('.study-mode').style.display = 'none'
    }, 800);
})
let closebtnHold = 0

if(allTasks.valueofn>5){
    addTaskBtn.style.display = 'none'
    removetaskBtn.style.margin = '4rem 0 0 4rem'
}
let arrayToremove = []
addTaskBtn.addEventListener('click',() =>{                  // button to add tasks. blue  #
    
    let divReturn =  addInputBox();
    let input1 = document.querySelector(`#input${allTasks.valueofn-1}`)
    allTasks[`div${allTasks.valueofn}`] = `<div id=\"input-box-div${allTasks.valueofn-1}\" class=\"Input-box-div\"><input class=\"input-css\" id=\"input${allTasks.valueofn-1}\" placeholder=\"${input1.value}"></div>`
    localStorage.setItem('allTasks',JSON.stringify(allTasks))
    InputContainArray[allTasks.valueofn-2] = divReturn.childNodes
    console.log(...InputContainArray[allTasks.valueofn-2]);
    input1.addEventListener('input',() => {
            allTasks[`div${allTasks.valueofn}`] = `<div id=\"input-box-div${allTasks.valueofn-1}\" class=\"Input-box-div\"><input class=\"input-css\" id=\"input${allTasks.valueofn-1}\" placeholder=\"${input1.value}"></div>`
            allTasks[`input${allTasks.valueofn-1}`] = input1.value
    localStorage.setItem('allTasks',JSON.stringify(allTasks))
        })
    if(allTasks.valueofn>5){
        addTaskBtn.style.display = 'none'
        removetaskBtn.style.margin = '4rem 0 0 4rem'

    } 
    console.log(`new task added Successfully`);
})
removetaskBtn.addEventListener('click',()=>{                                // button to remove tasks red  #
        inputContainer.removeChild((document.querySelector(`#input-box-div${allTasks.valueofn-1}`)))    
    k--
    JSON.parse(localStorage.getItem('allTasks'))
    allTasks[`div${allTasks.valueofn}`] = ''
        allTasks.valueofn--
        allTasks[`input${allTasks.valueofn}`] = ""
        localStorage.setItem('allTasks',JSON.stringify(allTasks))
        allInputBoxes.innerHTML = ''
        repeat();
    if(allTasks.valueofn<6){
        removetaskBtn.style.margin = '4rem 0 0 11.7rem'
        addTaskBtn.style.display = 'block'
    }
})
const addInputBox = () =>{                  // function to create inout div #
    if(allTasks.valueofn<6){
        let inputDiv = document.createElement('div')
        inputDiv.setAttribute('id',`input-box-div${allTasks.valueofn}`)
        let inputBox = document.createElement('input')
        inputBox.classList.add('input-css')
        inputBox.setAttribute('id',`input${allTasks.valueofn}`)
        inputBox.placeholder = 'Enter Your Task Here...'
        inputDiv.classList.add('Input-box-div')
        inputContainer.append(inputDiv)
        inputDiv.appendChild(inputBox)
        allTasks.valueofn++
        localStorage.setItem('allTasks',JSON.stringify(allTasks))
        console.log('New Input Div Created');
        if(allTasks.DarkLight == 0){
            inputBox.style.color = 'white'
        }
        else{
            inputBox.style.color = 'black'
        }
        return inputDiv
    }
}
colorPanel.style.display = 'none'
colorPalet.forEach((e) =>{
    e.style.display = 'none'    
})
const DpNone = function() {
    colorPanel.style.display = 'none'
    ShowSeconds.style.display = 'none'
    snowControl.style.display = 'none'
    toolsClosebtn.style.display = 'none'
}
ToolsBtn.addEventListener('click',() =>{
    console.log('Tools-opened');
    colorPalet.forEach((e) =>{
        e.style.display = 'block'
    })
    colorPanel.style.display = 'flex'
    snowControl.style.display = 'block'
    ShowSeconds.style.display = 'block'
    toolsClosebtn.style.display = 'block'
    toolsClosebtn.addEventListener('click' ,() =>{
        console.log('Tools-Closed');
        
        DpNone()
    })
})
colorPalet.forEach((e) =>{
    e.addEventListener('click',() =>{
        console.log(`Background Changed successfully to ${e.innerHTML}`);
        
        studyMode.style['background-color'] = e.innerHTML   
        DpNone()
        allTasks.colorChanged = e.innerHTML
        localStorage.setItem('allTasks',JSON.stringify(allTasks))
    })
    e.style['background-color'] = e.innerHTML
})
const timerSetZoom = document.querySelector('.TimerSet0')
const timerSet = document.querySelector('.TimerSet')
const timerSetEmptyContainer = document.querySelector('.timerSet-empty')
const alarmContainer = document.querySelector('.alarmContainer')

const zoomOpacityAllBtn = function(){
    zoomed.style.opacity = '0'
    dayMonthDate.style.opacity = '0'
    ZoomSeconds.style.opacity = '0'
    TimeEmptyContainer.style.opacity = '0'
    timerSet.style.opacity = '0'
    timerSetEmptyContainer.style.opacity = '0'
    timerSetEmptyContainer.style.opacity = '0'
    alarmContainer.style.opacity = '0'   
}
zoomTimer.addEventListener('click', ()=>{
    zoomOpacityAllBtn()
    TimeEmptyContainer.style.opacity = '100'
})
zoomClock.addEventListener('click', ()=>{
    zoomOpacityAllBtn()
    zoomed.style.opacity = '100'
    dayMonthDate.style.opacity = '100'
    ZoomSeconds.style.opacity = '100'
})
timerSetZoom.addEventListener('click', ()=>{
    zoomOpacityAllBtn()
    timerSet.style.opacity = '100'
    timerSetEmptyContainer.style.opacity = '100'
})
const SetalarmDiv = document.querySelector('.alarmNum') 

const selectHr = document.querySelector('#hr')
const selectMin = document.querySelector('#Min')
const setAlarm = document.querySelector('.PostAlarm')
const notiTime = document.querySelector('.notiTime')
const ALarmOffBtn = document.querySelector('.turnOffAlarm')
const alarmNotiPanel = document.querySelector('.AlarmNotification')

for(i=1; i< 13; i++){
    if(i == 12 ){
        selectHr.innerHTML += `<option value=${i}>${i} Pm</option>`
    }
    else selectHr.innerHTML += `<option value=${i}>${i} Am</option>`
}
for(i=13; i< 25; i++){
    if(i == 24 ){
        selectHr.innerHTML += `<option value=${i}>${i-12} Am</option>`
    }
    else{

        selectHr.innerHTML += `<option value=${i}>${i-12} Pm</option>`
    }
}
for(i=0; i< 60; i++){
    if(i<10){
        selectMin.innerHTML += `<option value=${i}>${seconds00[i]}</option>`
    }
    else selectMin.innerHTML += `<option value=${i}>${i}</option>`
}


const oldAlarm = document.querySelector('.oldAlarm')
if(alarmHours > 0){
    selectHr.value = +alarmHours
}
selectMin.value = +alarmMins

const alarmOldPreSet = function() {
    if(alarmHours > 0 && alarmHours < 12 || alarmHours == 24){
        if(alarmMins < 10){
            oldAlarm.innerHTML = `${timehr[alarmHours-1]}:${seconds00[alarmMins]} AM`
            notiTime.innerHTML = `${timehr[alarmHours-1]}:${seconds00[alarmMins]} `
        }
        else {

            oldAlarm.innerHTML = `${timehr[alarmHours-1]}:${alarmMins} AM`
            notiTime.innerHTML = `${timehr[alarmHours-1]}:${alarmMins} `
        }
    }
    
    else if(alarmHours == 0){
        oldAlarm.innerHTML = `00:00 AM`
        notiTime.innerHTML = `00:00 `
        }
    else {
        if(alarmMins < 10){
    
            oldAlarm.innerHTML = `${timehr[alarmHours-1]}:${seconds00[alarmMins]} PM`
            notiTime.innerHTML = `${timehr[alarmHours-1]}:${seconds00[alarmMins]}`
        }
        else {

            oldAlarm.innerHTML = `${timehr[alarmHours-1]}:${alarmMins} PM`
            notiTime.innerHTML = `${timehr[alarmHours-1]}:${alarmMins}`
        }
    }  
}
alarmOldPreSet()


let holdAlarm = 0

setAlarm.addEventListener('click',()=>{
    console.log(selectHr.value);
    alarmHours = selectHr.value
    alarmMins = selectMin.value
    allTasks.alarmHrs = +alarmHours
    allTasks.alarmMin = +alarmMins
    localStorage.setItem('allTasks',JSON.stringify(allTasks))
    SetalarmDiv.style.display = 'none'
    changeAlarm.style.display = 'block'
    alarmOldPreSet()
    holdAlarm = 0
    return alarmHours,alarmMins 
})
zoomAlarm.addEventListener('click',()=>{
    zoomOpacityAllBtn()
    if(oldAlarm.innerHTML == '00:00 AM')
    {
        changeAlarm.style.display = 'none'
        SetalarmDiv.style.display = 'block'
    }
    else{

        SetalarmDiv.style.display = 'none'
        changeAlarm.style.display = 'block'
    }
    alarmContainer.style.opacity = '100%'   

})

const changeAlarm = document.querySelector('.ChangeAlarm')
changeAlarm.addEventListener('click', ()=> {
    SetalarmDiv.style.display = 'block'

})
ALarmOffBtn.addEventListener('click', ()=>{
    holdAlarm = 2
    if(holdAlarm == 2){
        audioElement.pause()
        // alarmNotiPanel.style['margin-top'] = '-11rem'
        alarmNotiPanel.style.transform = 'translateY(0px)'
        alarmNotiPanel.style.display = 'none'
        alarmNotiPanel.style.opacity = 0

    }
})

const audioElement = new Audio("clockTick.mp3");

const alarmTime = function(){                          // function checks alarm time
    let time = new Date()
    let hr = time.getHours();
    let minutes = time.getMinutes()
    if(+alarmHours == hr && +alarmMins == minutes){
        if(holdAlarm == 0){
            audioElement.play()
            console.log('alarm offf');
            alarmNotiPanel.style.opacity = 1
            alarmNotiPanel.style.display = 'block'
            alarmNotiPanel.style.transform = 'translateY(42px)'
            
        }
        holdAlarm = 1
    } 
    else {
        audioElement.pause()
        alarmNotiPanel.style.opacity = 0
        alarmNotiPanel.style.display = 'none'

        alarmNotiPanel.style.transform = 'translateY(0px)'

        // alarmNotiPanel.style['margin-top'] = '-11rem'
        holdAlarm = 0
    }      
}

setInterval(alarmTime,1000)

// selectHr.addEventListener('click',()=>{
//     console.log(selectHr.value);
// })
// let timeAm = 1
// const alarmContainer = document.querySelector('.alarmContainer')
// const createSelect = ()=>{
//     // selectHr.setAttribute('id', 'hr')
//         let selectHrDiv = document.createElement('div')
//         selectHrDiv.setAttribute('class','alarmSelectDiv')
//         // let HrPlusH = document.createElement('hr')
//         // HrPlusH.setAttribute('class','PlusH')
//         // let HrPlusV = document.createElement('hr')
//         // HrPlusV.setAttribute('class','PlusV')
//         // selectHrDiv.appendChild(HrPlusH)
//         // selectHrDiv.appendChild(HrPlusV)
//         /* display: flex; */
//         alarmContainer.prepend(selectHrDiv)
        
//         // let selectHrOption = document.createElement('option')
//         // selectHrOption.setAttribute('vaalue',`${i}`)
//         // selectHrOption.innerText = `${i+1} AM`
//     // let inputDiv = document.createElement('div')
//     // inputDiv.setAttribute('id',`input-box-div${allTasks.valueofn}`)
//     // inputBox.classList.add('input-css')
//     // inputBox.setAttribute('id',`input${allTasks.valueofn}`)
//     // inputBox.placeholder = 'Enter Your Task Here...'
//     // inputDiv.classList.add('Input-box-div')
//     // inputContainer.append(inputDiv)
//     // inputDiv.appendChild(inputBox)
// }
// // createSelect()
// const alarmSetDiv = document.querySelector('.alarmSelectDiv')
// alarmSetDiv.addEventListener('click',(e)=>{
//     if(alarmContainer.childElementCount < 5){
//         alarmSetDiv.style.display = 'block'
//         createSelect()
//     }
//     else{
//         createSelect()
//         alarmSetDiv.style.display = 'none'
//     }

// })





// <!-- <div class="alarmSelectDiv">
//                                 <hr class="PlusH">
//                                 <hr class="PlusV">
//                             </div> -->


//                             <!-- <div class="alarmSelectDiv"></div>
//                             <div class="alarmSelectDiv"></div>
//                             <div class="alarmSelectDiv"></div>
//                             <div class="alarmSelectDiv"></div>
//                             <div class="alarmSelectDiv"></div>
//                             <div class="alarmSelectDiv"></div>
//                             <div class="alarmSelectDiv"></div> -->
//                             <!-- hellosdasdsadasdasd -->
//                            







let timerMin = 0
let timerSec = "00"

const timer5m = document.querySelector('.timer5min')
const timer10m = document.querySelector('.timer10min')
const timer30m = document.querySelector('.timer30min')
const timer60m = document.querySelector('.timer60min')

let timerholdcounter = 0
timer5m.addEventListener('click',()=>{
        if(timerholdcounter == 0){
            timerholdcounter = 1
            timerDrop(4)
        }    
})
timer10m.addEventListener('click',()=>{
        if(timerholdcounter == 0){
            timerholdcounter = 1
            timerDrop(9)
        }    
})
timer30m.addEventListener('click',()=>{
        if(timerholdcounter == 0){
            timerholdcounter = 1
            timerDrop(29)
        }    
})
timer60m.addEventListener('click',()=>{
        if(timerholdcounter == 0){
            timerholdcounter = 1
            timerDrop(59)
        }    
})

const timerDrop = function(a){
    timerMin += a+1
    // timerSec--
    if(timerMin<10){
        timerSet.innerHTML = `0${timerMin}:${timerSec}`
    }
    else{
        timerSet.innerHTML = `${timerMin}:${timerSec}`

    }
    timerSec = 60
    timerMin--
    let thisInterval2 = setInterval(() => {
        if(timerMin != -1 && timerSec != 0){
            // timerSec = '00'
            timerSec--
            if(+timerMin < 1 && +timerSec < 60){
                timerSet.style.color = 'red'
            }
            else timerSet.style.color = 'rgb(184, 243, 197)'
                 
            if(timerMin<10){
                timerMin = seconds00[+timerMin]
            }
            if(timerSec<10){
                timerSec = seconds00[+timerSec]
            }
            timerSet.innerHTML = `${timerMin}:${timerSec}`
            if(timerSec=='00'){
                timerSec = 59
                timerMin = +timerMin
                timerMin--
                console.log(timerMin + 'hellosadsa');
            }  
        }
        else{
        clearInterval(thisInterval2)
        timerholdcounter = 0
        timerMin = 0
        timerSec = 0
        }
    }, 1000);

}







window.addEventListener('mousemove', () =>{                 // window event to control zoom screen flow
    if(closebtnHold == 0){
            closebtnHold = 1   
            btnopacity()
        }
})

const btnopacity = function (){            // function to control all zoom buttons opacity on mouse move
    ZoomCloseBtn.style.opacity= '50%'
    zoomTimer.style.opacity= '50%'
    zoomStopW.style.opacity= '50%'
    zoomAlarm.style.opacity= '50%'
    zoomClock.style.opacity= '50%'
    timer5m.style.opacity = '100%'
    timer10m.style.opacity = '100%'
    timer30m.style.opacity = '100%'
    timer60m.style.opacity = '100%'
    setTimeout(() => {
        timer5m.style.opacity = '0%'
        timer10m.style.opacity = '0%'
        timer30m.style.opacity = '0%'
        timer60m.style.opacity = '0%'
        zoomTimer.style.opacity= '0%'
        zoomStopW.style.opacity= '0%'
        zoomAlarm.style.opacity= '0%'
        zoomClock.style.opacity= '0%'
        ZoomCloseBtn.style.opacity= '0%'
        closebtnHold=0
    },3500);
}






} catch (error) {
  console.log(error);
  loading.style.display = 'block'
     
}
}, 600);
