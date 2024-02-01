const html = document.querySelector(".class-h1");

const date = new Date();
const year = date.getFullYear();
const birthday = new Date(`${year}-10-01`).getTime();

function return_date(birthday){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const fullDate = `${year}-${month}-${day}`;

    const calcBetwenDates = (new Date(fullDate).getTime() - new Date(birthday).getTime())*-1;
    const calcBetwenDays = calcBetwenDates / (1000 * 3600 * 24); //Return Days

    return Math.round(calcBetwenDays);
}
function return_time(){
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const fullHour = `${hour}:${minutes}:${seconds}`
    return fullHour;
}

console.log(return_date(birthday))

setInterval(() => {
    html.innerHTML += `<h1 style="display: block;">Missing ${return_date(birthday)} days for my birthday.</h1>`;
    html.innerHTML = `<h1 style="display: hidden;">Missing ${return_date(birthday)} days for my birthday.</h1>`;
}, 1000); 



