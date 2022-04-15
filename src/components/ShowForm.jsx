import Input from './Common/Input';
import Select from './Common/Select';
import Button from './Common/Button';

const ShowForm = ({ showsData, onChange, onClick }) => {
	const showTypes = [
		{ id: 'movie', label: 'Movies' },
		{ id: 'series', label: 'TV Shows' },
		{ id: 'episode', label: 'Episodes' },
	];

	return (
		<div className="container">
			<div className="row pt-5 mb-4">
				<div className="col">
					<Input
						name="title"
						type="text"
						label="Show"
						value={showsData.title}
						onChange={onChange}
					/>
				</div>

				<div className="col">
					<Select
						name="type"
						label="Show Type"
						value={showsData.type}
						options={showTypes}
						onChange={onChange}
					/>
				</div>
			</div>

			<div className="d-grid mb-5">
				<Button onClick={onClick} label="Generate" />
			</div>
		</div>
	);
};

export default ShowForm;
