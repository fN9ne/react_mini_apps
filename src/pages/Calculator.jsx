import Section from "../layout/Section";
import "../styles/calculator.css";
import { useRef, useEffect } from "react";
import * as math from "mathjs";

const Calculator = (props) => {
	document.title = 'Calculator - React Mini Apps'

	const buttonRefs = {
		1: useRef(),
		2: useRef(),
		3: useRef(),
		4: useRef(),
		5: useRef(),
		6: useRef(),
		7: useRef(),
		8: useRef(),
		9: useRef(),
		0: useRef(),
		dot: useRef(),
		result: useRef(),
		divide: useRef(),
		plus: useRef(),
		minus: useRef(),
		multiply: useRef(),
		erase: useRef(),
		clear: useRef(),
	}

	function activeButton(ref) {
		ref.current.classList.add('active');
		setTimeout(() => {
			ref.current.classList.remove('active');
		}, 200);
	}

	function handleKeyPress(event) {
		const key = event.key;
		// eslint-disable-next-line
		switch (key) {
			case '1':
				button1();
				activeButton(buttonRefs[1]);
				break;
			case '2':
				button2();
				activeButton(buttonRefs[2]);
				break;
			case '3':
				button3();
				activeButton(buttonRefs[3]);
				break;
			case '4':
				button4();
				activeButton(buttonRefs[4]);
				break;
			case '5':
				button5();
				activeButton(buttonRefs[5]);
				break;
			case '6':
				button6();
				activeButton(buttonRefs[6]);
				break;
			case '7':
				button7();
				activeButton(buttonRefs[7]);
				break;
			case '8':
				button8();
				activeButton(buttonRefs[8]);
				break;
			case '9':
				button9();
				activeButton(buttonRefs[9]);
				break;
			case '0':
				button0();
				activeButton(buttonRefs[0]);
				break;
			case 'Enter':
				event.preventDefault();
				result();
				activeButton(buttonRefs.result);
				break;
			case '/':
				divide();
				activeButton(buttonRefs.divide);
				break;
			case '-':
				minus();
				activeButton(buttonRefs.minus);
				break;
			case '*':
				multiply();
				activeButton(buttonRefs.multiply);
				break;
			case '+':
				plus();
				activeButton(buttonRefs.plus);
				break;
		}
		if (event.key === 'Backspace' && event.shiftKey === false) {
			erase();
			activeButton(buttonRefs.erase);
		}
		if (event.key === 'Backspace' && event.shiftKey) {
			clear();
			activeButton(buttonRefs.clear);
		}
	}

	useEffect(() => {
		document.addEventListener('keydown', handleKeyPress);
		return function () {
			document.removeEventListener('keydown', handleKeyPress);
		}
		// eslint-disable-next-line
	}, []);

	const field = useRef();

	const clear = () => field.current.value = 0;
	const button1 = () => field.current.value !== '0' ? field.current.value += 1 : field.current.value = 1;
	const button2 = () => field.current.value !== '0' ? field.current.value += 2 : field.current.value = 2;
	const button3 = () => field.current.value !== '0' ? field.current.value += 3 : field.current.value = 3;
	const button4 = () => field.current.value !== '0' ? field.current.value += 4 : field.current.value = 4;
	const button5 = () => field.current.value !== '0' ? field.current.value += 5 : field.current.value = 5;
	const button6 = () => field.current.value !== '0' ? field.current.value += 6 : field.current.value = 6;
	const button7 = () => field.current.value !== '0' ? field.current.value += 7 : field.current.value = 7;
	const button8 = () => field.current.value !== '0' ? field.current.value += 8 : field.current.value = 8;
	const button9 = () => field.current.value !== '0' ? field.current.value += 9 : field.current.value = 9;
	const button0 = () => {
		if (field.current.value !== '0') {
			if (!['-', '+', '/', '*'].includes(field.current.value[field.current.value.length - 1])) {
				field.current.value += 0;
			}
		}
	}
	const dot = () => field.current.value.indexOf('.') === -1 ? field.current.value += '.' : null;
	const divide = () => {
		if (['-', '+', '/', '*'].includes(field.current.value[field.current.value.length - 1])) {
			field.current.value = field.current.value.slice(0, -1);
		}
		field.current.value += '/';
	}
	const multiply = () => {
		if (['-', '+', '/', '*'].includes(field.current.value[field.current.value.length - 1])) {
			field.current.value = field.current.value.slice(0, -1);
		}
		field.current.value += '*';
	}
	const plus = () => {
		if (['-', '+', '/', '*'].includes(field.current.value[field.current.value.length - 1])) {
			field.current.value = field.current.value.slice(0, -1);
		}
		field.current.value += '+';
	}
	const minus = () => {
		if (['-', '+', '/', '*'].includes(field.current.value[field.current.value.length - 1])) {
			field.current.value = field.current.value.slice(0, -1);
		}
		field.current.value += '-';
	}
	const erase = () => {
		if (field.current.value !== '0') {
			if (field.current.value.length === 1) {
				field.current.value = 0;
			} else {
				field.current.value = field.current.value.slice(0, -1);
			}
		}
	}

	const result = () => field.current.value = math.evaluate(field.current.value);

	return (
		<Section className={props.componentClass}>
			<div className="calculator-block">
				<input disabled ref={field} type="text" className="calculator__display" value="0" />
				<div className="calculator__body">
					<button ref={buttonRefs[1]} onClick={button1} className="calculator__button calculator__button-1">1</button>
					<button ref={buttonRefs[2]} onClick={button2} className="calculator__button calculator__button-2">2</button>
					<button ref={buttonRefs[3]} onClick={button3} className="calculator__button calculator__button-3">3</button>
					<button ref={buttonRefs[4]} onClick={button4} className="calculator__button calculator__button-4">4</button>
					<button ref={buttonRefs[5]} onClick={button5} className="calculator__button calculator__button-5">5</button>
					<button ref={buttonRefs[6]} onClick={button6} className="calculator__button calculator__button-6">6</button>
					<button ref={buttonRefs[7]} onClick={button7} className="calculator__button calculator__button-7">7</button>
					<button ref={buttonRefs[8]} onClick={button8} className="calculator__button calculator__button-8">8</button>
					<button ref={buttonRefs[9]} onClick={button9} className="calculator__button calculator__button-9">9</button>
					<button ref={buttonRefs[0]} onClick={button0} className="calculator__button calculator__button-0">0</button>
					<button ref={buttonRefs.dot} onClick={dot} className="calculator__button calculator__button-dot">.</button>
					<button ref={buttonRefs.result} onClick={result} className="calculator__button calculator__button-result">=</button>
					<button ref={buttonRefs.divide} onClick={divide} className="calculator__button calculator__button-divide">/</button>
					<button ref={buttonRefs.multiply} onClick={multiply} className="calculator__button calculator__button-multiply">x</button>
					<button ref={buttonRefs.plus} onClick={plus} className="calculator__button calculator__button-plus">+</button>
					<button ref={buttonRefs.minus} onClick={minus} className="calculator__button calculator__button-minus">-</button>
					<button ref={buttonRefs.erase} onClick={erase} className="calculator__button calculator__button-erase">&lt;-</button>
					<button ref={buttonRefs.clear} onClick={clear} className="calculator__button calculator__button-clear">Clear</button>
				</div>
			</div>
		</Section>
	);
}

export default Calculator;
