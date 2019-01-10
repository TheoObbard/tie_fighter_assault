function component() {
  let element = document.createElement('canvas');
  element.innerHTML = require('./background.js');

  return element;
}

document.body.appendChild(component());