const Button = ({ label, onClick }) => {
	return (
		<button className="btn btn-dark btn-lg" onClick={onClick}>
			{label}
		</button>
	);
};

export default Button;
