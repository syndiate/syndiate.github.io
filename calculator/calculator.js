function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

var waittoinject = setInterval(() => {
	
	if (document.getElementById("basic")) {
		
		clearInterval(waittoinject);
		
		calculatorInit();
		
	}
	
}, 100);

function calculatorInit() {
	
function resetAllDataChecks() {
	
	for (var i = 0; i < document.querySelectorAll("input[type='radio']").length; i++) {
		
		document.querySelectorAll("input[type='radio']")[i].setAttribute("data-checked", "false");
		
	}
	
}

resetAllDataChecks();

function deterministicClick(e) {
	
	if (e.target.localName == "input") {
		
	document.getElementById("math-value-listener").value = e.target.value.toString();
	resetAllDataChecks();
	e.target.setAttribute("data-checked", "true");
	
	}
	
}

document.getElementById("basic-menu").addEventListener('click', deterministicClick, false);



function checkForValueChange() {
	
	var oldvalue = document.getElementById("math-value-listener").value;
	
	var checkvaluechange = setInterval(function() {
		
		if (oldvalue != document.getElementById("math-value-listener").value) {
			
			clearInterval(checkvaluechange);
			
			buildMathInput();
			
			checkForValueChange();
			
		}
		
	}, 100);
	
}

checkForValueChange();

function errorMathEquation() {
	
	console.error("Invalid math equation.");
	alert(`Invalid math equation. Either the equation contains non-math characters, or you typed a certain form of equation under the wrong category. For example, you could've typed "6<9" under the basic category, but because it's under the wrong mode, it'll error out.`);
	
}

function addButtonFunctionality() {
	
	var value = document.getElementById("math-value-listener").value.toString();
		
		try {
		
		solveMathEquation(value);
		
		} catch(err) {
			
			errorMathEquation();
			
		}
	
}

function buildMathInput() {
	
	if (document.getElementById("math-value-listener").value == "basic") {
		
		let htmltemplate = (`<p id="explanation">This is for basic operations like addition, subtraction, multiplication, and division. Examples of equations that would be suitable: </p>
		<ul id="examples">
		<li>(69-53)+90-27/8*90.8/9</li>
		<li>69-420*(90-63/7*5.252*8)+90</li>
		<li>(-5)+(-3)-90.8-9</li>
		</ul>
		
		<input type="text" id="enter-math-equation">
		
		
		<button type="button" id="confirm-math-equation">Enter</button>
		
		
		
		<p id="answer-declaration">
		Answer: 
		</p>`);
		
		
		
		document.getElementById("mathinput").innerHTML = htmltemplate;
		
	} else if (document.getElementById("math-value-listener").value == "truefalse") {
		
		let htmltemplate = (`<p id="explanation">This is for determining whether an equation is true or false. BASIC EQUATIONS ONLY. Examples of equations that would be suitable: </p>
		<ul id="examples">
		<li>9=0</li>
		<li>6<9</li>
		<li>6+7<91-0</li>
		</ul>
		
		<input type="text" id="enter-math-equation">
		
		
		<button type="button" id="confirm-math-equation">Enter</button>
		
		
		
		<p id="answer-declaration">
		Answer: 
		</p>`);
		
		
		document.getElementById("mathinput").innerHTML = htmltemplate;
		
	} else if (document.getElementById("math-value-listener").value == "round") {
		
		let htmltemplate = (`<p id="explanation">This is for rounding numbers. Examples of equations that would be suitable: </p>
		<ul id="examples">
		<li>0.9</li>
		<li>9</li>
		<li>888,999,666</li>
		</ul>
		
		<select name="rounding" id="rounding">
		<option value="trillionth">Nearest Trillionth</option>
		<option value="billionth">Nearest Billionth</option>
		<option value="millionth">Nearest Millionth</option>
		<option value="thousandth">Nearest Thousandth</option>
		<option value="hundredth">Nearest Hundredth</option>
		<option value="tenth">Nearest Tenth</option>
		<option value="whole">Nearest Whole Number</option>
		<option value="ten">Nearest Ten</option>
		<option value="hundred">Nearest Hundred</option>
		<option value="thousand">Nearest Thousand</option>
		<option value="million">Nearest Million</option>
		<option value="billion">Nearest Billion</option>
		<option value="trillion">Nearest Trillion</option>
		</select>
		
		<input type="text" id="enter-math-equation">
		
		
		<button type="button" id="confirm-math-equation">Enter</button>
		
		
		
		<p id="answer-declaration">
		Answer: 
		</p>`);
		
		document.getElementById("mathinput").innerHTML = htmltemplate;
		
	} else if (document.getElementById("math-value-listener").value == "evenodd") {
		
		let htmltemplate = (`<p id="explanation">This is for determing whether a number (or an expression) is even or odd. Examples of equations that would be suitable: </p>
		<ul id="examples">
		<li>69</li>
		<li>420</li>
		<li>888+9-7</li>
		</ul>
		
		<input type="text" id="enter-math-equation">
		
		
		<button type="button" id="confirm-math-equation">Enter</button>
		
		
		
		<p id="answer-declaration">
		Answer: 
		</p>`);
		
		document.getElementById("mathinput").innerHTML = htmltemplate;
		
	} else if (document.getElementById("math-value-listener").value == "abs") {
		
		let htmltemplate = (`<p id="explanation">This is for determing the absolute value of a number or an expression. Examples of equations that would be suitable: </p>
		<ul id="examples">
		<li>-90</li>
		<li>555</li>
		<li>-888+980/8-7</li>
		</ul>
		
		<input type="text" id="enter-math-equation">
		
		
		<button type="button" id="confirm-math-equation">Enter</button>
		
		
		
		<p id="answer-declaration">
		Answer: 
		</p>`);
		
		document.getElementById("mathinput").innerHTML = htmltemplate;
		
	}
	
	try {
			document.getElementById("mathinput").removeAttribute("style");
	} catch(e) {}
	
	document.getElementById("confirm-math-equation").addEventListener("click", addButtonFunctionality, false);
	
}





function solveMathEquation(type) {
	
	var occurences = (document.getElementById("enter-math-equation").value.match(/,/g) || []).length;
	
	for (var i = 0; i <= occurences; i++) {
		
		var fixedvalue = document.getElementById("enter-math-equation").value.replace(",", "");
		
	}
	
	if (type == "basic") {
		
		
		document.getElementById("answer-declaration").innerHTML = "Answer: ";
		if (typeof (eval(document.getElementById("enter-math-equation").value)) == "number" && !isNaN((eval(fixedvalue)))) {
			
		document.getElementById("answer-declaration").innerHTML += numberWithCommas((eval(fixedvalue)).toString());
		
		return;
		
		} else {
			
			errorMathEquation();
			
			return;
			
		}
		
	} else if (type == "truefalse") {
		
		document.getElementById("answer-declaration").innerHTML = "Answer: ";
		if (typeof (eval(document.getElementById("enter-math-equation").value)) == "boolean") {
			
		document.getElementById("answer-declaration").innerHTML += (eval(fixedvalue)).toString().charAt(0).toUpperCase() + (eval(fixedvalue)).toString().slice(1) + ".";
		
		return;
		
		} else {
			
			errorMathEquation();
			
			return;
			
		}
		
	} else if (type == "round") {
		
		document.getElementById("answer-declaration").innerHTML = "Answer: ";
		
		var negativeoccurences = (fixedvalue.match(/-/g) || []).length;
		
		for (var o = 0; o < negativeoccurences; o++) {
			
			var valuewithoutnegative = fixedvalue.replace("-", "");
			
		}
		
		if (document.getElementById("rounding").value == "trillionth") {
			
			if (document.getElementById("enter-math-equation").value.split(".")[1].length <= 13) {
				
				document.getElementById("answer-declaration").innerHTML += numberWithCommas(fixedvalue);
				
				return;
				
			} else {
				
				if (parseInt(document.getElementById("enter-math-equation").value.split(".")[1].charAt(13)) < 5) {
					
					document.getElementById("answer-declaration").innerHTML += (numberWithCommas(document.getElementById("enter-math-equation").value.split(".")[0]) + "." + (fixedvalue.split(".")[1].slice(0, 13))).toString();
					
					return;
					
				} else {
					
					document.getElementById("answer-declaration").innerHTML += (numberWithCommas(document.getElementById("enter-math-equation").value.split(".")[0]) + "." + document.getElementById("enter-math-equation").value.split(".")[1].slice(0, 12) + (parseInt(document.getElementById("enter-math-equation").value.split(".")[1].charAt(12)) + 1).toString()).toString();
					
					return;
					
				}
				
			}
			
		} else if (document.getElementById("rounding").value == "billionth") {
			
			if (document.getElementById("enter-math-equation").value.split(".")[1].length <= 10) {
				
				document.getElementById("answer-declaration").innerHTML += numberWithCommas(fixedvalue);
				
				return;
				
			} else {
				
				if (parseInt(document.getElementById("enter-math-equation").value.split(".")[1].charAt(10)) < 5) {
					
					document.getElementById("answer-declaration").innerHTML += (numberWithCommas(document.getElementById("enter-math-equation").value.split(".")[0]) + "." + (fixedvalue.split(".")[1].slice(0, 10))).toString();
					
					return;
					
				} else {
					
					document.getElementById("answer-declaration").innerHTML += (numberWithCommas(document.getElementById("enter-math-equation").value.split(".")[0]) + "." + document.getElementById("enter-math-equation").value.split(".")[1].slice(0, 9) + (parseInt(document.getElementById("enter-math-equation").value.split(".")[1].charAt(9)) + 1).toString()).toString();
					
					return;
					
				}
				
			}
			
		} else if (document.getElementById("rounding").value == "millionth") {
			
			if (document.getElementById("enter-math-equation").value.split(".")[1].length <= 7) {
				
				document.getElementById("answer-declaration").innerHTML += numberWithCommas(fixedvalue);
				
				return;
				
			} else {
				
				if (parseInt(document.getElementById("enter-math-equation").value.split(".")[1].charAt(7)) < 5) {
					
					document.getElementById("answer-declaration").innerHTML += (numberWithCommas(document.getElementById("enter-math-equation").value.split(".")[0]) + "." + (fixedvalue.split(".")[1].slice(0, 7))).toString();
					
					return;
					
				} else {
					
					document.getElementById("answer-declaration").innerHTML += (numberWithCommas(document.getElementById("enter-math-equation").value.split(".")[0]) + "." + document.getElementById("enter-math-equation").value.split(".")[1].slice(0, 6) + (parseInt(document.getElementById("enter-math-equation").value.split(".")[1].charAt(6)) + 1).toString()).toString();
					
					return;
					
				}
				
			}
			
		} else if (document.getElementById("rounding").value == "thousandth") {
			
			if (document.getElementById("enter-math-equation").value.split(".")[1].length <= 4) {
				
				document.getElementById("answer-declaration").innerHTML += numberWithCommas(fixedvalue);
				
				return;
				
			} else {
				
				if (parseInt(document.getElementById("enter-math-equation").value.split(".")[1].charAt(4)) < 5) {
					
					document.getElementById("answer-declaration").innerHTML += (numberWithCommas(document.getElementById("enter-math-equation").value.split(".")[0]) + "." + (fixedvalue.split(".")[1].slice(0, 4))).toString();
					
					return;
					
				} else {
					
					document.getElementById("answer-declaration").innerHTML += (numberWithCommas(document.getElementById("enter-math-equation").value.split(".")[0]) + "." + document.getElementById("enter-math-equation").value.split(".")[1].slice(0, 3) + (parseInt(document.getElementById("enter-math-equation").value.split(".")[1].charAt(3)) + 1).toString()).toString();
					
					return;
					
				}
				
			}
			
		} else if (document.getElementById("rounding").value == "hundredth") {
			
			if (document.getElementById("enter-math-equation").value.split(".")[1].length <= 3) {
				
				document.getElementById("answer-declaration").innerHTML += numberWithCommas(fixedvalue);
				
				return;
				
			} else {
				
				if (parseInt(document.getElementById("enter-math-equation").value.split(".")[1].charAt(3)) < 5) {
					
					document.getElementById("answer-declaration").innerHTML += (numberWithCommas(document.getElementById("enter-math-equation").value.split(".")[0]) + "." + (fixedvalue.split(".")[1].slice(0, 3))).toString();
					
					return;
					
				} else {
					
					document.getElementById("answer-declaration").innerHTML += (numberWithCommas(document.getElementById("enter-math-equation").value.split(".")[0]) + "." + document.getElementById("enter-math-equation").value.split(".")[1].slice(0, 2) + (parseInt(document.getElementById("enter-math-equation").value.split(".")[1].charAt(2)) + 1).toString()).toString();
					
					return;
					
				}
				
			}
			
		} else if (document.getElementById("rounding").value == "tenth") {
			
			if (document.getElementById("enter-math-equation").value.split(".")[1].length <= 2) {
				
				document.getElementById("answer-declaration").innerHTML += numberWithCommas(fixedvalue);
				
				return;
				
			} else {
				
				if (parseInt(document.getElementById("enter-math-equation").value.split(".")[1].charAt(2)) < 5) {
					
					document.getElementById("answer-declaration").innerHTML += (numberWithCommas(document.getElementById("enter-math-equation").value.split(".")[0]) + "." + (fixedvalue.split(".")[1].slice(0, 2))).toString();
					
					return;
					
				} else {
					
					document.getElementById("answer-declaration").innerHTML += (numberWithCommas(document.getElementById("enter-math-equation").value.split(".")[0]) + "." + document.getElementById("enter-math-equation").value.split(".")[1].slice(0, 1) + (parseInt(document.getElementById("enter-math-equation").value.split(".")[1].charAt(1)) + 1).toString()).toString();
					
					return;
					
				}
				
			}
			
		} else if (document.getElementById("rounding").value == "whole") {
			
			document.getElementById("answer-declaration").innerHTML += numberWithCommas((Math.round(parseInt(fixedvalue))));
			
		} else if (document.getElementById("rounding").value == "ten") {
			
			let ten = valuewithoutnegative.split(".")[0].length - 2;
			let one = valuewithoutnegative.split(".")[0].length - 1;
			
			if (valuewithoutnegative.split(".")[0].length >= 4) {
				
				if (parseInt(valuewithoutnegative.charAt(one)) < 5) {
					
					document.getElementById("answer-declaration").innerHTML += numberWithCommas(valuewithoutnegative.slice(0, one) + "0");
					
					return;
					
				} else {
					
					document.getElementById("answer-declaration").innerHTML += numberWithCommas(valuewithoutnegative.split(".")[0].slice(0, ten) + (parseInt(valuewithoutnegative.split(".")[0].charAt(ten)) + 1).toString() + "0");
					
					return;
					
				}
				
			} else {
				
			  if (parseInt(valuewithoutnegative.split(".")[0].charAt(0)) >= 0) {
				
				if (parseInt(valuewithoutnegative.split(".")[0].charAt(0)) < 5) {
					
					document.getElementById("answer-declaration").innerHTML += "0";
					
				} else {
					
					document.getElementById("answer-declaration").innerHTML += "10";
					
				}
				
			  } else {
				  
			  }
				
			}
			
		} else if (document.getElementById("rounding").value == "hundred") {
			
			let hundred = valuewithoutnegative.split(".")[0].length - 3;
			let ten = valuewithoutnegative.split(".")[0].length - 2;
				
				if (parseInt(valuewithoutnegative.charAt(ten)) < 5) {
					
					document.getElementById("answer-declaration").innerHTML += numberWithCommas(fixedvalue.split(".")[0].slice(0, ten) + "0");
					
					return;
					
				} else {
					
					document.getElementById("answer-declaration").innerHTML += numberWithCommas(fixedvalue.split(".")[0].slice(0, hundred) + (parseInt(fixedvalue.split(".")[0].charAt(hundred)) + 1).toString() + "0");
					
					return;
					
				}
			
		} else if (document.getElementById("rounding").value == "thousand") {
			
			let thousand = valuewithoutnegative.split(".")[0].length - 4;
			let hundred = valuewithoutnegative.split(".")[0].length - 3;
				
				if (parseInt(fixedvalue.charAt(hundred)) < 5) {
					
					document.getElementById("answer-declaration").innerHTML += numberWithCommas(ffixedvalue.split(".")[0].slice(0, hundred) + "0");
					
					return;
					
				} else {
					
					document.getElementById("answer-declaration").innerHTML += numberWithCommas(fixedvalue.split(".")[0].slice(0, thousand) + (parseInt(fixedvalue.split(".")[0].charAt(thousand)) + 1).toString() + "0");
					
					return;
					
				}
			
		} else if (document.getElementById("rounding").value == "million") {
			
			let million = valuewithoutnegative.split(".")[0].length - 7;
			let hundredthousand = valuewithoutnegative.split(".")[0].length - 6;
			
			if (valuewithoutnegative.split(".")[0].length <= 6) {
				
				if (parseInt(valuewithoutnegative.split(".")[0]) < 500000) {
					
					document.getElementById("answer-declaration").innerHTML += "0";
					
					return;
					
				} else {
					
					document.getElementById("answer-declaration").innerHTML += numberWithCommas("1000000");
					
					return;
					
				}
				
			} else {
				
				if (parseInt(valuewithoutnegative.split(".")[0].charAt(hundredthousand)) < 5) {
					
					document.getElementById("answer-declaration").innerHTML += numberWithCommas(valuewithoutnegative.split(".")[0].slice(0, hundredthousand));
				
				}
				
			}
			
		}
			
			
		
	} else if (type == "evenodd") {
		
		if (typeof (eval(fixedvalue)) == "number" && !isNaN(eval(fixedvalue))) {
			
			if (eval(fixedvalue) % 2 == 0) {
				
				document.getElementById("answer-declaration").innerHTML = "Answer: ";
				document.getElementById("answer-declaration").innerHTML += "Even.";
				
				return;
				
			} else {
				
				document.getElementById("answer-declaration").innerHTML = "Answer: ";
				document.getElementById("answer-declaration").innerHTML += "Odd.";
				
				return;
				
			}
			
		} else {
			
			errorMathEquation();
			
			return;
			
		}
		
	} else if (type == "abs") {
		
		if (typeof (eval(fixedvalue)) == "number" && !isNaN(eval(fixedvalue))) {
			
			document.getElementById("answer-declaration").innerHTML = "Answer: ";
			document.getElementById("answer-declaration").innerHTML += (Math.abs(eval(fixedvalue))).toString();
			
			return;
			
		} else {
			
			errorMathEquation();
			
			return;
			
		}
		
	}
		
		
	
}













}