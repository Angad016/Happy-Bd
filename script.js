let rotation = 0;

function rotateCube(angle) {
    rotation += angle;
    document.getElementById('cube').style.transform = `rotateY(${rotation}deg)`;
}

function enterMainPage() {
    document.getElementById('landing').style.display = 'none';
    document.getElementById('main').style.display = 'block';

    let song = document.getElementById("birthdaySong");

    // Try autoplay
    song.play().catch(() => {
        // If autoplay blocked, show button
        document.getElementById("playMusicBtn").style.display = "block";
    });
}

// Manual play
document.getElementById("playMusicBtn").addEventListener("click", function () {
    document.getElementById("birthdaySong").play();
    this.innerText = "🎵 Playing...";
    this.disabled = true;
});
