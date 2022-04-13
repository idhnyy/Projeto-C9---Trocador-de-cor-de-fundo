
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  // escreva o código para alterar a cor de fundo 
  // para vermelho quando a seta para direita (RIGHT_ARROW) for pressionada
  if(keyIsDown(RIGHT_ARROW)){
    
    background("Red");
  }
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("HotPink");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("Indigo");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("GreenYellow");
  }


  
  drawSprites();
}

