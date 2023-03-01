let player = 1;
let letter = "X";

let case1 = document.getElementById("case1");
let case2 = document.getElementById("case2");
let case3 = document.getElementById("case3");
let case4 = document.getElementById("case4");
let case5 = document.getElementById("case5");
let case6 = document.getElementById("case6");
let case7 = document.getElementById("case7");
let case8 = document.getElementById("case8");
let case9 = document.getElementById("case9");

case1.addEventListener("click", () =>{remplir(case1)});
case2.addEventListener("click", () =>{remplir(case2)});
case3.addEventListener("click", () =>{remplir(case3)});
case4.addEventListener("click", () =>{remplir(case4)});
case5.addEventListener("click", () =>{remplir(case5)});
case6.addEventListener("click", () =>{remplir(case6)});
case7.addEventListener("click", () =>{remplir(case7)});
case8.addEventListener("click", () =>{remplir(case8)});
case9.addEventListener("click", () =>{remplir(case9)});

function remplir(caseX) {
    if (player == 2) {
        letter = "O";
    } else {letter = "X";}

    if (caseX.textContent == "") {
        caseX.innerHTML = letter;
        if (player == 1) {
            player = 2;
        }
        else {
            player = 1;
        }
    }
    
    if (verify()) {
        alert("Il y a un gagnant! Congratulations!");
        restart();
    }
	else if (verify() == false && full()) {
		alert("Match nul!");
		restart();
	}
}

function verify() {
    if (case1.textContent == case2.textContent && case2.textContent == case3.textContent && case1.textContent != "") {return true;}
    else if (case4.textContent == case5.textContent && case5.textContent == case6.textContent && case4.textContent != "") {return true;}
    else if (case7.textContent == case8.textContent && case8.textContent == case9.textContent && case7.textContent != "") {return true;}
    else if (case1.textContent == case4.textContent && case4.textContent == case7.textContent && case1.textContent != "") {return true;}
    else if (case2.textContent == case5.textContent && case5.textContent == case8.textContent && case2.textContent != "") {return true;}
    else if (case3.textContent == case6.textContent && case6.textContent == case9.textContent && case3.textContent != "") {return true;}
    else if (case1.textContent == case5.textContent && case5.textContent == case9.textContent && case1.textContent != "") {return true;}
    else if (case3.textContent == case5.textContent && case5.textContent == case7.textContent && case3.textContent != "") {return true;}
    else {return false;}
}

function restart() {
    for (let i = 1; i < 10; i += 1) {
        let x = "case" + i;
        console.log(("case" + i).textContent);
        window[x].textContent = "";
    }
}

function full() {
	if (case1.textContent != "" && case2.textContent != "" && case3.textContent != "" && case4.textContent != "" && case5.textContent != "" && case6.textContent != "" && case7.textContent != "" && case8.textContent != "" && case9.textContent != "") {
		return true;
	}
	else {
		return false;
	}
}
