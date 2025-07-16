let res_1 = 0;
let res2_1 = 0;
let resfin_1 = 0;

function partie1_1() {
	let un_1 = document.getElementById("UN_1");
	let UN_1 = un_1[un_1.selectedIndex];
	UN_1 = UN_1.value;
	
	let deux_1 = document.getElementById("DEUX_1");
	let DEUX_1 = deux_1[deux_1.selectedIndex];
	DEUX_1 = DEUX_1.value;
	
	let trois_1 = document.getElementById("TROIS_1");
	let TROIS_1 = trois_1[trois_1.selectedIndex];
	TROIS_1 = TROIS_1.value;
	
	let quatre_1 = document.getElementById("QUATRE_1");
	let QUATRE_1 = quatre_1[quatre_1.selectedIndex];
	QUATRE_1 = QUATRE_1.value;
	
	let cinq_1 = document.getElementById("CINQ_1");
	let CINQ_1 = cinq_1[cinq_1.selectedIndex];
	CINQ_1 = CINQ_1.value;
	
	let six_1 = document.getElementById("SIX_1");
	let SIX_1 = six_1[six_1.selectedIndex];
	SIX_1 = SIX_1.value;
	
	res_1 = Number(UN_1)+Number(DEUX_1)+Number(TROIS_1)+Number(QUATRE_1)+Number(CINQ_1)+Number(SIX_1);
	document.getElementById("resultat_1_1").innerHTML = res_1;
	if (res_1>=Number(63)){
		res_1 = res_1 + Number(35);
		document.getElementById("bonus_1").innerHTML = "+ 35";
	}
	else {
		document.getElementById("bonus_1").innerHTML = "+ 0";
	}
	document.getElementById("resultat_2_1").innerHTML = res_1;
	resultat1_1();
}

function partie2_1() {
	let brelan_1 = document.getElementById("BRELAN_1");
	BRELAN_1 = brelan_1.value;
	
	let carre_1 = document.getElementById("CARRE_1");
	CARRE_1 = carre_1.value;
	
	let chance_1 = document.getElementById("CHANCE_1");
	CHANCE_1 = chance_1.value;
	
	let full_1 = document.getElementById("FULL_1");
	let FULL_1 = full_1[full_1.selectedIndex];
	FULL_1 = FULL_1.value;
	
	let psuite_1 = document.getElementById("PS_1");
	let PSUITE_1 = psuite_1[psuite_1.selectedIndex];
	PSUITE_1 = PSUITE_1.value;
	
	let gsuite_1 = document.getElementById("GS_1");
	let GSUITE_1 = gsuite_1[gsuite_1.selectedIndex];
	GSUITE_1 = GSUITE_1.value;
	
	let yams_1 = document.getElementById("YAMS_1");
	let YAMS_1 = yams_1[yams_1.selectedIndex];
	YAMS_1 = YAMS_1.value;
	
	res2_1 = Number(BRELAN_1) + Number(CARRE_1) + Number(CHANCE_1) + Number(FULL_1) + Number(PSUITE_1) + Number(GSUITE_1) + Number(YAMS_1);
	
	document.getElementById("resultat_3_1").innerHTML = res2_1;
	resultat1_1();
}

function resultat1_1() {
	resfin_1 = res_1 + res2_1;
	document.getElementById("resultat_fin_1").innerHTML = resfin_1;
}








let res_2 = 0;
let res2_2 = 0;
let resfin_2 = 0;

