class particleClass {
    constructor(x, y, particleSize, color){
        this.x = x + canvas.width/2-png.width*2,
        this.y = y + canvas.height/2-png.width*2,
        this.particleSize = particleSize,
        this.color = color,
        this.constX = x + canvas.width/2-png.width*2,
        this.constY = y + canvas.height/2-png.width*2,
        this.density = 8*Math.random() + 4;
    }

    make() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.particleSize, 0, 2*Math.PI);
        ctx.closePath();
        ctx.fill();
    }

    update() {
        ctx.fillStyle = this.color;

        var [deltaX, deltaY] = [positionMouse.x-this.x, positionMouse.y-this.y];
        
        var dist = Math.pow(deltaX*deltaX + deltaY*deltaY, 0.5);
          
        var maxdist = radius;
        
        var force = Math.max(0, 1-dist/maxdist);
        
        var [dirForceX, dirForceY] = [deltaX/dist, deltaY/dist];

        var [dirX, dirY] = [force*dirForceX*this.density, force*dirForceY*this.density];
        
        
        if (dist-this.particleSize<radius){
            this.x=this.x-dirX;
            this.y=this.y-dirY;
        } 
        else {
            if (this.x !== this.constX ) {
                var deltaX=this.x-this.constX;
                var deltaY=this.y-this.constY;
                this.x=this.x-deltaX/15;
            } 
            if (this.y !== this.constY) {
                var deltaX = this.x-this.constX;
                var deltaY = this.y-this.constY;
                this.y=this.y-deltaY/15;
            }
        }

        this.make();
    }
}