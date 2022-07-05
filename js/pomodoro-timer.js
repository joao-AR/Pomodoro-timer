
var start = document.getElementById('start') // botão start timer
var pause = document.getElementById('pause') // botão pause timer

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var startTimer;

start.addEventListener('click',function(e){
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

pause.addEventListener('click', function(){
    pauseInterval()
    startTimer = undefined;
})

function pauseInterval(){
    clearInterval(startTimer);
}
const save = document.querySelector("#send") // botão de enviar o tempo 

save.addEventListener("click",function(e){
    e.preventDefault();

    const time_minutes = document.querySelector("#time-minutes");
    const time_seconds = document.querySelector("#time-seconds");
    ws.textContent = time_seconds.value;
    wm.textContent = time_minutes.value;

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


/*
var user_time = 0;
var save_time = 0;
var pomodoro;


function timer(duration,display){

    var timer = duration,minutes,seconds;
    
        pomodoro = setInterval(function(){
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        display.textContent = minutes + ":" + seconds;

        --timer;
        
    },1000);
}

function start(){
    var duration = user_time;
    var display = document.querySelector("#timer");
    timer(duration,display)
}

const btn = document.querySelector("#send") // botão de enviar o tempo 

btn.addEventListener("click",function(e){
    e.preventDefault();

    const time_minutes = document.querySelector("#time-minutes");
    const time_seconds = document.querySelector("#time-seconds");

    var minute_user = time_minutes.value * 60;
    user_time = parseInt(minute_user) + parseInt(time_seconds.value);
    console.log(user_time);

})

function pause(){
    clearInterval(pomodoro);
    console.log(save_time);

}*/