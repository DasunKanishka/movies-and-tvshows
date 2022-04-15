import { Fragment } from 'react';

const Input = ({ name, type = 'text', label, value, onChange, ...rest }) => {
	return (
		<Fragment>
			<label htmlFor={name} className="form-label">
				{label}
			</label>

			<input
				name={name}
				type={type}
				className="form-control form-control-lg"
				value={value}
				onChange={element => onChange(element)}
				{...rest}
			></input>
		</Fragment>
	);
};

export default Input;
