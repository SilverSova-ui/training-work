'use strict'
let log = "sova";
let pass = "123";
let audio1 = new Audio();

function clicks1(){
if(document.forms[0].login.value == log && password.value == pass){
document.location.href = "form.html";
	}
else{
if(document.forms[0].login.value != log && password.value != pass){
	audio1.src = 'music/dolg.mp3'; 
	audio1.autoplay = true;
	document.body.style.background = 'url(img/stalker.jpg)';
	document.getElementById("fos").style.display = 'none';
}
if(document.forms[0].login.value == log && password.value != pass){
	audio1.src = 'music/dolg.mp3'; 
	audio1.autoplay = true;
	document.body.style.background = 'url(img/stalker.jpg)';
	document.getElementById("fos").style.display = 'none';
}
if(document.forms[0].login.value != log && password.value == pass){
	audio1.src = 'music/dolg.mp3'; 
	audio1.autoplay = true;
	document.body.style.background = 'url(img/stalker.jpg)';
	document.getElementById("fos").style.display = 'none';
}
}
}