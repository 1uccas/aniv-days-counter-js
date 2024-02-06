//Defining variables
const button = document.querySelector("#button_new_candle");
const fire = document.querySelectorAll(".fuego");

//Crossing array of divs - fire
fire.forEach((fire) =>
    //Firing click event
    button.addEventListener('click', ()=>{
        //(Blowing out the candle) - making all (fire) classes invisible
        fire.style.display = "none";
    })
);

//When a double click occurs there is a small "delay" in the appearance of the fire
//(Lighting the candle) - making all (fire) classes visible
fire.forEach((fire) =>
    //Firing double click event
    button.addEventListener('dblclick', ()=>{
        fire.style.display = "block";
    })
);