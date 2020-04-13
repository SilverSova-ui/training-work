'use strict'
let arry_two = [[1, 2], [3, 4], [5, 6], [7, 8]];
let i, q, x = "";
let y = 0;
function Shahmati_dosk(){
$("button:eq(1)").remove()
$("body").append("<div id='table'></div>")
while (y < 8){
for(i=0; i < 4; i++){
	for(q=0; q < 2; q++){
		x += `<div>`+ arry_two[i][q] +`</div>`;
}
}
y++;
}
$("#table").append(x);
let array = $('#table').children("div").empty();
for(let i=0;i<8;i++){
	for(let j=0;j<8;j++){
		if((j-i)%2==0 || ((j-i)%2==0)){
			$(array[(i*8)+j]).addClass("white").css('background','#f4a460');
		}
		else{
			$(array[(i*8)+j]).addClass("black").css('background','#8B4513');
		}
	}
}
$('button:first-child').replaceWith("<button onClick='Vanish()'>Исчезни доска!</button>");
$("button:first-child").after("<button onClick='Shahki()' style='margin-left:0.5em'>Добавь шашки</button>");
$("body").append("<div id='lotki'><div id='lotok_white' class='lotok_white'>Белые шашки<div id='counter_white'>0</div></div><div id='lotok_black' class='lotok_black'>Темные шашки<div id='counter_black'>0</div></div></div>");
}

function Shahki(){
$("div").filter(".black").slice(0, 12).append("<img id='black' src='img/shashochka.gif'>");
$("div").filter(".black").slice(20, 32).append("<img id='white' src='img/shashochka2.gif'>");
$("button:eq(1)").replaceWith("<button onClick='Vanish_Shahki()' style='margin-left:0.5em'>Cкрыть шашки</button>");
$('#black, #white').click(function(){
	$("#black, #white").draggable({
		revert: false,
	});
})
$("#black, #white").draggable();
$('.white').droppable({
	accept: '#black, #white',
	drop: function(){
		$("#black, #white").draggable({
			revert: true,
		});
	}
})


$('.lotok_white').droppable({
	accept: '#white',
	activeClass: 'active',
	drop: function(){
        let a=$('#counter_white').text();
        let n=parseInt(a);
        n=n+1;
        $('#counter_white').text(n);
        if(n >= 12){
        	alert("победили черные!");
        	let url = "../chess/index.html";
			$(location).attr('href',url);
        }
        $(n).droppable('disable');
   	}
});

$('.lotok_black').droppable({
	accept: '#black',
	activeClass: 'active',
	drop: function(){
        let a=$('#counter_black').text();
        let n=parseInt(a);
        n=n+1;
        $('#counter_black').text(n);
        if(n >= 12){
        	alert("победили белые!");
        	let url = "../chess/index.html";
			$(location).attr('href',url);
        }
        $(n).droppable('disable');
    }
});
}

function Vanish(){
$('#table').remove();
$('#lotki').remove();
$("button:eq(1)").remove()
$('button:first-child').replaceWith("<button onClick='Shahmati_dosk()'>Появись доска!</button>");
}

function Vanish_Shahki(){
$('img').remove();
$('button:eq(1)').replaceWith("<button onClick='Shahki()' style='margin-left:0.5em'>Добавь шашки</button>");
$("#counter_white, #counter_black").empty();
$("#counter_white, #counter_black").text(0);
}