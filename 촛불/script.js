let isCandleLit = false;

document.getElementById("toggleButton").addEventListener("click", function() {
    const candleImage = document.getElementById("candleImage");
    const message = document.getElementById("message");
    const fireSound = document.getElementById("fireSound");
    const blowOutSound = document.getElementById("blowOutSound");

    if (!isCandleLit) {
        candleImage.src = "candle_on.png";
        message.textContent = "생일 축하해!";
        fireSound.play();
        this.textContent = "촛불 끄기";
    } else {
        candleImage.src = "candle_off.png";
        message.textContent = "";
        fireSound.pause();  // 촛불 켜는 소리 중지
        fireSound.currentTime = 0;  // 소리 재생 위치를 처음으로 리셋
        blowOutSound.play();
        this.textContent = "촛불 켜기";
    }

    isCandleLit = !isCandleLit;
});
