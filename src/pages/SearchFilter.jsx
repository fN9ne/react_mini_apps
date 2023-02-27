import Section from "../layout/Section";
import "../styles/search-filter.css";
import { useState } from "react";
import { ReactComponent as SearchIcon } from "../icons/search.svg";
import JSONDATA from "../films.json";

const SearchFilter = (props) => {
	document.title = 'Search Filter - React Mini Apps';

	const [search, setSearch] = useState('');

	return (
		<Section className={props.componentClass}>
			<div className={`${props.componentClass}__field`}>
				<div className={`${props.componentClass}__icon`}>
					<SearchIcon></SearchIcon>
				</div>
				<input onChange={(event) => { setSearch(event.target.value) }} type="text" placeholder="Type here" className={`${props.componentClass}__input`} />
			</div>
			<ul className={`${props.componentClass}__list`}>
				{/* eslint-disable-next-line */}
				{JSONDATA.filter((item) => {
					if (search === "") {
						return item;
					} else if (item.name.toLowerCase().includes(search.toLowerCase())) {
						return item;
					}
				}).map((item, index) => <li key={index} className={`${props.componentClass}__item`}>{item.name}</li>)}
			</ul>
		</Section>
	);
}

export default SearchFilter;