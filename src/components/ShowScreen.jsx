const ShowScreren = ({ formData, shows }) => {
	return (
		<div className="meme-screen container mb-5">
			<h1 className="display-5">
				<strong>
					{formData.type} - {formData.title}
				</strong>
			</h1>

			<div className="container mt-5">
				<div className="row row-cols-4 g-4">
					{shows.map(show => {
						return (
							<div key={show.id} className="col">
								<div className="card px-0 m-0">
									<img
										src={
											show.Poster && show.Poster !== 'N/A'
												? show.Poster
												: 'https://via.placeholder.com/600x800?text=No+Poster'
										}
										className="card-img-top"
										alt={show.Title}
									/>

									<div className="card-body">
										<h5 className="card-title">
											{show.Title}
										</h5>

										<p className="card-text">
											<span className="badge bg-dark text-light">
												{show.Year}
											</span>
											<span className="badge bg-dark text-light ms-2">
												{show.imdbID}
											</span>
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ShowScreren;
