const html = document.querySelector(".class-h1");
const div_time = document.querySelector('.current_time');
const loader = document.querySelector('.loader');
const cake = document.querySelector(".cake");

const date = new Date();
const year = date.getFullYear();
const birthday = new Date(`${year}-10-01`).getTime();
//const test_date = new Date("2024-10-01").getTime();

function current_date(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const fullDate = `${year}-${month}-${day}`;
    //const test_date = new Date("2024-10-01").getTime();

    return fullDate;
}

function return_date(birthday){
    const date = current_date();
    //const date = new Date(`2025-02-05`).getTime();
    const updateYear = (new Date().getFullYear()+1);

    console.log(updateYear);

    const calcBetwenDates = (new Date(date).getTime() - new Date(birthday).getTime())*-1;
    const calcBetwenDays = calcBetwenDates / (1000 * 3600 * 24); //Return Days

    if (calcBetwenDays >= 0) {
        return Math.round(calcBetwenDays);
    }else if(calcBetwenDays < 0){
        const newCalcBetwenDates = (new Date(date).getTime() - new Date(`${updateYear}-10-01`).getTime())*-1;
        const newCalcBetwenDays = newCalcBetwenDates / (1000 * 3600 * 24);
        return Math.round(newCalcBetwenDays);
    }
    //return Math.round(calcBetwenDays)
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

    const fullHour = `${array_date_time.days}/${array_date_time.months}/${year} - ${array_date_time.hours}:${array_date_time.minutes}:${array_date_time.seconds}`;
    return fullHour;
}

console.log(return_date(birthday))

setInterval(() => {
    div_time.innerHTML += `<label style="display: block;">Today is: <strong>${return_time()}</strong></label>`;
    div_time.innerHTML = `<label style="display: hidden;">Today is: <strong>${return_time()}</strong></label>`;
}, 1000); 

function my_birthday(date){
    if (date != 0) {
        html.innerHTML += `<h1 style="display: block;">Missing ${return_date(birthday)} days for my birthday.</h1>`;
        loader.style.display = "block";
        cake.style.display = "none";
    } else {
        html.innerHTML += `<h1>TODAY IS YOUR BIRTHDAY</h1>`
        cake.style.display = "block";
        loader.style.display = "none";
    }
}

my_birthday(return_date(birthday))