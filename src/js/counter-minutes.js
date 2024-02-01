const html = document.querySelector(".class-h1");

const birthday = "2024-10-01";
//let calc = minutes - 

function return_date(){
    const date = new Date();
    const year = date.getFullYear();
    const mounth = date.getMonth();
    const day = date.getDate();

    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const fullHour = `${hour}:${minutes}:${seconds}`
    
    const fulldate = `${year}-${mounth+1}-${day} ${fullHour}`;

    return fulldate;
}
setInterval(() => {
    html.innerHTML += `<h1 style="display: block;">Faltam ${return_date()} para o seu aniversário.</h1>`;
    html.innerHTML = `<h1 style="display: hidden;">Faltam ${return_date()} para o seu aniversário.</h1>`;
}, 1000); 