function partie1_2() {
	let un_2 = document.getElementById("UN_2");
	let UN_2 = un_2[un_2.selectedIndex];
	UN_2 = UN_2.value;
	
	let deux_2 = document.getElementById("DEUX_2");
	let DEUX_2 = deux_2[deux_2.selectedIndex];
	DEUX_2 = DEUX_2.value;
	
	let trois_2 = document.getElementById("TROIS_2");
	let TROIS_2 = trois_2[trois_2.selectedIndex];
	TROIS_2 = TROIS_2.value;
	
	let quatre_2 = document.getElementById("QUATRE_2");
	let QUATRE_2 = quatre_2[quatre_2.selectedIndex];
	QUATRE_2 = QUATRE_2.value;
	
	let cinq_2 = document.getElementById("CINQ_2");
	let CINQ_2 = cinq_2[cinq_2.selectedIndex];
	CINQ_2 = CINQ_2.value;
	
	let six_2 = document.getElementById("SIX_2");
	let SIX_2 = six_2[six_2.selectedIndex];
	SIX_2 = SIX_2.value;
	
	res_2 = Number(UN_2)+Number(DEUX_2)+Number(TROIS_2)+Number(QUATRE_2)+Number(CINQ_2)+Number(SIX_2);
	document.getElementById("resultat_1_2").innerHTML = res_2;
	if (res_2>=Number(63)){
		res_2 = res_2 + Number(35);
		document.getElementById("bonus_2").innerHTML = "+ 35";
	}
	else {
		document.getElementById("bonus_2").innerHTML = "+ 0";
	}
	document.getElementById("resultat_2_2").innerHTML = res_2;
	resultat1_2();
}

function partie2_2() {
	let brelan_2 = document.getElementById("BRELAN_2");
	BRELAN_2 = brelan_2.value;
	
	let carre_2 = document.getElementById("CARRE_2");
	CARRE_2 = carre_2.value;
	
	let chance_2 = document.getElementById("CHANCE_2");
	CHANCE_2 = chance_2.value;
	
	let full_2 = document.getElementById("FULL_2");
	let FULL_2 = full_2[full_2.selectedIndex];
	FULL_2 = FULL_2.value;
	
	let psuite_2 = document.getElementById("PS_2");
	let PSUITE_2 = psuite_2[psuite_2.selectedIndex];
	PSUITE_2 = PSUITE_2.value;
	
	let gsuite_2 = document.getElementById("GS_2");
	let GSUITE_2 = gsuite_2[gsuite_2.selectedIndex];
	GSUITE_2 = GSUITE_2.value;
	
	let yams_2 = document.getElementById("YAMS_2");
	let YAMS_2 = yams_2[yams_2.selectedIndex];
	YAMS_2 = YAMS_2.value;
	
	res2_2 = Number(BRELAN_2) + Number(CARRE_2) + Number(CHANCE_2) + Number(FULL_2) + Number(PSUITE_2) + Number(GSUITE_2) + Number(YAMS_2);
	
	document.getElementById("resultat_3_2").innerHTML = res2_2;
	resultat1_2();
}

function resultat1_2() {
	resfin_2 = res_2 + res2_2;
	document.getElementById("resultat_fin_2").innerHTML = resfin_2;
}









let res_3 = 0;
let res2_3 = 0;
let resfin_3 = 0;

function partie1_3() {
	let un_3 = document.getElementById("UN_3");
	let UN_3 = un_3[un_3.selectedIndex];
	UN_3 = UN_3.value;
	
	let deux_3 = document.getElementById("DEUX_3");
	let DEUX_3 = deux_3[deux_3.selectedIndex];
	DEUX_3 = DEUX_3.value;
	
	let trois_3 = document.getElementById("TROIS_3");
	let TROIS_3 = trois_3[trois_3.selectedIndex];
	TROIS_3 = TROIS_3.value;
	
	let quatre_3 = document.getElementById("QUATRE_3");
	let QUATRE_3 = quatre_3[quatre_3.selectedIndex];
	QUATRE_3 = QUATRE_3.value;
	
	let cinq_3 = document.getElementById("CINQ_3");
	let CINQ_3 = cinq_3[cinq_3.selectedIndex];
	CINQ_3 = CINQ_3.value;
	
	let six_3 = document.getElementById("SIX_3");
	let SIX_3 = six_3[six_3.selectedIndex];
	SIX_3 = SIX_3.value;
	
	res_3 = Number(UN_3)+Number(DEUX_3)+Number(TROIS_3)+Number(QUATRE_3)+Number(CINQ_3)+Number(SIX_3);
	document.getElementById("resultat_1_3").innerHTML = res_3;
	if (res_3>=Number(63)){
		res_3 = res_3 + Number(35);
		document.getElementById("bonus_3").innerHTML = "+ 35";
	}
	else {
		document.getElementById("bonus_3").innerHTML = "+ 0";
	}
	document.getElementById("resultat_2_3").innerHTML = res_3;
	resultat1_3();
}

