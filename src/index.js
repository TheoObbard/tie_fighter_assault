import Game from './game';
import Background from './background';

document.addEventListener('DOMContentLoaded', () => {
  let game;
  const bg = new Background()
  const splashBackground = setInterval(bg.draw, 40);
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
    clearInterval(splashBackground)
    game = new Game(bg)
    game.play()
  })
});