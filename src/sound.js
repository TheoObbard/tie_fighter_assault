class Sound {
  constructor(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
  };

  start(game, vol = 1) {    
    if (game.soundOn) {
      this.sound.volume = vol;
      this.sound.play();
    }
  }

  stop() {
    this.sound.pause();
  }
}

export default Sound;