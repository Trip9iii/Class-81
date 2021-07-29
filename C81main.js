canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");
color = "red";
context.beginPath()
context.strokeStyle = color;
context.lineWidth = 2;
context.arc(400,400,100,0,2 * Math.PI);
context.stroke();

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value;
    console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y = " + mouse_y);
    circle(mouse_x , mouse_y);
}
function circle(mouse_x , mouse_y)
{
    context.beginPath()
    context.strokeStyle = color;
    context.lineWidth = 2;
    context.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
    context.stroke();
}
function no(){
context.clearRect(0,0,canvas.width,canvas.height);
}