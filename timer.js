const StartingMinutes = 10;
let time = StartingMinutes * 60;

const countdownEL= document.getElementById('count');
setInterval(updatecount,1000);

function updatecount(){
    const Mins=Math.floor(time/60);
    let secs=time % 60;
    secs = secs < 10 ? '0'+ secs : secs;
    countdownEL.innerHTML=`${Mins}:${secs}`;
    time--;
}