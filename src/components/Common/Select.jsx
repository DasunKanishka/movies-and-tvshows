import { Fragment } from 'react';

const Select = ({ name, label, value, options, onChange, ...rest }) => {
	return (
		<Fragment>
			<label htmlFor={name} className="form-label">
				{label}
			</label>

			<select
				name={name}
				className="form-select form-select-lg"
				onChange={element => onChange(element)}
				value={value}
				{...rest}
			>
				<option value="/" />

				{options.map(option => (
					<option key={option.id} value={option.id}>
						{option.label}
					</option>
				))}
			</select>
		</Fragment>
	);
};

export default Select;
