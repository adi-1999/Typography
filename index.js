var positionMouse = {
    x: null,
    y: null
}

var radius = 65;

const canvas = document.getElementById("ctxJustice");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
var arr_particles = [];


window.addEventListener('mousemove', 
	function(event){
		positionMouse.x = event.x;
		positionMouse.y = event.y;
});

function particleAnimation(){
    requestAnimationFrame(particleAnimation);
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.fillRect(0, 0, innerWidth,innerHeight);
    for (var i = 0; i < arr_particles.length; i++)
        arr_particles[i].update();
}

function drawImage(){
    
    const data = ctx.getImageData(0, 0, png.width, png.height);
    
    function init(){
        arr_particles = [];
        for (var y = 0; y<data.height; y++) 
            for (var x = 0; x<data.width; x++) 
                if (data.data[(y*4*data.width)+(x*4)+3] > 128) {
                    var color = "rgb("+data.data[(y*4*data.width)+(x*4)]+","+data.data[(y*4*data.width)+(x*4) +1]+","+data.data[(y*4*data.width)+(x*4) +2]+")";
                    arr_particles.push(new particleClass(x*4, y*4, 2, color));
                }
    }
    
    init();
    particleAnimation();

    window.addEventListener('resize',
	function(){
		canvas.width = innerWidth;
		canvas.height = innerHeight;
		init();
	});

}


var png = new Image();
png.src = "justice.png";

window.addEventListener('load', (event) => {
    ctx.drawImage(png, 0, 0);
    drawImage();
});