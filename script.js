TinyTurtle.apply(window, [undefined, 400, 400]);

function square(size){
forward(size);
right(90);
forward(size);
right(90);
forward(size);
right(90);
forward(size);
right(90);
forward(size);
}
function triangle(size){
right(30);
forward(size);
right(120);
forward(size);
right(120);
forward(size);
}
function house(size){
square(size);
triangle(size);
}
function rectangle(sizeLength, sizeWidth){
forward(sizeLength);
right(90);
forward(sizeWidth);
right(90);
forward(sizeLength);
right(90);
forward(sizeWidth);
right(90);
forward(sizeLength); 
}
function pentagon(size){
right(90);
forward(size);
right(72);
forward(size);
right(72);
forward(size);
right(72);
forward(size);
right(72);
forward(size);
}
function hexagon(size){
right(90);
forward(size);
right(60);
forward(size);
right(60);
forward(size);
right(60);
forward(size);
right(60);
forward(size);
right(60);
forward(size);
}
function superShape(size){
square(size);
triangle(size);
right(72);
pentagon(size);
right(60);
hexagon(size);

}
// Type your function call below

superShape(50);
stamp();
