// We will create an Event

window.onload = function(){

    let seconds = 0;
    let milliseconds = 0;

    let interval; 

    const addSeconds = document.querySelector(".seconds");
    const addMilliseconds = document.querySelector(".milli");

    const startBtn = document.querySelector(".start");
    const stopBtn = document.querySelector(".stop");
    const resetBtn = document.querySelector(".reset");

    startBtn.onclick = function(){

        clearInterval(interval);
        interval = setInterval(start, 10);

    }

    stopBtn.onclick = function(){
        clearInterval(interval);

    }   

    resetBtn.onclick = function(){
        clearInterval(interval);
        seconds = 0;
        milliseconds = 0;
        addSeconds.innerHTML = "00";
        addMilliseconds.innerHTML = "00";
    }

    function start(){

        milliseconds++;

        if(milliseconds < 10){
            addMilliseconds.innerHTML = "0" + milliseconds;

        }else{
            addMilliseconds.innerHTML = milliseconds;

        }

        //  1 second = 1000 milliseconds

        if(milliseconds > 99){
            seconds++;
            addSeconds.innerHTML = seconds < 10 ? "0" + seconds: seconds;
            milliseconds = 0;
        }

    }

};