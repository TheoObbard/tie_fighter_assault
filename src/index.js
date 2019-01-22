import Game from './game';
import Background from './background';

document.addEventListener('DOMContentLoaded', () => {
  let game;
  const bg = new Background()
  const splashBackground = setInterval(bg.draw, 40);
  document.getElementById('quit_game').style.visibility = 'hidden';
  document.getElementById('play_btn_txt').innerHTML = 'Play'
  document.getElementById('title_txt').innerHTML = 'Tie Fighter Assault'
  document.getElementById('instructions').innerHTML = 
        `Defend the galaxy from Darth Vader's tie fighters. <br>
         Move your mouse to aim and click to shoot. <br> 
         May the force be with you.`

  document.getElementById('play_btn').addEventListener('click', () => {   
    if (game) {
      game.clearGame()
    }  
    document.getElementById('splash').style.visibility = 'hidden';
    document.getElementById('quit_game').style.visibility = 'visible';
    clearInterval(splashBackground)
    game = new Game(bg)
    game.play()
    document.getElementById('quit_game').addEventListener('click', () => {
      // game.clearGame()
      game.endGame()
      game.clearSound()
      document.getElementById('play_btn_txt').innerHTML = 'Play'
      document.getElementById('title_txt').innerHTML = 'Tie Fighter Assault'
      document.getElementById('instructions').innerHTML =
        `It's okay, galactic battle isn't for everyone.`
    })
  })
});