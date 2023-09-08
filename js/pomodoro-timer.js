
var start = document.getElementById('start'); // botão start timer
var pause = document.getElementById('pause'); // botão pause timer
var reset = document.getElementById('reset');

var save = document.getElementById("send") // botão de enviar o tempo 

var totaltime_h = document.getElementById('tth');
var totaltime_m = document.getElementById('ttm');
var totaltime_s = document.getElementById('tts');

var bm = 5;
var wm = 25;

var wc = 0;
var bc = 0;


var workMinutes = 0;
var break_Time = false;

var minutes = document.getElementById('pomodoro-minutes');
var seconds = document.getElementById('pomodoro-seconds');

var work_cycles = document.getElementById('cycles-w');
var break_cycles = document.getElementById('cycles-b'); 

var startTimer;
let audio =  document.getElementById("audioAlert")

start.addEventListener('click',function(e){
    e.preventDefault();
    if(minutes.textContent != 0){ // Se o tempo for = 0 não vai inciar 
        
        if(startTimer == undefined ){
            startTimer = setInterval (timer,1000);
        }else{
            alert("Pomodoro is already running");
        }
    }
});

function timer(){
    //Work Timer Countdown
    if(!break_Time){ // Não adicionar ao tempo total o tempo de descanso 
        totalTimer();
    }
    if (minutes.textContent == 0 && (seconds.textContent - 1)  == 0 ){
        audio.play()
        CheckIfBreakTime();
    }else if(seconds.textContent != 0){
        seconds.textContent--; 
        seconds.textContent = CheckNumberLessThanTen(seconds.textContent);

    } else if(minutes.textContent != 0 && seconds.textContent == 0){
        seconds.textContent = 59;
        minutes.textContent--;
        minutes.textContent = CheckNumberLessThanTen(minutes.textContent);

    } 
}

function totalTimer(){
    
    if(totaltime_s.textContent < 59){
        totaltime_s.textContent++;
        totaltime_s.textContent = CheckNumberLessThanTen(totaltime_s.textContent) ;
    
    }else{
        if(totaltime_m.textContent < 59){
            totaltime_m.textContent++;
            totaltime_m.textContent = CheckNumberLessThanTen(totaltime_m.textContent)
            totaltime_s.textContent = "00";
        }else{
            totaltime_h.textContent++;
            totaltime_h.textContent =  CheckNumberLessThanTen(totaltime_h.textContent)
            totaltime_m.textContent = "00"; 
            totaltime_s.textContent = "00";
        }
        
    }
}

// Pausa o timer
pause.addEventListener('click', function(){

    setTimeout(() => {
        pause.style = "display: none"
        reset.style = "display: flex"
        pauseInterval()
        startTimer = undefined;
        
    },400);
})

function pauseInterval(){
    clearInterval(startTimer);
}

// Resetar o tempo do timer

reset.addEventListener('click', function(){

    setTimeout(() => {
        reset.style = "display: none"
        pause.style = "display: flex"
        restInterval();
        startTimer = undefined;
    },400);
})

function restInterval(){
    clearInterval(startTimer);
    const time_minutes = document.querySelector("#work-minutes");
    minutes.textContent = CheckNumberLessThanTen(time_minutes.value);
    seconds.textContent = "00";
}

save.addEventListener("click",function(e){
    e.preventDefault();

    const time_minutes = document.querySelector("#work-minutes");
    const break_minutes = document.querySelector("#break-minutes");

    minutes.textContent = wm = CheckNumberBiggerThanNineNine(time_minutes.value)
    minutes.textContent = wm = CheckNumberLessThanTen(time_minutes.value);

    bm = CheckNumberBiggerThanNineNine(break_minutes.value)
    bm = CheckNumberLessThanTen(break_minutes.value);

    seconds.textContent = "00";
})

function CheckNumberLessThanTen(number){
    // Adiciona um 0 na frente de numeros menores que 10
    if(number < 10) number = "0" + number;
    if(number == "" ||  number == "0") number = "00";
    return number;
}

function CheckNumberBiggerThanNineNine(number){
    if(number > 99){
        number = 99
        window.alert("Max minutes value is 99 ");
    }
    return number;
}

function CheckIfBreakTime(){
    if(break_Time == false){ // Hora do intervalo 
        setBreakTime();
        //setStyleBreaktime();
    }else{// Hora do trabalho
        setWorkTime()
    }
}

function setBreakTime(){
    clearInterval(startTimer);
    break_Time = true;
    
    wc = wc + 1;
    work_cycles.textContent = "1";
    
    minutes.textContent = bm;
    seconds.textContent = "00";
    startTimer = undefined;
}

function setStyleBreaktime(){
    reset.style = "display: none"
    pause.style = "display: none"
    start.innerHTML ="START BREAK"
    start.style = "width: 300px"
}

function setWorkTime(){
    clearInterval(startTimer);
    break_Time = false;
    bc = bc + 1;
    break_cycles.textContent = bc;
    minutes.textContent = wm;
    seconds.textContent = "00";
    startTimer = undefined;
}

