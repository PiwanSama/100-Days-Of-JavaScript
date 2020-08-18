$(document).ready(function () {
	let calculation = [];
	let text = '';
	let numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

	$('.number-div li').click(function () {
		var item = $(this).text();
		if (item == '=') {
			// Check for incomplete calculation statement
			var lastItem = calculation[calculation.length - 1];
			if (numArray.includes(lastItem)) {
				//Perform the calculation
				var answer = eval(text);
				setScreenText(answer);
			} else {
				//Notify the user that the calculation string is incorrect
				setScreenText('Syntax Error!');
			}
		} else {
			//Handle unknown operators
			switch (item) {
				case 'x':
					addToCalculationString('*');
					break;
				case '÷':
					addToCalculationString('/');
					break;
				default:
					addToCalculationString(item);
			}
		}
	});

	$('#clear').click(function () {
		//Clear the stack, calculation string and the reset the screen text
		calculation = [];
		text = '';
		setScreenText('');
	});

	function addToCalculationString(item) {
		calculation.push(item);
		text += calculation[calculation.length - 1];
		setScreenText(text);
	}

	function setScreenText(str) {
		$('#screen').text(str);
	}
});