function partie2_3() {
	let brelan_3 = document.getElementById("BRELAN_3");
	BRELAN_3 = brelan_3.value;
	
	let carre_3 = document.getElementById("CARRE_3");
	CARRE_3 = carre_3.value;
	
	let chance_3 = document.getElementById("CHANCE_3");
	CHANCE_3 = chance_3.value;
	
	let full_3 = document.getElementById("FULL_3");
	let FULL_3 = full_3[full_3.selectedIndex];
	FULL_3 = FULL_3.value;
	
	let psuite_3 = document.getElementById("PS_3");
	let PSUITE_3 = psuite_3[psuite_3.selectedIndex];
	PSUITE_3 = PSUITE_3.value;
	
	let gsuite_3 = document.getElementById("GS_3");
	let GSUITE_3 = gsuite_3[gsuite_3.selectedIndex];
	GSUITE_3 = GSUITE_3.value;
	
	let yams_3 = document.getElementById("YAMS_3");
	let YAMS_3 = yams_3[yams_3.selectedIndex];
	YAMS_3 = YAMS_3.value;
	
	res2_3 = Number(BRELAN_3) + Number(CARRE_3) + Number(CHANCE_3) + Number(FULL_3) + Number(PSUITE_3) + Number(GSUITE_3) + Number(YAMS_3);
	
	document.getElementById("resultat_3_3").innerHTML = res2_3;
	resultat1_3();
}

function resultat1_3() {
	resfin_3 = res_3 + res2_3;
	document.getElementById("resultat_fin_3").innerHTML = resfin_3;
}









let res_4 = 0;
let res2_4 = 0;
let resfin_4 = 0;

function partie1_4() {
	let un_4 = document.getElementById("UN_4");
	let UN_4 = un_4[un_4.selectedIndex];
	UN_4 = UN_4.value;
	
	let deux_4 = document.getElementById("DEUX_4");
	let DEUX_4 = deux_4[deux_4.selectedIndex];
	DEUX_4 = DEUX_4.value;
	
	let trois_4 = document.getElementById("TROIS_4");
	let TROIS_4 = trois_4[trois_4.selectedIndex];
	TROIS_4 = TROIS_4.value;
	
	let quatre_4 = document.getElementById("QUATRE_4");
	let QUATRE_4 = quatre_4[quatre_4.selectedIndex];
	QUATRE_4 = QUATRE_4.value;
	
	let cinq_4 = document.getElementById("CINQ_4");
	let CINQ_4 = cinq_4[cinq_4.selectedIndex];
	CINQ_4 = CINQ_4.value;
	
	let six_4 = document.getElementById("SIX_4");
	let SIX_4 = six_4[six_4.selectedIndex];
	SIX_4 = SIX_4.value;
	
	res_4 = Number(UN_4)+Number(DEUX_4)+Number(TROIS_4)+Number(QUATRE_4)+Number(CINQ_4)+Number(SIX_4);
	document.getElementById("resultat_1_4").innerHTML = res_4;
	if (res_4>=Number(63)){
		res_4 = res_4 + Number(35);
		document.getElementById("bonus_4").innerHTML = "+ 35";
	}
	else {
		document.getElementById("bonus_4").innerHTML = "+ 0";
	}
	document.getElementById("resultat_2_4").innerHTML = res_4;
	resultat1_4();
}

function partie2_4() {
	let brelan_4 = document.getElementById("BRELAN_4");
	BRELAN_4 = brelan_4.value;
	
	let carre_4 = document.getElementById("CARRE_4");
	CARRE_4 = carre_4.value;
	
	let chance_4 = document.getElementById("CHANCE_4");
	CHANCE_4 = chance_4.value;
	
	let full_4 = document.getElementById("FULL_4");
	let FULL_4 = full_4[full_4.selectedIndex];
	FULL_4 = FULL_4.value;
	
	let psuite_4 = document.getElementById("PS_4");
	let PSUITE_4 = psuite_4[psuite_4.selectedIndex];
	PSUITE_4 = PSUITE_4.value;
	
	let gsuite_4 = document.getElementById("GS_4");
	let GSUITE_4 = gsuite_4[gsuite_4.selectedIndex];
	GSUITE_4 = GSUITE_4.value;
	
	let yams_4 = document.getElementById("YAMS_4");
	let YAMS_4 = yams_4[yams_4.selectedIndex];
	YAMS_4 = YAMS_4.value;
	
	res2_4 = Number(BRELAN_4) + Number(CARRE_4) + Number(CHANCE_4) + Number(FULL_4) + Number(PSUITE_4) + Number(GSUITE_4) + Number(YAMS_4);
	
	document.getElementById("resultat_3_4").innerHTML = res2_4;
	resultat1_4();
}

