
//import { mk } from "./markup.js";
// import {timerDiv} from './refs.js';
//import {days, hours, mins, secs} from './time.js';
//const date = new Date('Sep 17, 2021');

//makeMarkup ();


// for (let i=0; i < 3; i++){
//     setTimeout(() => console.log(i), 1000);
// }
// for (let j=3;  j > 0; j--){
//     setTimeout(() => console.log(j), 2000);
// }
///////////////////
//const makeMarkup = (markup) => timerDiv.innerHTML = markup;

//setInterval(mk, 1000);
//makeMarkup(markup)

// const timerDiv = document.querySelector('#timer-1');
// class CountdownTimer = {
//          selector = '#timer-1';
//          targetDate = new Date('Sep 17, 2021');
//        }
let idInterval = null;
let startDate = null;
let time = null;


function timerStop () {
    clearInterval(idInterval);
}



function timerStart () {
    const timerDiv = document.querySelector('#timer-1');
    const daysValue  = document.querySelector('span[data-value="days"]');
    const hoursValue = document.querySelector('span[data-value="hours"]');
    const minsValue  = document.querySelector('span[data-value="mins"]');
    const secsValue  = document.querySelector('span[data-value="secs"]');

    const labelDay  = document.querySelector('.label__day');
    const labelHour = document.querySelector('.label__hour');
    const labelMin  = document.querySelector('.label__min');
    const labelSec  = document.querySelector('.label__sec');

    //console.log('daysValue :>> ', labelDay);
    //function getTime () {
        //time = time - 1000;
    startDate = new Date('Aug 12, 2021 07:50');    
    time = startDate - Date.now();

    if (time <= 0) {
        timerStop();
        return;
    };

    setTimerData();

    /////////////////////////////
    function setTimerData () {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));

        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        
        const secs = Math.floor((time % (1000 * 60)) / 1000);

        //if (days + hours + mins + secs === 0) {clearInterval(idInterval)};

        daysValue.textContent  = days  > 9 ? days  : `0${days}`;
        hoursValue.textContent = hours > 9 ? hours : `0${hours}`;
        minsValue.textContent  = mins  > 9 ? mins  : `0${mins}`;
        secsValue.textContent  = secs  > 9 ? secs  : `0${secs}`;

        labelDay.textContent  = days  === 1 ? 'Day' : 'Days'; ; 
        labelHour.textContent = hours === 1 ? 'Hour' : 'Hours'; 
        labelMin.textContent  = mins  === 1 ? 'Minute' : 'Minutes';
        labelSec.textContent  = secs  === 1 ? 'Second' : 'Seconds'; 

    }

};

// const timer = new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Sep 17, 2021'),
//   });

window.addEventListener('DOMContentLoaded', timerStart);

idInterval = setInterval(timerStart, 1000);

////////////////////////////////////////////////////////////////////////    
// розмітка через шаблонний рядок

// function makeMarkup () {
     // const daysM= days  > 9 ? days  : `0${days}`;
    // const hoursM= hours > 9 ? hours : `0${hours}`;
    // const minsM= mins  > 9 ? mins  : `0${mins}`;
    // const secsM= secs  > 9 ? secs  : `0${secs}`;

    // const ds= days  === 1 ? '' : 's'; 
    // const hs= hours === 1 ? '' : 's'; 
    // const ms= mins  === 1 ? '' : 's'; 
    // const ss= secs  === 1 ? '' : 's'; 

//     const markup = `
//         <div class="field">
//             <span class="value" data-value="days">${daysM}</span>
//             <span class="label label__day">Day${ds}</span>
//         </div>

//         <div class="field">
//             <span class="value" data-value="hours">${hoursM}</span>
//             <span class="label label__hour">Hour${hs}</span>
//         </div>

//         <div class="field">
//             <span class="value" data-value="mins">${minsM}</span>
//             <span class="label label__min">Minute${ms}</span>
//         </div>

//         <div class="field">
//             <span class="value" data-value="secs">${secsM}</span>
//             <span class="label label__sec">Second${ss}</span>
//         </div>
//   `;

//   timerDiv.innerHTML = markup;
 //}   
////////////////////////////////////////////////////////////////////////////////