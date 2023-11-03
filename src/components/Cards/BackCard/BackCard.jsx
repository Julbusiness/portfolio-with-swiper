import "./BackCard.css";

export default function BackCard(props) {
	return (
		<div className='back-card'>
			<div className='back-card-image'>
				<img src={props.image} alt='' />
			</div>
			<div className='back-card-text'>
				<h2>{props.title}</h2>
			</div>
		</div>
	);
}
