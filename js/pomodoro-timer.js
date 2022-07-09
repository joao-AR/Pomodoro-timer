
var start = document.getElementById('start') // botão start timer
var pause = document.getElementById('pause') // botão pause timer
var reset = document.getElementById('reset')

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var startTimer;

start.addEventListener('click',function(e){
    reset.style = "display: none"
    pause.style = "display: flex"
    e.preventDefault();
    if(startTimer == undefined ){
        startTimer = setInterval (timer,1000);
    }else{
        alert("Timer is already running");
    }
});

function timer(){
    //Work Timer Countdown
    if(ws.textContent != 0){
        
        ws.textContent--; 
        
        if(ws.textContent < 10){
            ws.textContent =  "0" + ws.textContent
        }
    
        
    } else if(wm.textContent != 0 && ws.textContent == 0){
        ws.textContent = 59;
        wm.textContent--;
        if(wm.textContent < 10){
            wm.textContent =  "0" + wm.textContent
        }
    }
}

// Pausa o timer
pause.addEventListener('click', function(){
    pause.style = "display: none"
    reset.style = "display: block"
    pauseInterval()
    startTimer = undefined;
})

function pauseInterval(){
    clearInterval(startTimer);
}

// resetar o tempo do timer

reset.addEventListener('click', function(){
    reset.style = "display: none"
    pause.style = "display: flex"
    restInterval();
    startTimer = undefined;
})

function restInterval(){
    clearInterval(startTimer);
    const time_minutes = document.querySelector("#time-minutes");
    const time_seconds = document.querySelector("#time-seconds");
    wm.textContent = time_minutes.value;
    ws.textContent = time_seconds.value;
    
    // Adiciona um 0 na frente de numeros menores que 10
    if(ws.textContent < 10){
        ws.textContent =  "0" + ws.textContent
    }

    if(wm.textContent < 10){
        wm.textContent =  "0" + wm.textContent
    }

    if(ws.textContent == "" ||ws.textContent == " " || ws.textContent == "0"){
        ws.textContent =  "00"
    }
    if(wm.textContent == "" ||wm.textContent == " " || wm.textContent == "0"){
        wm.textContent =  "00"
    }

    
}


const save = document.querySelector("#send") // botão de enviar o tempo 

save.addEventListener("click",function(e){
    e.preventDefault();

    const time_minutes = document.querySelector("#time-minutes");
    const time_seconds = document.querySelector("#time-seconds");
    console.log(time_minutes)
    if(time_minutes.value > 99){ // limite maximo de tempo em minutos = 99
        time_minutes.value = 99;
        window.alert("Max minutes value is 99 ");

    }else{
        wm.textContent = time_minutes.value;
    }

    if(time_seconds.value > 59){ // limite maximo de tempo em segundos = 59
        time_seconds.value = 59;
        window.alert("Max Secods value is 99 ");

    }else{
        ws.textContent = time_seconds.value;
    }
    

    // Adiciona um 0 na frente de numeros menores que 10
    if(ws.textContent < 10){
        ws.textContent =  "0" + ws.textContent
    }

    if(wm.textContent < 10){
        wm.textContent =  "0" + wm.textContent
    }

    if(ws.textContent == "" ||ws.textContent == " " || ws.textContent == "0"){
        ws.textContent =  "00"
    }
    if(wm.textContent == "" ||wm.textContent == " " || wm.textContent == "0"){
        wm.textContent =  "00"
    }
    

})