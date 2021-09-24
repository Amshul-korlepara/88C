canvas=new fabric.Canvas("myCanvas");
block_width=40;
block_height=40;
player_y=10;
player_x=10;
playerobject="";
block_object="";
function player_update() {
    fabric.Image.fromURL("player.png", function(img){
        playerobject=img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top:player_y,left:player_x
            
        });
        canvas.add(playerobject);
    } );
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(img){
        block_object=img; 
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,left:player_x
            
        });
        canvas.add(block_object);
    } );
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    console.log(e);
keypress=e.keyCode;
console.log(keypress);
if (e.shiftKey==true && keypress=="80") {
    console.log("P & shift keys are pressed together");
    block_width=block_width+10;
    block_height=block_height+10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;

}

if (e.shiftKey==true && keypress=="77") {
    console.log("M & shift keys are pressed together");
    block_width=block_width-10;
    block_height=block_height-10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;

}

if (keypress=="37") {
    move_left();
    console.log("left key pressed");
}

if (keypress=="38") {
    move_up();
    console.log("up key pressed");
}
if (keypress=="39") {
    move_right();
    console.log("right key pressed");
}
if (keypress=="40") {
    move_down();
    console.log("down key pressed");
}
if (keypress=="82") {
    new_image("roof.jpg");
    console.log("R key pressed");
}
if (keypress=="84") {
    new_image("trunk.jpg");
    console.log("T key pressed");
}
if (keypress=="85") {
    new_image("unique.png");
    console.log("U key pressed");
}
if (keypress=="87") {
    new_image("wall.jpg");
    console.log("W key pressed");
    
}
if (keypress=="89") {
    new_image("yellow_wall.png");
    console.log("y key pressed");
}
if (keypress=="67") {
    new_image("cloud.jpg");
    console.log("C key pressed");
}
if (keypress=="68") {
    new_image("dark_green.png");
    console.log("D key pressed");
}
if (keypress=="71") {
    new_image("ground.png");
    console.log("G key pressed");
}
if (keypress=="76") {
    new_image("light_green.png");
    console.log("L key pressed");
}
}

function move_left(){
        if (player_x>0) {
        player_x-=block_width;
        console.log("new cordinates are x="+player_x +" , y="+player_y);
        canvas.remove(playerobject);
        player_update();
    }
}
function move_right(){
    if (player_x<650) {
    player_x+=block_width;
    console.log("new cordinates are x="+player_x +" , y="+player_y);
    canvas.remove(playerobject);
    player_update();
}
}

function move_up(){
    if (player_y>0) {
    player_y-=block_height;
    console.log("new cordinates are x="+player_x +" , y="+player_y);
    canvas.remove(playerobject);
    player_update();
}
}
function move_down(){
    if (player_y<460) {
    player_y+=block_height;
    console.log("new cordinates are x="+player_x +" , y="+player_y);
    canvas.remove(playerobject);
    player_update();
}
}