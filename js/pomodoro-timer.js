
var start = document.getElementById('start'); // botão start timer
var pause = document.getElementById('pause'); // botão pause timer
var reset = document.getElementById('reset');

var save = document.getElementById("send") // botão de enviar o tempo 

var bm = 5;
var wm = 25;

var wc = 0;
var bc = 0;

var totaltime_h = 0;
var totaltime_m = 0;
var totaltime_s = 0;

var workMinutes = 0;
var break_Time = false;

var minutes = document.getElementById('pomodoro-minutes');
var seconds = document.getElementById('pomodoro-seconds');

var work_cycles = document.getElementById('cycles-w');
var break_cycles = document.getElementById('cycles-b'); 

var startTimer;

start.addEventListener('click',function(e){
    e.preventDefault();
    setStyleWorktime()

    //if(minutes.textContent != 0){ // Se o tempo for = 0 não vai inciar 
        
        if(startTimer == undefined ){
            startTimer = setInterval (timer,1000);
        }else{
            alert("Pomodoro is already running");
        }
    //}
});

function timer(){
    //Work Timer Countdown
    if(seconds.textContent != 0){
        seconds.textContent--; 
        seconds.textContent = CheckNumberLessThanTen(seconds.textContent);

    } else if(minutes.textContent != 0 && seconds.textContent == 0){
        seconds.textContent = 59;
        minutes.textContent--;
        minutes.textContent = CheckNumberLessThanTen(minutes.textContent);

    }else if (minutes.textContent == 0 && seconds.textContent == 0 ){
        CheckIfBreakTime();
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
    const time_minutes = document.querySelector("#work-minutes");
    minutes.textContent = CheckNumberLessThanTen(time_minutes.value);
    seconds.textContent = "00";
}

save.addEventListener("click",function(e){
    e.preventDefault();

    const time_minutes = document.querySelector("#work-minutes");
    const break_minutes = document.querySelector("#break-minutes");

    minutes.textContent = wm = CheckNumberLessThanTen(time_minutes.value);
    minutes.textContent = wm = CheckNumberBiggerThanNineNine(time_minutes.value)
    bm = CheckNumberLessThanTen(break_minutes.value);
    bm = CheckNumberBiggerThanNineNine(break_minutes.value)

    seconds.textContent = "00";
})

function CheckNumberLessThanTen(number){
    // Adiciona um 0 na frente de numeros menores que 10
    if(number < 10) number = "0" + number;
    if(number == "" || number == "" || number == "0") number = "00";
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
        setStyleBreaktime();
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

function setStyleWorktime(){
    reset.style = "display: none"
    pause.style = "display: flex"
    start.innerHTML ="START"
    start.style = "width: 150px"
}