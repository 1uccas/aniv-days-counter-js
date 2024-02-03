const button = document.querySelector("#button_new_candle");
const fire = document.querySelectorAll(".fuego");

fire.forEach((fire) =>
    button.addEventListener('click', ()=>{
        fire.style.display = "none";
    })
);
fire.forEach((fire) =>
    button.addEventListener('dblclick', ()=>{
        fire.style.display = "block";
    })
);
