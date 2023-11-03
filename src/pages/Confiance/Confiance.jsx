import Bandeau from "../../components/Bandeau/Bandeau";
import imageBandeau from "/assets/images/bandeaux/confiance.png";
import Title from "../../components/Title/Title";
import data from "../../data/data.json";
import LeftCard from "../../components/Cards/LeftCard/LeftCard";
import "./Confiance.css";

export default function Confiance() {
	const confianceData = data.confianceData;

	let content;
	content = confianceData.map((item, index) => (
		<li key={item.id}>
			<LeftCard
				image={`/assets/images/confiance/${item.image}`}
				title={item.title}
				text={item.text}
			/>
		</li>
	));

	return (
		<section className='confiance'>
			<Bandeau image={imageBandeau} />
			<div className='confiance-container'>
				<div className='confiance-wrapper'>
					<div className='title-start'>
						<Title title="Ils m'ont fait confiance" />
					</div>
					<div className='confiance-cards'>
						<ul>{content}</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
