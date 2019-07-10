$(document).ready(function() {
	particlesJS.load('particles', 'assets/particles.json',function(){
		setTimeout(function(){
			$("#particles").fadeIn("slow");
		},100)
	});
});