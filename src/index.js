import Game from './game';
import Background from './background';
import Sound from './sound';

// document.getElementsByTagName('BODY').style.visibility = 'hidden';

document.addEventListener('DOMContentLoaded', () => {
  // document.getElementsByTagName('BODY').style.visibility = 'visible';
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let game;
  const bg = new Background(canvas, ctx)
  const splashBackground = setInterval(bg.draw, 40);
  document.getElementById('quit_game').style.visibility = 'hidden';
  document.getElementById('play_btn_txt').innerHTML = 'Play'
  document.getElementById('title_txt').innerHTML = 'Tie Fighter Assault'
  document.getElementById('instructions').innerHTML = 
        `Defend the galaxy from Darth Vader's tie fighters. <br>
         Move your mouse to aim and click to shoot. <br> 
         May the force be with you.`
  let music = new Sound('./sounds/The_Asteroid_Field.mp3');

  document.getElementById('play_btn').addEventListener('click', () => {   
    if (game) {
      game.clearGame() 
      game.over = true;  
      music.stop()
    }    
    document.getElementById('splash').style.visibility = 'hidden';
    document.getElementById('quit_game').style.visibility = 'visible';
    clearInterval(splashBackground)
    game = new Game(bg, music)
    game.play()
    document.getElementById('quit_game').addEventListener('click', () => {
      game.endGame()
      document.getElementById('play_btn_txt').innerHTML = 'Play Again'
      document.getElementById('title_txt').innerHTML = 'Tie Fighter Assault'
      document.getElementById('instructions').innerHTML =
        `It's okay, galactic battle isn't for everyone.`
    })
  })
});