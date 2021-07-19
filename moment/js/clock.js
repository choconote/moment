const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours   = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

//setTimeout(sayHello, 5000);

//"hello".padStart(20,"x");
//길이가 20이 되어야하는 
//그렇지 않다면 x로 원하는 길이를 채워라


