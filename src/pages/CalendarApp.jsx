import Section from "../layout/Section";
import Calendar from 'react-calendar';
import { useState } from "react";
import '../styles/calendar.css';
import 'react-calendar/dist/Calendar.css';

const CalendarApp = (props) => {
	document.title = 'Calendar - React Mini Apps'

	const [date, setDate] = useState(new Date());

	return (
		<Section className={props.componentClass}>
			<Calendar onChange={setDate} value={date}></Calendar>
		</Section>
	);
}

export default CalendarApp;
