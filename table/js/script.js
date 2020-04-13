let divTable = document.createElement("Table");
let Table = document.createElement("Table");
Table.style.marginTop = '1em';
let Tbody = document.createElement("Tbody");
Table.id = "close1";
let tableWidth = document.getElementsByClassName("tableWidth")[0];
let tableHeight = document.getElementsByClassName("tableHeight")[0];
let ColorZapr1 = document.getElementsByClassName("ColorZapr1")[0];
let ColorZapr2 = document.getElementsByClassName("ColorZapr2")[0];
let zapr1 = ColorZapr1.value;
let zapr2 = ColorZapr2.value;




function buttonClick(){
let w = tableWidth.value;
let h = tableHeight.value;
let zapr1 = ColorZapr1.value;
let zapr2 = ColorZapr2.value;
let but = document.createElement('div');
but.innerHTML = "<input value='спрятать' type='button' onclick='closeTable()'><input value='инверсия' type='button' onclick='colors()'><input value='Обратная инверсия' type='button' onclick='colorsBack()'><input value='Диагональ' type='button' onclick='Dioganal()'><input value='Обратная Диаганаль' type='button' onclick='ObrDioganal()'>"; 
but.style.marginTop = '1em';
document.body.append(but);
document.getElementById('vanish').style.display = 'none';
for(let i=0; i<h; i++){
	let tableRow = document.createElement("tr");
	for (let j=0; j<w; j++){
	let tableCell = document.createElement("td");
	tableRow.append(tableCell);
	}
	Tbody.append(tableRow);
	}
	Table.append(Tbody);
	Table.cellpadding = '0';
	document.body.append(Table);
	for (let i=0; i<h; i++){
	for (let j=0; j<w; j++){
		let wh=i*h+j;
	if (wh%2 == 1){
		document.getElementsByTagName("td")[wh].style.background = zapr2;
	}
	else{
		document.getElementsByTagName("td")[wh].style.background = zapr1;
	}
	}
	}
}


	function closeTable(){
	if(document.getElementById('close1').style.display == 'none'){
	document.getElementById('close1').style.display = 'table';}
	else{
	document.getElementById('close1').style.display = 'none';
	}
	}
	
function colors(){
	let w = tableWidth.value;
	let h = tableHeight.value;
	let zapr1 = ColorZapr1.value;
	let zapr2 = ColorZapr2.value;
	for (let i=0; i<h; i++){
	for (let j=0; j<w; j++){
		let wh=i*h+j;
	if (wh%2 == 1){
	document.getElementsByTagName("td")[wh].style.background = zapr1;
	}
	else{
		document.getElementsByTagName("td")[wh].style.background = zapr2;
	}
	}
	}
}

function colorsBack(){
	let w = tableWidth.value;
	let h = tableHeight.value;
	let zapr1 = ColorZapr1.value;
	let zapr2 = ColorZapr2.value;
	for (let i=0; i<h; i++){
	for (let j=0; j<w; j++){
		let wh=i*h+j;
	if (wh%2 == 1){
	document.getElementsByTagName("td")[wh].style.background = zapr2;
	}
	else{
		document.getElementsByTagName("td")[wh].style.background = zapr1;
	}
	}
	}
}

function Dioganal(){
	let w = tableWidth.value;
	let h = tableHeight.value;
	let zapr1 = ColorZapr1.value;
	let zapr2 = ColorZapr2.value;
	for (let i=0; i<h; i++){
	for (let j=0; j<w; j++){
		let wh=i*h+j;
	if (i<j){
	document.getElementsByTagName("td")[wh].style.background = zapr2;
	}
	else{
		document.getElementsByTagName("td")[wh].style.background = zapr1;
	}
	}
	}
}

function ObrDioganal(){
	let w = tableWidth.value;
	let h = tableHeight.value;
	let zapr1 = ColorZapr1.value;
	let zapr2 = ColorZapr2.value;
	for (let i=0; i<h; i++){
	for (let j=0; j<w; j++){
		let wh=i*h+j;
	if (i>j){
	document.getElementsByTagName("td")[wh].style.background = zapr2;
	}
	else{
		document.getElementsByTagName("td")[wh].style.background = zapr1;
	}
	}
	}
}
