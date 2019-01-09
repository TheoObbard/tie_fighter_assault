# Project proposal - Star Wars Game

![Imgur](https://i.imgur.com/zJNUxT6.png)

## Background and overview 

This game is inspired by games like asteroid. It will be a simple first person shooter where the targets come in and out of frame. As you survive longer, more enemies will appear and will move/shoot at you faster. Your goal is not to dodge their shots but to shoot them before you are destroyed. It's a basic survival game. 

Users will be able to shoot enemies by using 'WASD' and the space bar to move the sight across the screen. The background will be an image of space and will slowly rotate/change direction to add movement to the game. I'll keep track of the damage that a user recieves and that will be displayed to the user via a damage bar. Damage will slowly decrease as time goes by so theoretically you can last quite a while. As you survive longer the tie fighters will become more aggressive (move faster and shoot more often).

The tie fighter will be destroyable and when hit with a lazer they will explode which will use some kind of animation. I'll write tie fighters to never miss you but they won't do much damage when they're far away and they will start off moving slowly. The game will have running background music with a mute button. Tie fighters may also make some noise when they fly by or shoot/explode. A users shots will also make noise. 

## Functionality and MVP Features 

- [ ] Background rotates and tie fighters fly in and out of screen.

- [ ] Players sight can be moved around and fire lasers. Lasers kill tie fighters.

- [ ] Tie fighters shoot at you and you acquire damage. 

- [ ] Sound effects are added to shooting, exploding, and tie fighter flying. 

- [ ] Difficulty increases the longer you survive.

## Architecture and technologies 

To render the graphics to the page I'll use canvas. The game will be simply build with a series of classes which will have a set of rules. There will be a tie fighters class which will randomly choose an entry and exit point on the screen. They will then maneuver in a straight line across the window. As they pass through the users view their size will increase as will the rate at which they fire at you. 
