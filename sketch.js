var canvas, backgroundImage;

var gamestate = 0;
var playercount;
var allPlayers;
var distance = 0;
var database;
var car1 , car2;
var cars ;

var form, player, game;
var trackIMG,car1IMG,car2IMG,ground ;
function preload () {
trackIMG=loadImage("track.jpg")
car1IMG=loadImage("car5.jpeg")
car2IMG=loadImage("car6.jpeg")
ground=loadImage("ground.png")
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playercount === 2){
    game.update(1);
  }
  if(gamestate === 1){
    clear();
    game.play();
  }
}
