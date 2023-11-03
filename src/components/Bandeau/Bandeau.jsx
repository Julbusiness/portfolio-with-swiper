import "./Bandeau.css";

export default function Bandeau(props) {
	return (
		<div className='bandeau-container'>
			<img src={props.image} alt='' />
		</div>
	);
}
