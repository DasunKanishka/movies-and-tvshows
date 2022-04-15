import { Fragment, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ShowForm from './ShowForm';
import ShowScreen from './ShowScreen';

const Show = () => {
	const [formData, setFormData] = useState({ title: '', type: '' });
	const [shows, setShows] = useState([]);
	const [renderScreen, setRenderScreen] = useState(false);

	const handleChange = element => {
		const { name, value } = element.target;

		setFormData(prevFormData => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleClick = () => {
		formData.title === '' || formData.type === ''
			? console.log('Show title and Show type are required!')
			: getShows(formData.type, formData.title);
	};

	const getShows = (type, title) => {
		if (formData.type === '' || formData.title === '') return;

		const apikey = '9cb6d8dc';

		const options = {
			method: 'GET',
		};

		fetch(
			`http://www.omdbapi.com/?apikey=${apikey}&s=${title}&type=${type}`,
			options
		)
			.then(response => response.json())
			.then(data => setShows(data.Search))
			.then(() => {
				setShows(prevShows =>
					prevShows.map(prevShow => ({
						...prevShow,
						id: nanoid(),
					}))
				);
			});
	};

	useEffect(() => shows.length > 0 && setRenderScreen(true), [shows]);

	return (
		<Fragment>
			<ShowForm
				showsData={formData}
				onClick={handleClick}
				onChange={handleChange}
			/>

			{renderScreen && <ShowScreen formData={formData} shows={shows} />}
		</Fragment>
	);
};

export default Show;
