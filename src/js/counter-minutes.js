const html = document.querySelector(".class-h1");
const div_time = document.querySelector('.current_time');

const date = new Date();
const year = date.getFullYear();
const birthday = new Date(`${year}-10-01`).getTime();

function current_date(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const fullDate = `${year}-${month}-${day}`;

    return fullDate;
}

function return_date(birthday){
    const date = current_date();

    const calcBetwenDates = (new Date(date).getTime() - new Date(birthday).getTime())*-1;
    const calcBetwenDays = calcBetwenDates / (1000 * 3600 * 24); //Return Days

    return Math.round(calcBetwenDays);
}
function return_time(){
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const array_date_time = {
        days: day < "10" ? `0${day}` : `${day}`,
        months: month < "10" ? `0${month}` : `${month}`,
        hours: hour < "10" ? `0${hour}` : `${hour}`,
        minutes: minutes < "10" ? `0${minutes}` : `${minutes}`,
        seconds: seconds < "10" ? `0${seconds}` : `${seconds}`,
    };

    const fullHour = `${array_date_time.days}/${array_date_time.months}/${year} ${array_date_time.hours}:${array_date_time.minutes}:${array_date_time.seconds}`;
    return fullHour;
}

console.log(return_date(birthday))

setInterval(() => {
    div_time.innerHTML += `<label style="display: block;">Today is ${return_time()}</label>`;
    div_time.innerHTML = `<label style="display: hidden;">Today is ${return_time()}</label>`;
}, 1000); 

html.innerHTML += `<h1 style="display: block;">Missing ${return_date(birthday)} days for my birthday.</h1>`;