# Live site: https://theoobbard.github.io/tie_fighter_assault/

## Background and overview 

This game is inspired by games like asteroid. It is a simple first person shooter where the targets come in and out of frame. Your goal is not to dodge their shots but to shoot them before you are destroyed.

Users can aim at enemy Tie Fighters my moving the mouse and click to shoot. The game has sound effects which can be toggled on or off. Health will decrease as enemies shoot you, and the sooner you destroy them the longer you will survive.


## Functionality and MVP Features 

- [ ] Background rotates and tie fighters fly in and out of screen.

- [ ] Players sight can be moved around and fire lasers. Lasers kill tie fighters.

- [ ] Tie fighters shoot at you and you acquire damage. 

- [ ] Sound effects are added to shooting, exploding, and tie fighter flying. 

- [ ] Difficulty increases the longer you survive.

## Architecture and technologies 

To render the graphics to the page I'll use canvas. The game will be simply build with a series of classes which will have a set of rules. There will be a tie fighters class which will randomly choose an entry and exit point on the screen. They will then maneuver in a straight line across the window. As they pass through the users view their size will increase as will the rate at which they fire at you. 

## Implementation Timeline

  ** Day 1 **
   - [ ] Review canvas and get page rendering with slow rotating background.
   - [ ] Start writing tie fighter class.
   
   ** Day 2 ** 
   - [ ] Get tie fighters flying across the screen and shooting. 
   - [ ] Get user damage level to rise when hit. 
   
   ** Day 3 ** 
   - [ ] Implement sight and have it be moveable across the screen. 
   - [ ] Have clicking destroy tie fighters. 
   - [ ] Have tie fighters explode when shot.
   
   ** Day 4 ** 
   - [ ] Add sound effects and additional visual improvements. 
   
   ** Day 5 ** 
   - [ ] Cleanup and push to heroku/github pages.
