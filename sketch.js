var n = 100;
var x = 30;
var y = 30;
function setup(){
 createCanvas(800,400);
 background(120);
}

function draw(){
   console.log("draw: "+frameCount);
   fill(color(frameCount%255));
while(n >0){
   
   if(n%10 ==0){
      //
      y = y + 50;
      x=50;
   }else{
      x = x+50;

   }
   ellipse(x,y,30,30);

   n = n -1;
}

}