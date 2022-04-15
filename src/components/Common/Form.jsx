import Joi from 'joi-browser';
import { useState } from 'react';
import Input from './input';
import Select from './select';

const Form = () => {
	const { data, setData } = useState({});

	const renderInput = (name, label, type) => {
		return (
			<Input
				name={name}
				type={type}
				label={label}
				value={data[id]}
				onChange={handleChange}
			/>
		);
	};

	const renderSelect = (name, label, options) => {
		return (
			<Select
				name={name}
				label={label}
				options={options}
				value={data[id]}
				onChange={handleChange}
			/>
		);
	};

	const renderButton = label => {
		return (
			<button
				type="submit"
				className="btn btn-dark"
				onClick={handleSubmit}
			>
				{label}
			</button>
		);
	};

	const handleChange = ({ currentTarget }) => {
		const data = { ...data };
		data[currentTarget.id] = currentTarget.value;

		// ? kinda late
		setData(data);
	};

	const handleSubmit = e => {
		e.preventDefault();

		this.doSubmit();
	};
};

export default Form;
