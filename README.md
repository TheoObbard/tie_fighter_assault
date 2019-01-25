# Live site: https://theoobbard.github.io/tie_fighter_assault/

![tie fighters](https://media.giphy.com/media/BWJm97XSTTA1hnSPlz/giphy.gif)

## Background and overview 

This game is inspired by games like asteroid. It is a simple first person shooter where the targets come in and out of frame. Your goal is not to dodge their shots but to shoot them before you are destroyed.

Users can aim at enemy Tie Fighters my moving the mouse and click to shoot. The game has sound effects which can be toggled on or off. Health will decrease as enemies shoot you, and the sooner you destroy them the longer you will survive.

## Technologies used

This project was built with vanilla JS and HTML canvas. No additional libraries were used.

## Sound

Getting sound to work was fairly easy but I found the design of it interesting so I'm going to do a quick writeup on it here. In this game there are constantly new enemies flying in and shooting/exploding. This means that at any given time there are up to 6 different sounds being rendered. To handle this I implemented a Sound class where I passed in a file on instantiation and then had a play and pause method. It's a very simple implementation but it allowed me to start the flying sound when tie fighters fly in, pause it when they blow up and play the explosion sound, play a sound every time the user shoots, or when the user is shot at. 

```js
class Sound {
  constructor(src) {
    this.sound = document.createElement('audio');
    this.sound.src = src;
    this.sound.setAttribute('preload', 'auto');
    this.sound.setAttribute('controls', 'none');
    this.sound.style.display = 'none';
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
```
