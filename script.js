var timer = 15;
var clickednum = 0;
var hitNum = 0;
var score = 0;

function getNewScore() {
    score += 10;
    document.querySelector("#scoreBoard").textContent = score;
}

function getNewHit() {
    hitNum = Math.floor(Math.random() * 10);
    document.querySelector("#hitfit").textContent = hitNum;
}

function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 120; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    var timeint = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timeval").textContent = timer;
        }
        else {
            clearInterval(timeint);
            document.querySelector("#pbtm").innerHTML = "";
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER! your score was ${score}</h1>`;
        }
    }, 1000);
}

function addTime() {
    timer += 2;
    document.querySelector("#timeval").textContent = timer;
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
    clickednum = (Number(details.target.textContent));
    if (clickednum === hitNum) {
        getNewScore();
        makeBubble();
        getNewHit();
        addTime();

    }

})





getNewHit();
runTimer();
makeBubble();