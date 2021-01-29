'use string'
let log = "sova";
let pass = "123";
let audio1 = new Audio();
let audio2 = new Audio();

function clicks1(){
if(document.forms[0].login.value == log && password.value == pass){
document.getElementsByTagName("h2")[0].style.display ="none";
document.getElementsByTagName("form")[0].innerHTML = "<fieldset><p font-size='0.5em' style='color:white; margin-left:0.5em;'>какие ваши любимые занятие?</p><div><input type='radio' name='chose1' id='eat'>Люблю поесть</div><div><input type='radio' name='chose1' id='son'>Люблю поспать</div></fieldset><input type='button' onclick='clicks2()' value='отправить и спать' style='margin-top:1em; border-radius:10px;'>";
audio2.src = 'music/prohod.mp3'; 
audio2.autoplay = true;
alert("привет")
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

function clicks2(){
if(document.getElementById('eat').checked==true){
document.getElementById("fos").style.display = 'none';
document.body.innerHTML = '<img src ="img/kfc.jpeg">';
alert('курочка из kfc самая лучшая!')}
else{
if(document.getElementById('son').checked==true){
document.getElementById("fos").style.display = 'none';
document.body.innerHTML = '<img src ="img/cat.jpeg">';
alert('Я тоже но к сожалению мне к первой паре((');
}
}
}