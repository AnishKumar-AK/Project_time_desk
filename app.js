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
const zoomPomo = document.querySelector('.zoom-pomo-btn')
const toolsClosebtn = document.querySelector('.Close-tools')
const colorPalet = document.querySelectorAll('.color1')
const colorPanel = document.querySelector('.color-panel')

loading.style.display = 'block'

setTimeout(() => {
try {
loading.style.display = 'none'

// const snow = document.querySelector('.snow')
// const mainTag = document.querySelector('.Main')
// const addTask = document.querySelector('.addTask')
// const TodayTImeNav = document.querySelector('#time')
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
document.querySelector('.day-month').innerHTML = `${dayName}, ${monthName} ${currentDate}`
let SecondsTimercounter = 0
let MinutesTimercounter = 0
let k = 0
let holdCount = 0
// let holdSecondsCount = 1
let InputContainArray = []
let final = []
// Today.innerHTML =  `${dayName}, ${monthName}   ${currentDate} ${fullYear}` 
let time = new Date()
let currentTime = time.toLocaleTimeString();
// Today.innerHTML =  `${currentTime}`

const updateTime = function(){                          // function updates the time on screen
    let time = new Date()
    // let currentTime = time.toLocaleTimeString();
    let hr = timehr[time.getHours()-1];
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    // Today.innerHTML = " "
    if(seconds < 10){
        seconds = seconds00[seconds]
    }
    if(minutes < 10){
        minutes = seconds00[minutes]
    }
    Today.innerHTML =  `${hr}:${minutes}:${seconds}`
    zoomed.innerHTML =  `${hr}:${minutes}`
    ZoomSeconds.innerHTML = `${seconds}`
    // TodayTImeNav.innerHTML = `${currentTime}`
    // console.log(currentTime);
    // console.log(Today);
    
}
console.log('timeUpdated');
setInterval(updateTime,10);
let allTasks = JSON.parse(localStorage.getItem('allTasks')) || {}
allTasks.colorChanged = allTasks.colorChanged || ""
allTasks.holdSecondsCount = allTasks.holdSecondsCount || 0
allTasks.valueofn = allTasks.valueofn ? allTasks.valueofn : 1
allTasks.DarkLight = allTasks.DarkLight || 0
localStorage.setItem('allTasks',JSON.stringify(allTasks))
studyMode.style['background-color'] = allTasks.colorChanged
ShowSeconds.addEventListener('click',() =>{
    // colorPanel.style.display = 'none'
    // toolsClosebtn.style.display = 'none'
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
    // secondsOnOff()
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
    // document.getElementsByName('placeholder').style.color = 'red'
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



// n = allTasks[`valueOfN${n}`] || 1
// n = allTasks.valueofn
// if(allTasks.valueofn == 1 || 2 || 3 || 4 || 5){
//     n = allTasks.valueofn
// }   
// else{
//     allTasks.valueofn = 0
//     n = 1
// }
// n = allTasks.valueofn
// final.append(divReturn)
// console.log(allTasks.div1);
// for (let i = 1; i < allTasks.valueofn; i++) {
//     allInputBoxes.innerHTML += allTasks[`div${i}`]
// }
// if(allTasks[`div${allTasks.valueofn}`] == ""){
//     allInputBoxes.innerHTML = ''
// }
// else{
//     allInputBoxes.innerHTML += allTasks[`div${allTasks.valueofn}`]
// }
// setInterval(() => {
//     if (allTasks.valueofn == 2) {
//         let input11 = document.querySelector('#input1')
//             // console.log(byby.value);
//             input11.value = allTasks.input1
//         } 
//     if (allTasks.valueofn == 3) {
//         let input22 = document.querySelector('#input2')
//             // console.log(byby.value);
//             input22.value = allTasks.input2
//         } 
//     if (allTasks.valueofn == 4) {
//         let input33 = document.querySelector('#input3')
//             // console.log(byby.value);
//             input33.value = allTasks.input3
//         } 
// }, 10);
// const inputOne = document.querySelector('#input1') ? document.querySelector('#input1') : ''
// inputOne.value = allTasks.input1
const repeat = () => {
    for (let i = 2; i <= allTasks.valueofn; i++) {
        allInputBoxes.innerHTML +=  allTasks[`div${i}`] 
        let inputK = document.querySelector(`#input${i-1}`)                 
        // inputK.addEventListener
            inputK.addEventListener('input',() => {
                console.log(inputK.value);
                allTasks[`div${i}`] = `<div id=\"input-box-div${i-1}\" class=\"Input-box-div\"><input class=\"input-css\" id=\"input${i-1}\" placeholder=\"${inputK.value}"></div>`
                localStorage.setItem('allTasks',JSON.stringify(allTasks))
                // console.log(input1.value)
                // console.log(input1);
            //     allTasks[`input${allTasks.valueofn-1}`] = inputOne.value
            // allTasks[`div${allTasks.valueofn}`] = `<div id=\"input-box-div${allTasks.valueofn-1}\" class=\"Input-box-div\"><input class=\"input-css\" id=\"input${allTasks.valueofn-1}\" placeholder=\"${input1.value}">${input1.value}</div>`
    })
        // console.log(inputK);
        
        
        // for(let k = 2;k<= allTasks.valueofn;k++){
        // }
    // let hello = allTasks[`div${allTasks.valueofn}`]
    // console.log(hello);
        
        // let inputOne = document.querySelector(`#input${allTasks.valueofn-1}`)
        // console.log(inputOne);
            // inputOne.innerHTML = allTasks[`input${allTasks.valueofn}`]
        //     console.log(inputOne);

        // if(allTasks.valueofn==2){
                                // })
            // const inputOne0 = document.querySelector('#input2')
            // console.log(inputOne0.value + 'hi');
        // }
        // else if(allTasks.valueofn == 3){
        //     k = 3
        //     if(k==3){
        //     }
        // }
        // else if(allTasks.valueofn==3){
        //     // const inputOne2 = document.querySelector('#input1')
        //     const inputtwo = document.querySelector('#input2')
        //     // inputOne2.value = allTasks.input1
        //     inputtwo.value = allTasks.input2
        // }
        // allTasks.div2.childNodesś = allTasks.input1.value
        // if(allTasks.div2 = "ś
        // console.log(input1.id);

        // input1.addEventListener('input',() => {
            // console.log(input1.value)
            // console.log(input1);
            // allTasks[`input${allTasks.valueofn-1}`] = input1.value 
    // localStorage.setItem('allTasks',JSON.stringify(allTasks))
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

    // while(i<6){
    //     allInputBoxes.innerHTML +=  allTasks[`div${allTasks.valueofn}`]
    //     i++ 
    // }
}
repeat();
// console.log(allTasks.inputDiv1);
startTimer.forEach((e) =>{
e.addEventListener('click', () =>{
    // let counter = 0;
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
        
        // SecondsTimercounter = 0
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
            // TimerRender.innerHTML = `${MinutesTimercounter}:${SecondsTimercounter}`
        }
        TimerRender.innerHTML = `${MinutesTimercounter}:${SecondsTimercounter}`
        secondStopW.innerHTML = `${MinutesTimercounter}:${SecondsTimercounter}`
        // console.log(MinutesTimercounter);
        if ( SecondsTimercounter > 59) {
            SecondsTimercounter = 0;
            MinutesTimercounter++;
            if(MinutesTimercounter < 10){
                // TimerRender.innerHTML = `${MinutesTimercounter}:${SecondsTimercounter}`
                MinutesTimercounter = seconds00[MinutesTimercounter]
            }
        }
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
    setTimeout(() => {
        loading.style.display = 'none'
        studyMode.style.display = 'block'
    }, 900);
    // allTasks.colorChanged = 
})
ZoomCloseBtn.addEventListener('click', () =>{
    console.log('study mode inactive');
    loading.style.display = 'block'
    setTimeout(() => {
        loading.style.display = 'none'
        document.querySelector('.study-mode').style.display = 'none'
    }, 800);
})
let closebtnHold = 0
window.addEventListener('mousemove', () =>{                 // window event to control zoom screen flow
    if(closebtnHold == 0){
            closebtnHold = 1   
            btnopacity()
        }
        // document.querySelector('body').style.cursor = ''
        // setTimeout(() => {
        //     document.querySelector('body').style.cursor = 'none'
        // }, 3500);
})
if(allTasks.valueofn>5){
    addTaskBtn.style.display = 'none'
    removetaskBtn.style.margin = '4rem 0 0 4rem'
}
const btnopacity = function (){            // function to control close button opacity
    ZoomCloseBtn.style.opacity= '50%'
    zoomTimer.style.opacity= '50%'
    zoomStopW.style.opacity= '50%'
    zoomPomo.style.opacity= '50%'
    
    setTimeout(() => {
        zoomTimer.style.opacity= '0%'
        zoomStopW.style.opacity= '0%'
        zoomPomo.style.opacity= '0%'
        ZoomCloseBtn.style.opacity= '0%'
        closebtnHold=0
    },3500);
}
let arrayToremove = []
// inputBoxSelector.forEach((e) => {
//     inputBoxSelector.addEventListener('click', () =>{
//         console.log('hellodsaodo');
//     })
// });
addTaskBtn.addEventListener('click',() =>{                  // button to add tasks. blue  #
    
    let divReturn =  addInputBox();
    let input1 = document.querySelector(`#input${allTasks.valueofn-1}`)
    // k++
    // allTasks[`div${allTasks.valueofn}`] = divReturn.outerHTML
    allTasks[`div${allTasks.valueofn}`] = `<div id=\"input-box-div${allTasks.valueofn-1}\" class=\"Input-box-div\"><input class=\"input-css\" id=\"input${allTasks.valueofn-1}\" placeholder=\"${input1.value}"></div>`
    localStorage.setItem('allTasks',JSON.stringify(allTasks))
    // console.log(divReturn.childNodes);
    // final = [...divReturn.childNodes]
    // console.log(final[0].id.innerText = ' hello');
    // final[0].innerText = 'hello'
    // console.log(divReturn[0]);
    // console.log(final[0]);
    InputContainArray[allTasks.valueofn-2] = divReturn.childNodes
    console.log(...InputContainArray[allTasks.valueofn-2]);
    // input1.value = allTasks[`input${allTasks.valueofn-1}`]
    // console.log(document.querySelector(`${InputContainArray[0]}`)); 
    // InputContainArray.forEach((e) => {
    //         e.addEventListener('focusout', () => {
    //             console.log(`this works hello yeah ${e}`);
    //         })
    // });
    // if (allTasks.valueofn == 2) {
        // console.log(input1.id);
        input1.addEventListener('input',() => {
            // console.log(`input updated`);
            
            allTasks[`div${allTasks.valueofn}`] = `<div id=\"input-box-div${allTasks.valueofn-1}\" class=\"Input-box-div\"><input class=\"input-css\" id=\"input${allTasks.valueofn-1}\" placeholder=\"${input1.value}"></div>`
            // console.log(input1.value)
            // console.log(input1);
            // console.log(input1.parentNode.outerHTML + input1.value);
            allTasks[`input${allTasks.valueofn-1}`] = input1.value
    localStorage.setItem('allTasks',JSON.stringify(allTasks))

            // input.innerText = input.value
        })
    // }
    // console.log(inputContainer.nextElementSibling.id);
    // console.log(divReturn);
    // console.log(allInputBoxes);
    // allInputBoxes.childNodes.forEach((e) => {
    //     InputContainArray[n] = e?
    //     console.log(...InputContainArray[n].childNodes);
    // })
    // final = [...InputContainArray[n].childNodes]
    // console.log(final[0].id);
    // final.forEach((e) => {
    //     e.id.innerText = 'hello'
    //     e.addEventListener('focusout',()=>{
    //         allTasks[`input${n-1}-value`] = e[0].id.value
    //         localStorage.setItem('allTasks',JSON.stringify(allTasks))
    //     })  
    // });
    // console.log(allTasks);
    // allTasks[`inputDiv${n-1}`] = divReturn.outerHTML
    // allTasks[`input${n-1}`] = final[0].id
    // localStorage.setItem('allTasks',JSON.stringify(allTasks))
    // arrayToremove[n-2] = inputIdtoRemove.id
    // newArray = [...arrayToremove]
    // console.log(newArray);
    if(allTasks.valueofn>5){
        addTaskBtn.style.display = 'none'
        removetaskBtn.style.margin = '4rem 0 0 4rem'
    } 
    console.log(`new task added Successfully`);

    // console.log(arrayToremove);
    // console.log(inputIdtoRemove.id + 'athis is ti');
    // inputContainer.append(inputBox)
})
// const repeat2 = () =>{
//     for(let b= 1; b<= 5; b++){
//         let inputk = document.querySelector('#input' + `${b}`)
//         inputk.value = allTasks[`input${b}`]
//         console.log(inputk.value);
//     }
// }
removetaskBtn.addEventListener('click',()=>{                                // button to remove tasks red  #
    // conso[le.log((document.querySelector(`#input-box-div${n-1}`)).id);
        inputContainer.removeChild((document.querySelector(`#input-box-div${allTasks.valueofn-1}`)))    
    // localStorage.removeItem(allTasks[`inputDiv${1}`])
    k--
    JSON.parse(localStorage.getItem('allTasks'))
    allTasks[`div${allTasks.valueofn}`] = ''
        allTasks.valueofn--
        allTasks[`input${allTasks.valueofn}`] = ""
        localStorage.setItem('allTasks',JSON.stringify(allTasks))
        allInputBoxes.innerHTML = ''
        repeat();
        // repeat2();
    // localStorage.setItem('allTasks',JSON.stringify(allTasks))
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
        // console.log(inputDiv.id);
        allTasks.valueofn++
        localStorage.setItem('allTasks',JSON.stringify(allTasks))
        // console.log(n);
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
// const inputBoxSelector = document.querySelectorAll(`#input${allTasks.valueofn}`)
// let input2 = document.querySelector('#input2')
// let input3 = document.querySelector('#input3')
// let input4 = document.querySelector('#input4')
// let input5 = document.querySelector('#input5')
// let input = [input1,input2]
// for (let i = 1; i < 3; i++){
//     // let input = ['#input1']
//     input[i].addEventListener('focusout',() => {
//         console.log('helo');
//     })
// }
// oxSelector.forEach(e =>{
//     e.addEventListener('click',() =>{
//         console.log('jasljdl');
//     })
// })
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
    // ToolsBtn.style.opacity ='0'
})
colorPalet.forEach((e) =>{
    // console.log(e.innerHTML);
    e.addEventListener('click',() =>{
        console.log(`Background Changed successfully to ${e.innerHTML}`);
        
        studyMode.style['background-color'] = e.innerHTML   
        DpNone()
        allTasks.colorChanged = e.innerHTML
        localStorage.setItem('allTasks',JSON.stringify(allTasks))
    })
    e.style['background-color'] = e.innerHTML
})

} catch (error) {
  console.log(error);
  loading.style.display = 'block'
     
}

}, 600);
