const sec = document.querySelector(".s");
const min = document.querySelector(".m");
const hour = document.querySelector(".h");
const numHour = document.querySelector(".hours");
const numMin = document.querySelector(".minutes");
const tabsItem = document.querySelectorAll(".tabsItem");
const tabsContentItem = document.querySelectorAll(".tabsContentItem");

tabsItem.forEach((el, i) => {
  el.addEventListener("click", () => {
    tabsItem.forEach((item, ind) => {
      item.classList.remove("active");
      tabsContentItem[ind].classList.remove("active");
    });
    el.classList.add("active");
    tabsContentItem[i].classList.add("active");
  });
});

let i = 360;

function start() {
  const time = new Date(); // new создаем экземпляр класса Date - для работы с веременем и датой
  let seconds = time.getSeconds() * 6;
  let minutes = time.getMinutes() * 6;
  let hours = time.getHours() * 30;

  if (seconds == 0 || i > 360) {
    sec.style.transform = `rotate(${i}deg)`;
    i += 6;
  } else {
    sec.style.transform = `rotate(${seconds}deg)`;
  }

  sec.style.transition = `1s linear`;
  min.style.transform = `rotate(${minutes}deg)`;
  hour.style.transform = `rotate(${hours}deg)`;

  numMin.innerHTML =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  numHour.innerHTML =
    time.getHours() < 10 ? "0" + time.getHours() : time.getHours();

  setTimeout(() => {
    start();
  }, 1000);
}

start();

// Секундомер //

const stopWatchHours = document.querySelector(".stopwatch__hours");
const stopWatchsMins = document.querySelector(".stopwatch__minutes");
const stopWatchsSecond = document.querySelector(".stopwatch__seconds");
const stopWatchBtn = document.querySelector(".stopwatch__btn");
const tabsLinkSpan = document.querySelector(".tabsLink__span");

stopWatchBtn.addEventListener("click", () => {
  if (stopWatchBtn.innerHTML === "start") {
    stopWatchBtn.innerHTML = "stop";
    tabsLinkSpan.classList.add("active");
  } else if (stopWatchBtn.innerHTML === "stop") {
    stopWatchBtn.innerHTML = "clear";
    tabsLinkSpan.classList.remove("active");
    tabsLinkSpan.classList.add("active_clear");
  } else {
    stopWatchBtn.innerHTML = "start";
    tabsLinkSpan.classList.remove("active_clear");
    stopWatchsSecond.innerHTML = stopWatchsMins.innerHTML = stopWatchHours.innerHTML = 0
  }
});
let second = 0
function stopWatch(stopWatchBtn) {
  if (stopWatchBtn.innerHTML === "stop"){
    if(stopWatchsSecond.innerHTML == 59) {
      stopWatchsSecond.innerHTML = 0
      if (stopWatchsMins.innerHTML == 59) {
        stopWatchsMins.innerHTML = 0
        if (stopWatchHours.innerHTML == 59){
          stopWatchHours.innerHTML = 0
        } 
        else{
          stopWatchHours.innerHTML++
        }
      }
      else {
        stopWatchsMins.innerHTML++
      }
    }
    else{
      stopWatchsSecond.innerHTML++
    }
  }
  
  setTimeout( ()=> stopWatch(stopWatchBtn), 1000);
}
stopWatch(stopWatchBtn)




