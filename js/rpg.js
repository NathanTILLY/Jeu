var smiley = new Image();
smiley.src = "https://lh3.googleusercontent.com/proxy/fKTxx0zSOF3TkoFUVT8B_dj5_EycubwL1KVkZ9CIxGC9iPqPiseIVSs49ckyRicKmQvRAn58SWYREDGnRO7Jc0sY1YFpdnMhYhXQPc87hNdlHCag";

window.onload = function() {
    
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	
	ctx.fillStyle = 'blue';
	ctx.fillRect(10, 10, 100, 50);
	ctx.strokeStyle = 'red';
    ctx.strokeRect(75, 75, 50, 50);
    
    ctx.drawImage(smiley, 200, 10);
	
    ctx.drawImage(smiley, 200, 30, 100, 50); 
    ctx.drawImage(smiley, 0, 0, 10, 19, 200, 100, 10, 19);
}