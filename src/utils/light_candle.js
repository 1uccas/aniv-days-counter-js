const button = document.querySelector("#button_new_candle");
const fire = document.querySelectorAll(".fuego");

fire.forEach((fire) =>
    button.addEventListener('click', ()=>{
        fire.style.display = "none";
    })
);
//When a double click occurs there is a small "delay" in the appearance of the fire
fire.forEach((fire) =>
    button.addEventListener('dblclick', ()=>{
        fire.style.display = "block";
    })
);