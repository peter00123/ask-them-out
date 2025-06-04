const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const partyOverlay = document.getElementById('partyOverlay');
let yesScale = 1;

noBtn.addEventListener('click', () => {
    yesScale *= 1.3;
    yesBtn.style.transform = `scale(${yesScale})`;
});

yesBtn.addEventListener('click', () => {
    showParty();
});

function showParty() {
    partyOverlay.style.display = 'flex';
    partyOverlay.className = 'party-overlay';
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        const colors = ['#38bdf8','#fbbf24','#f87171','#a3e635','#f472b6','#facc15','#818cf8','#34d399'];
        confetti.style.background = colors[Math.floor(Math.random()*colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-40px';
        confetti.style.transform = `rotate(${Math.random()*360}deg)`;
        partyOverlay.appendChild(confetti);

        // Animate confetti
        const endY = window.innerHeight + 100;
        const duration = 1200 + Math.random()*1000;
        setTimeout(() => {
            confetti.animate([
                { transform: confetti.style.transform, top: '-40px', opacity: 1 },
                { transform: `rotate(${Math.random()*720}deg)`, top: endY+'px', opacity: 0.7 }
            ], {
                duration: duration,
                easing: 'cubic-bezier(.4,2,.6,1)',
                fill: 'forwards'
            });
        }, 10);
        setTimeout(() => confetti.remove(), duration + 500);
    }
    setTimeout(() => {
        partyOverlay.style.display = 'none';
        partyOverlay.innerHTML = '';
        yesBtn.style.transform = '';
        yesScale = 1;
    }, 2500);
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById("yesBtn").addEventListener("click", async function () {
    document.getElementById("customPopup").style.display = "block";

    // Wait 2 seconds
    await sleep(2000);

    // Redirect to form.html
    window.location.href = "form.html";
});

document.getElementById("closePopup").addEventListener("click", function () {
    document.getElementById("customPopup").style.display = "none";
});
