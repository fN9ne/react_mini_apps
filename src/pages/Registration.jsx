import Section from "../layout/Section";
import { useState, useRef, useEffect, createContext, useContext } from "react";
import "../styles/registration.css";

const Context = createContext();

const Registration = (props) => {
	document.title = 'Registration - React Mini Apps';

	const [userData, setUserData] = useState({});

	useEffect(() => {
		setUserData(JSON.parse(window.localStorage.getItem('user')))
	}, []);

	useEffect(() => {
		window.localStorage.setItem('user', JSON.stringify(userData));
	}, [userData]);

	return (
		<Context.Provider value={{ userData, setUserData }}>
			<Section className={props.componentClass}>
				{userData !== null ? <Info /> : <RegistrationForm />}
			</Section>
		</Context.Provider>
	);
}

export default Registration;

function RegistrationForm() {
	const className = "registration";

	const { setUserData } = useContext(Context);

	const fields = {
		firstName: useRef(),
		lastName: useRef(),
		email: useRef(),
	}

	let data = {}

	function sendForm(event) {
		event.preventDefault();

		let valid = false;

		for (let item of Object.keys(fields)) {
			data[item] = fields[item].current.value;
		}

		function validate(condition, element) {
			valid = false;
			addError(element.current);
			if (condition) {
				valid = true;
				removeError(element.current);
			}
		}
		function addError(element) {
			element.parentNode.classList.add('invalid');
		}
		function removeError(element) {
			element.parentNode.classList.remove('invalid');
		}

		validate(data.firstName !== '', fields.firstName);
		validate(data.lastName !== '', fields.lastName);
		validate(/\w+@\w+\.\w+/.test(data.email), fields.email);

		if (valid) {
			setUserData(data);
		}
	}

	return (
		<form action="#" onSubmit={sendForm} className={className}>
			<label className={`${className}__item`}>
				<input ref={fields.firstName} type="text" placeholder="First name" className={`${className}__input`} />
				<div className={`${className}__tip`}>The field should not be empty</div>
			</label>
			<label className={`${className}__item`}>
				<input ref={fields.lastName} type="text" placeholder="Last name" className={`${className}__input`} />
				<div className={`${className}__tip`}>The field should not be empty</div>
			</label>
			<label className={`${className}__item`}>
				<input ref={fields.email} type="text" placeholder="Email" className={`${className}__input`} />
				<div className={`${className}__tip`}>The meail should be in the format email@domen.domen</div>
			</label>
			<button className={`${className}__submit`}>Send</button>
		</form>
	);
}

function Info() {
	const className = "info"

	const { userData, setUserData } = useContext(Context);

	function removeUser() {
		setUserData(null);
	}

	return (
		<div className={className}>
			<div className={`${className}__item`}>
				<div className={`${className}__label`}>First name</div>
				<div className={`${className}__value`}>{userData.firstName}</div>
			</div>
			<div className={`${className}__item`}>
				<div className={`${className}__label`}>Last name</div>
				<div className={`${className}__value`}>{userData.lastName}</div>
			</div>
			<div className={`${className}__item`}>
				<div className={`${className}__label`}>Email</div>
				<div className={`${className}__value`}>{userData.email}</div>
			</div>
			<button className={`${className}__reset`} onClick={removeUser}>Delete user</button>
		</div>
	);
}