import BandeauHome from "../../components/BandeauHome/BandeauHome";
import data from "../../data/data.json";
import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import Card from "../../components/Cards/Card/Card";
import "./Home.css";

export default function Home() {
	const homeData = data.homeData.links;
	let content;

	content = homeData.map((card, index) => (
		<li key={card.id}>
			<Link to={card.route} className='link'>
				<div className='home-card-image'>
					<Card image={`/assets/images/accueil/${card.image}`} />
				</div>
				<h3 className='home-card-title'>{card.title}</h3>
			</Link>
		</li>
	));

	return (
		<section className='home'>
			<BandeauHome />
			<div className='home-container'>
				<div className='home-wrapper'>
					<div className='title-start'>
						<Title title='Transformez vos idées en réalités digitales' />
					</div>
					<div className='home-cards'>
						<ul>{content}</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
