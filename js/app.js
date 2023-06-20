document.addEventListener("mousemove", (e) => {
  Object.assign(document.documentElement, {
    style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * 0.01}deg;
		`,
  });
});

document.getElementById("audio-control").addEventListener("click", function () {
  var audio = document.getElementById("bg-music");

  if (audio.paused) {
    audio.play();
    this.textContent = "Pause Music";
  } else {
    audio.pause();
    this.textContent = "Play Music";
  }
});
