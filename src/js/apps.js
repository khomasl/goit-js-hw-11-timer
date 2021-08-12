class CountdownTimer {
    constructor() {
        this.selector = '#timer-1';
        this.targetDate = new Date('Aug 15, 2021 13:57');
        this.idInterval = null;
        this.time = null;
    }

    timerStop = () => {
        clearInterval(this.idInterval);
    }

    timerSetData = () => {
        //const timerDiv = document.querySelector(this.selector);
        const daysValue  = document.querySelector('span[data-value="days"]');
        const hoursValue = document.querySelector('span[data-value="hours"]');
        const minsValue  = document.querySelector('span[data-value="mins"]');
        const secsValue  = document.querySelector('span[data-value="secs"]');

        const labelDay  = document.querySelector('.label__day');
        const labelHour = document.querySelector('.label__hour');
        const labelMin  = document.querySelector('.label__min');
        const labelSec  = document.querySelector('.label__sec');

        const time = this.time;
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));   
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));   
        const secs = Math.floor((time % (1000 * 60)) / 1000);

        daysValue.textContent  = days  > 9 ? days  : `0${days}`;
        hoursValue.textContent = hours > 9 ? hours : `0${hours}`;
        minsValue.textContent  = mins  > 9 ? mins  : `0${mins}`;
        secsValue.textContent  = secs  > 9 ? secs  : `0${secs}`;

        labelDay.textContent  = days  === 1 ? 'Day' : 'Days'; ; 
        labelHour.textContent = hours === 1 ? 'Hour' : 'Hours'; 
        labelMin.textContent  = mins  === 1 ? 'Minute' : 'Minutes';
        labelSec.textContent  = secs  === 1 ? 'Second' : 'Seconds'; 
    }

// розмітка через шаблонний рядок
    // timerMakeMarkup = () => {
    //     const timerDiv = document.querySelector(this.selector);

    //     const time = this.time;
    //     const days = Math.floor(time / (1000 * 60 * 60 * 24));
    //     const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //     const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    //     const secs = Math.floor((time % (1000 * 60)) / 1000);

    //     const daysM= days  > 9 ? days  : `0${days}`;
    //     const hoursM= hours > 9 ? hours : `0${hours}`;
    //     const minsM= mins  > 9 ? mins  : `0${mins}`;
    //     const secsM= secs  > 9 ? secs  : `0${secs}`;

    //     const ds= days  === 1 ? '' : 's'; 
    //     const hs= hours === 1 ? '' : 's'; 
    //     const ms= mins  === 1 ? '' : 's'; 
    //     const ss= secs  === 1 ? '' : 's'; 

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
    //     `;

    //     timerDiv.innerHTML = markup;
    // }   

    timerStart = () => {
        this.time = this.targetDate - Date.now();

        if (this.time <= 0) {
            this.timerStop;
            return;
        };

        this.timerSetData();
        //this.timerMakeMarkup();
    };

    timerInit = () => {
        this.idInterval = setInterval(this.timerStart, 1000);
    }
}

const timer = new CountdownTimer();

window.addEventListener('DOMContentLoaded', timer.timerInit);