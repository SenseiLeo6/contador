
let countDownDate = new Date("Aug 28, 2024 20:30:00").getTime();


let countdownfunction = setInterval(function() {

  
    let now = new Date().getTime();

 
    let distance = countDownDate - now;

    let dias = Math.floor(distance / (1000 * 60 * 60 * 24));
    let horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((distance % (1000 * 60)) / 1000);

   
    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

    
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.querySelector(".countdown").innerHTML = "LAUNCHED";
    }
}, 1000);