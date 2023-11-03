import "./Title.css";

export default function Title(props) {
	return (
		<div className='title-container'>
			<h2 className='title-content'>{props.title}</h2>
			<div className='line'></div>
			<div className='fat'></div>
		</div>
	);
}
