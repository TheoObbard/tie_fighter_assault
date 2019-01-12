import Game from './game';
import Background from './background';

document.addEventListener('DOMContentLoaded', () => {
  const bg = new Background()
  const splashBackground = setInterval(bg.draw, 40);
  let game;
  document.getElementById('play_btn_txt').innerHTML = 'Play'
  document.getElementById('title_txt').innerHTML = 'Tie Fighter Assault'

  document.getElementById('play_btn').addEventListener('click', (evt) => {   
    if (game) {
      game.clearGame()
    }
    document.getElementById('splash').style.visibility = 'hidden';
    clearInterval(splashBackground)
    game = new Game(bg)
    game.play()
  })
});