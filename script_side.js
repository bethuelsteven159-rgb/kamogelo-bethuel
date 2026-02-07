const ValentineButtonClose = document.getElementById("ValentineButtonClose");
const ValentineButtonNo = document.getElementById("ValentineButtonNo");
const ValentineButtonYes = document.getElementById("ValentineButtonYes");
const showVali = document.getElementById("showVali");
const ValentinePopUpContainer = document.getElementById("ValentinePopUpContainer");
const ValentineNoticeContainer = document.getElementById("ValentineNoticeContainer");
const ValentineInfoContainer = document.getElementById("WDDVContainer");
let noClicks =0;

function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.top = '20px';
    toast.style.right = '20px';
    toast.style.padding = '10px 20px';
    toast.style.background = 'white';
    toast.style.color = 'black';
    toast.style.borderRadius = '5px';
    toast.style.zIndex = '1000';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 6000);
}
function launchConfetti() {
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      ["#ff4d6d", "#f10f3d", "#ffd6e0"][Math.floor(Math.random() * 3)];
    confetti.style.animationDuration = Math.random() * 2 + 2 + "s";

    confettiContainer.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}
function addValentineEvent() {
  if (document.getElementById("valentineEvent")) return;

  const li = document.createElement("li");
  li.id = "valentineEvent";
  li.innerHTML = `
    💘 Valentine Digital Dome – Wits-click to learn more 
    <div id="countdown"></div>
  `;
  li.addEventListener('mouseover', () => {
    li.style.textDecoration = 'underline';
  });
  li.addEventListener('mouseout', () => {
    li.style.textDecoration = 'none';
  });
  li.addEventListener("click", () => {
     ValentineInfoContainer.classList.add("show");
  });
  upcomingList.appendChild(li);
  startCountdown();
}
function startCountdown() {
  const targetDate = new Date("2026-02-14T14:00:00"); // change if needed
  const countdownEl = document.getElementById("countdown");

  setInterval(() => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      countdownEl.textContent = "💖 Today is the day 💖";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    countdownEl.textContent =
      `${days} days, ${hours} hrs, ${minutes} mins remaining`;
  }, 1000);
}

showVali.addEventListener("click", () => {
    ValentinePopUpContainer.classList.add("show");
    n=0;
    ValentineButtonNo.style.opacity="1";ValentineButtonNo.style.pointerEvents= "auto";

    ValentineButtonNo.style.padding = "1rem";
    ValentineButtonNo.style.fontSize = "1.5rem";
    ValentineButtonNo.style.fontWeight="bolder";
    ValentineButtonNo.style.color="#f0e9eb";
    ValentineButtonNo.textContent="NO😭";

    ValentineButtonYes.style.padding = "1rem";
    ValentineButtonYes.style.fontSize = "1.5rem";
    ValentineButtonYes.style.fontWeight="bolder";
    ValentineButtonYes.style.color="#f0e9eb";
    ValentineButtonYes.textContent="YES😍";

    ValentineButtonClose.style.padding = "1rem";
    ValentineButtonClose.style.fontSize = "1.5rem";
    ValentineButtonClose.style.fontWeight="bolder";
    ValentineButtonClose.style.color="#0f0206";
    ValentineButtonClose.textContent="CLOSE";
    
});

ValentineButtonClose.addEventListener("click", () => {
    ValentinePopUpContainer.classList.remove("show");
    ValentineButtonNo.style.opacity="1";ValentineButtonNo.style.pointerEvents= "auto";
});

ValentineButtonNo.addEventListener("click", () => {
    if(n==0 ){
        n=1;
        ValentineButtonYes.style.padding = "2.5rem";
        ValentineButtonNo.style.marginLeft = "0rem";
        ValentineButtonNo.textContent="You sure?😢";
        ValentineButtonNo.style.padding = "0.8rem";
        ValentineButtonNo.style.fontSize = "1rem";
        ValentineButtonNo.style.fontWeight="lighter";
        ValentineButtonClose.style.marginLeft = "0rem";
        ValentineButtonClose.style.padding = "1.5rem";
        ValentineButtonClose.textContent="I'll DECIDE LATER";

    }else if(n==1){
        n=2;
        ValentineButtonYes.style.padding = "3.5rem";
        ValentineButtonYes.textContent="YES😍🥺";
        ValentineButtonNo.textContent="You sure?😢";
        ValentineButtonNo.style.padding = "0.5rem";
        ValentineButtonNo.style.fontSize = "0.5rem";
        ValentineButtonClose.style.padding = "2.5rem";
    }else {
        ValentineButtonNo.textContent="";
        ValentineButtonNo.style.padding = "0.01rem";
        ValentineButtonNo.style.opacity="0";
        ValentineButtonNo.style.pointerEvents= "none";
        ValentineButtonYes.textContent="YES BABY😍🥺🥺🥺";
        ValentineButtonYes.style.padding = "1.5rem";
        ValentineButtonClose.style.padding = "0.01rem";
        ValentineButtonClose.textContent="";
        ValentineButtonClose.style.opacity="0";
        ValentineButtonClose.style.pointerEvents= "none";
        showToast('ooopsie!😂😂 THE NO BUTTON WAS SQUEEZED TO DEATH AND IS NO LONGER AVAILABLE !CLOSE BUTTON WENT TO BUTY HIM. I GUESS THERE IS ONLY 1 OPTION REMAINING 😢😢LOL NEO NAGANA GORE I WILL TAKE NO FOR AN ANSWER🤣🤣🤣🤣TICK YES AND SEE THE MAGIC BABY!😘😘😘😘😘💕💕');
    }
});

const celebration = document.getElementById("CelebrationContainer");
const celebrationClose = document.getElementById("celebrationClose");
const upcomingList = document.getElementById("upcomingEventsList");
const confettiContainer = document.getElementById("confettiContainer");

ValentineButtonYes.addEventListener("click", () => {
  ValentinePopUpContainer.classList.remove("show");
  ValentineNoticeContainer.style.opacity="0";ValentineNoticeContainer.style.pointerEvents= "none";
  celebration.classList.add("show");
  launchConfetti();
  addValentineEvent();
});



celebrationClose.addEventListener("click", () => {
  celebration.classList.remove("show");
});

const CloseValentineInfo = document.getElementById("ButtonCloseValentineInfo");

CloseValentineInfo.addEventListener("click", () => {
  ValentineInfoContainer.classList.remove("show");
});