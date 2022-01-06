var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["957451fe-f820-4f59-ac52-63c29bb87f0d"],"propsByKey":{"957451fe-f820-4f59-ac52-63c29bb87f0d":{"name":"house","sourceUrl":"assets/api/v1/animation-library/gamelab/9gnAnMn.a_Dr0fbc82MaVi.LIRG.XF8B/category_buildings/beachhouse_03.png","frameSize":{"x":342,"y":333},"frameCount":1,"looping":true,"frameDelay":2,"version":"9gnAnMn.a_Dr0fbc82MaVi.LIRG.XF8B","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":342,"y":333},"rootRelativePath":"assets/api/v1/animation-library/gamelab/9gnAnMn.a_Dr0fbc82MaVi.LIRG.XF8B/category_buildings/beachhouse_03.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var safeZone=createSprite(20, 200, 40, 180);
safeZone.shapeColor='lightGreen';
var endZone=createSprite(369, 200, 65, 180);
endZone.shapeColor='lightBlue';
var cleitinho=createSprite(20, 200, 10, 10);
cleitinho.shapeColor='blue';
var casa=createSprite(375, 190, 1, 1);
casa.setAnimation("house");
casa.scale=0.2;

var gameState='start';
var mortes=0;

var limit1=createSprite(200, 110, 400, 5);
limit1.shapeColor='gray';
var limit2=createSprite(200, 290, 400, 5);
limit2.shapeColor='gray';

var car1=createSprite(100, 120, 10, 10);
car1.shapeColor='red';
var car2=createSprite(156, 279, 10, 10);
car2.shapeColor='red';
var car3=createSprite(227, 119, 10, 10);
car3.shapeColor='red';
var car4=createSprite(301, 279, 10, 10);
car4.shapeColor='red';



car1.velocityY=7;
car2.velocityY=-7;
car3.velocityY=7;
car4.velocityY=-7;

function draw() {
background("white");
createEdgeSprites();

if (gameState=='start'){
stroke('black');
fill('brown');
textSize(20);
text('Tente atravessar a rua',95, 200);

fill('light');
textSize(15);
text('Pressione enter para começar', 95, 220);
if (keyDown("enter")){
gameState='try';
 }
}
if (gameState=='try'){
if (keyDown("left")){
  cleitinho.x=cleitinho.x-2;
}
if (keyDown("right")){
  cleitinho.x=cleitinho.x+2;
}
if (cleitinho.isTouching(car1)|| cleitinho.isTouching(car2)||cleitinho.isTouching(car3)||cleitinho.isTouching(car3)||cleitinho.isTouching(car4)){
cleitinho.x=20;
cleitinho.y=200;
mortes=mortes+1;
}
if (cleitinho.isTouching(endZone)){
gameState='end';
 }
}

stroke("red");
fill("black");
textSize(20);
text("mortes:"+mortes,160, 80);

car1.bounceOff(limit1);
car1.bounceOff(limit2);
car2.bounceOff(limit1);
car2.bounceOff(limit2); 
car3.bounceOff(limit1);
car3.bounceOff(limit2);
car4.bounceOff(limit1);
car4.bounceOff(limit2);

cleitinho.bounceOff(leftEdge);
cleitinho.bounceOff(rightEdge);


if (gameState=='end'){
stroke('red');
fill('green');
textSize(15);
text('Pressione enter para recomeçar', 85, 220);
fill("green");
textSize(20);
text("Cleitinho chegou em casa", 70, 200);
cleitinho.x=377;
cleitinho.y=207;
car1.velocityY=0;
car2.velocityY=0;
car3.velocityY=0;
car4.velocityY=0;
}
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
