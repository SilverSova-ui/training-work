'use strict'
let log = "sova";
let pass = "123";
let audio1 = new Audio();
let audio2 = new Audio();
let mod1 = document.createElement("div");
let mod2 = document.createElement("div");
let mod3 = document.createElement("div");
let mod4 = document.createElement("div");

function clicks1(){
if(document.forms[0].login.value == log && password.value == pass){
document.getElementsByTagName("h2")[0].style.display ="none";
document.getElementsByTagName("form")[0].innerHTML = "<fieldset><p font-size='0.5em' style='color:white; margin-left:0.5em;'>какие ваши любимые занятие?</p><div><input type='radio' name='chose1' id='eat'>Люблю поесть</div><div><input type='radio' name='chose1' id='son'>Люблю поспать</div></fieldset><input type='button' onclick='clicks2()' value='отправить и спать' style='margin-top:1em; border-radius:10px;'>";
audio2.src = 'music/prohod.mp3'; 
audio2.autoplay = true;
mod3.append(mod4);
	mod3.setAttribute("class", "mods3");
	mod4.setAttribute("class", "mods4");
	document.body.append(mod3);
	mod4.innerHTML = "<p>Проходи не задерживаеся</p><input type='button' onclick='md1()' value='закрыть'>";
	}
else{
if(document.forms[0].login.value != log && password.value != pass){
	audio1.src = 'music/dolg.mp3'; 
	audio1.autoplay = true;
	document.body.style.background = 'url(img/stalker.jpg)';
	document.getElementById("fos").style.display = 'none';
	mod1.append(mod2);
	mod1.setAttribute("class", "mods1");
	mod2.setAttribute("class", "mods2");
	document.body.append(mod1);
	mod2.innerHTML = "<p>Иди своей дорогой сталкер</p><input type='button' onclick='md()' value='назад'>";
}
if(document.forms[0].login.value == log && password.value != pass){
	audio1.src = 'music/dolg.mp3'; 
	audio1.autoplay = true;
	document.body.style.background = 'url(img/stalker.jpg)';
	document.getElementById("fos").style.display = 'none';
	mod1.append(mod2);
mod1.setAttribute("class", "mods1");
mod2.setAttribute("class", "mods2");
document.body.append(mod1);
mod2.innerHTML = "<p>Иди своей дорогой сталкер</p><input type='button' onclick='md()' value='назад'>";
}
if(document.forms[0].login.value != log && password.value == pass){
	audio1.src = 'music/dolg.mp3'; 
	audio1.autoplay = true;
	document.body.style.background = 'url(img/stalker.jpg)';
	document.getElementById("fos").style.display = 'none';
	mod1.append(mod2);
mod1.setAttribute("class", "mods1");
mod2.setAttribute("class", "mods2");
document.body.append(mod1);
mod2.innerHTML = "<p>Иди своей дорогой сталкер</p><input type='button' onclick='md()' value='назад'>";
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

function md(){
	mod1.style.display = "none";
	document.location.href = "z_1.html";
}

function md1(){
	mod3.style.display = "none";
}