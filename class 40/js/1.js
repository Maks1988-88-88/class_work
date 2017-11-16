document.getElementById('btn1').onclick = function() {

	var num1 = document.getElementById('num1');
	for (var i=4 ; i<=400; i++) {
	num1.innerHTML += i + ' ';
} 
}

document.getElementById('btn2').onclick = function() {

	var num2 = document.getElementById('num2');
	for (var i=4 ; i<=13; i=i+3) {
	num2.innerHTML += i + ' ';
} 
}


document.getElementById('btn3').onclick = function() {

	var num3 = document.getElementById('num3');
	for (var i=654 ; i>=0; i--) {
	num3.innerHTML += i + ' ';
} 
}


document.getElementById('btn4').onclick = function() {

	var num4 = document.getElementById('num4');
	for (var i=1983 ; i<=2017; i++) {
	num4.innerHTML += i + ' ';
} 
}

document.getElementById('btn6').onclick = function() {

	var num6 = document.getElementById('num6');
	for (var i=-4 ; i<=100; i++) {
	num6.innerHTML += i + ' ';
} 
}

document.getElementById('btn1m').onclick = function() {
	var mas1 = [3, 6, 1, 13, 88, 43];
	num1m.innerHTML = mas1[0] + ' ' + mas1[3];
}

document.getElementById('btn2m').onclick = function() {
	var mas2 = ['Hi', "hello", 34, "prima"];
	num2m.innerHTML = mas2[0] + ' ' + mas2[3];
}

document.getElementById('btn3m').onclick = function() {
	var mas3 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	num3m.innerHTML = mas3.length;
}

document.getElementById('btn4m').onclick = function() {
	var mas4 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	mas4[2] = 'new element';
	num4m.innerHTML = mas4[2] + ' ' + mas4[3];
}

document.getElementById('btn5m').onclick = function() {
	var mas5 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	mas5[1] = 22;
	mas5[3] = 44;
	num5m.innerHTML = mas5[1] + ' ' + mas5[3];
}

document.getElementById('btn6m').onclick = function() {
	var mas6 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	mas6[10] = 100;
	num6m.innerHTML = mas6;
}

document.getElementById('btn7m').onclick = function() {
	var mas7 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	mas7[11] = 200;
	num7m.innerHTML = mas7;
}


document.getElementById('btn9m').onclick = function() {
	var mas9 = [31, 24, 35, 47, 12];
	var f = 1;
	console.log (mas9[f]);
	f = 4;
	console.log (mas9[f]);
	f = 7;
	console.log (mas9[f]);
}

document.getElementById('btn11m').onclick = function() {
	var mas11 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	var texter11 = document.getElementById('texter11').value;
	num11m.innerHTML = mas11[texter11];
}

document.getElementById('btn12m').onclick = function() {
	var mas12 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	for (var i=0 ; i<=9; i++) {
	num12m.innerHTML += mas12[i] + ' ';
 	}
}

document.getElementById('btn13m').onclick = function() {
	var mas13 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	for (var i=9 ; i>=0; i--) {
	num13m.innerHTML += mas13[i] + ' ';
 	}
}

document.getElementById('btn14m').onclick = function() {
	var mas14 = [2, 3, [4,5]];
	console.log (mas14);
	console.log (mas14[0],mas14[1]);
	console.log (mas14[2]);
}


document.getElementById('btn15m').onclick = function() {
	var mas15 = [2, 3, [4,5]];
	console.log (mas15[2][0]);
	console.log (mas15[2][1]);

}

document.getElementById('btn16m').onclick = function() {
	var mas16 = [2, 3, [4,5]];
	console.log (mas16[2].length);
	

}


document.getElementById('btn17m').onclick = function() {
	var mas17 = [ 2, [3,4,5], [6,7,8]  ];
	console.log (mas17[1][1]);
	console.log (mas17[2][2]);
}

document.getElementById('btn18m').onclick = function() {
	var mas18 = [ 2, [3,4,5], [6,7,8]  ];
	console.log (mas18[2]);
	console.log (mas18[0]);
}

document.getElementById('btn19m').onclick = function() {
	var mas19 = [ 2, [3,4,5], [6,7,8,9, 11, 12, 13, 14]  ];
	console.log (mas19[2]);

}

document.getElementById('btn20m').onclick = function() {
	var mas20 = [ ['hi', 3, 'beta'], ['foo', 'jam', 'tritto']  ];
	console.log (mas20[0][2]);
	console.log (mas20[1][0]);

}
