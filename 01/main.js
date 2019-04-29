window.addEventListener("load", function(event) {

  "use strict"

  var render = function() {

    display.renderColor(game.color);
    display.render();

  };

  var update = function() {

    game.update();

  };


// OBJECTS

  /* controller is for user input */
  var controller = new Controller();
  /* display is for window resize on screen canvas */
  var display    = new Display(document.querySelector("canvas"));
  /* game logic */
  var game       = new Game();
  /* engine for interaction(controller, display, and game logic) */
  var engine     = new Engine(1000/30, render, update);

// initialize

  window.addEventListener("resize",  display.handleResize);
  window.addEventListener("keydown", controller.handleKeyDownUp);
  window.addEventListener("keyup",   controller.handleKeyDownUp);

  display.resize();
  engine.start();

});
