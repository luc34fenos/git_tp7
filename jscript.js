
setTimeout(function(){pupup.style.display = "block"}, 10000)

setTimeout(function(){pupup.style.display = "none"}, 20000)

function openModal(){
	pupup.style.display = 'block';
	setTimeout(function(){pupup.style.display = "none"}, 20000)
}

function closepopup(){
	pupup.style.display = 'none'
}

setTimeout(openModal(), 100);

function mag(){
		document.body.style.backgroundColor = "#FF00FF";
}


function blue(){
	document.querySelectorAll("p").forEach(element =>
		element.style.color = "blue"
	);
}

function green(){
	document.getElementById("head").style.color = "green"
}

function style(){
	document.querySelectorAll("p").style.fontFamily = "papyrus";
	document.querySelectorAll("h1").style.fontFamily = "comic sans"
}