function resultat1_4() {
	resfin_4 = res_4 + res2_4;
	document.getElementById("resultat_fin_4").innerHTML = resfin_4;
}






let res_5 = 0;
let res2_5 = 0;
let resfin_5 = 0;

function partie1_5() {
	let un_5 = document.getElementById("UN_5");
	let UN_5 = un_5[un_5.selectedIndex];
	UN_5 = UN_5.value;
	
	let deux_5 = document.getElementById("DEUX_5");
	let DEUX_5 = deux_5[deux_5.selectedIndex];
	DEUX_5 = DEUX_5.value;
	
	let trois_5 = document.getElementById("TROIS_5");
	let TROIS_5 = trois_5[trois_5.selectedIndex];
	TROIS_5 = TROIS_5.value;
	
	let quatre_5 = document.getElementById("QUATRE_5");
	let QUATRE_5 = quatre_5[quatre_5.selectedIndex];
	QUATRE_5 = QUATRE_5.value;
	
	let cinq_5 = document.getElementById("CINQ_5");
	let CINQ_5 = cinq_5[cinq_5.selectedIndex];
	CINQ_5 = CINQ_5.value;
	
	let six_5 = document.getElementById("SIX_5");
	let SIX_5 = six_5[six_5.selectedIndex];
	SIX_5 = SIX_5.value;
	
	res_5 = Number(UN_5)+Number(DEUX_5)+Number(TROIS_5)+Number(QUATRE_5)+Number(CINQ_5)+Number(SIX_5);
	document.getElementById("resultat_1_5").innerHTML = res_5;
	if (res_5>=Number(63)){
		res_5 = res_5 + Number(35);
		document.getElementById("bonus_5").innerHTML = "+ 35";
	}
	else {
		document.getElementById("bonus_5").innerHTML = "+ 0";
	}
	document.getElementById("resultat_2_5").innerHTML = res_5;
	resultat1_5();
}

function partie2_5() {
	let brelan_5 = document.getElementById("BRELAN_5");
	BRELAN_5 = brelan_5.value;
	
	let carre_5 = document.getElementById("CARRE_5");
	CARRE_5 = carre_5.value;
	
	let chance_5 = document.getElementById("CHANCE_5");
	CHANCE_5 = chance_5.value;
	
	let full_5 = document.getElementById("FULL_5");
	let FULL_5 = full_5[full_5.selectedIndex];
	FULL_5 = FULL_5.value;
	
	let psuite_5 = document.getElementById("PS_5");
	let PSUITE_5 = psuite_5[psuite_5.selectedIndex];
	PSUITE_5 = PSUITE_5.value;
	
	let gsuite_5 = document.getElementById("GS_5");
	let GSUITE_5 = gsuite_5[gsuite_5.selectedIndex];
	GSUITE_5 = GSUITE_5.value;
	
	let yams_5 = document.getElementById("YAMS_5");
	let YAMS_5 = yams_5[yams_5.selectedIndex];
	YAMS_5 = YAMS_5.value;
	
	res2_5 = Number(BRELAN_5) + Number(CARRE_5) + Number(CHANCE_5) + Number(FULL_5) + Number(PSUITE_5) + Number(GSUITE_5) + Number(YAMS_5);
	
	document.getElementById("resultat_3_5").innerHTML = res2_5;
	resultat1_5();
}

function resultat1_5() {
	resfin_5 = res_5 + res2_5;
	document.getElementById("resultat_fin_5").innerHTML = resfin_5;
}
