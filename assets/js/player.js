const getURLData = function(){
	let res = {};
	window.location.search.replace("?", "").split("&").forEach(function(a,i){
		let k = a.split("=")[0];
		let v = decodeURIComponent(a.split("=")[1]);
		res[k] = v;
	})
	return res;
}



$(document).ready(function() {
	const d = getURLData();

	if(d.u == undefined){
		alert("Something went wrong!");
		return;
	}

	switch(d.v){
		case "v":
		$('.player-content').html('<video controls autoplay src="'+decodeURIComponent(d.u)+'" />');
		break;

		case "a":
		$('.player-content').html('<audio controls autoplay src="'+decodeURIComponent(d.u)+'" />');
		break;

		case "p":
		$('.player-content').html('<img src="'+decodeURIComponent(d.u)+'" />');
		break;

		default:
		window.location = d.u;
		break;
	}
});