import image from "/assets/images/bandeaux/skills.png";
import Bandeau from "../../components/Bandeau/Bandeau";
import LeftCard from "../../components/Cards/LeftCard/LeftCard";
import Card from "../../components/Cards/Card/Card";
import Title from "../../components/Title/Title";
import data from "../../data/data.json";

import "./Skills.css";

export default function Skills() {
	const formationsData = data.skillsData.formations;
	const hardSkillsData = data.skillsData.hardSkills;
	const experiencesData = data.skillsData.experiences;
	const softSkillsData = data.skillsData.softSkills;

	let experiencesContent;
	experiencesContent = experiencesData.map((card, index) => (
		<li key={card.id}>
			<LeftCard
				image={`/assets/images/cards/${card.image}`}
				title={card.title}
				text={card.text}
			/>
		</li>
	));

	let formationsContent;
	formationsContent = formationsData.map((card, index) => (
		<li key={card.id}>
			<LeftCard
				image={`/assets/images/cards/${card.image}`}
				title={card.title}
				text={card.text}
			/>
		</li>
	));

	let hardSkillsContent;
	hardSkillsContent = hardSkillsData.map((card, index) => (
		<li key={card.id}>
			<Card
				image={`/assets/images/cards/${card.image}`}
			/>
		</li>
	));

	let softSkillsContent;
	softSkillsContent = softSkillsData.map((card, index) => (
		<li key={card.id}>
			<LeftCard
				image={`/assets/images/cards/${card.image}`}
				title={card.title}
				text={card.text}
			/>
		</li>
	));



	return (
		<section className='skills'>
			<Bandeau image={image} />
			<div className='skills-container'>
				<div className='skills-wrapper'>
					<div className='title-start'>
						<Title title='Expériences' />
					</div>
					<div className='category experience-content'>
						<div className='title-content'>
							<ul>{experiencesContent}</ul>
						</div>
					</div>
					<div className='title-start'>
						<Title title='Formations' />
					</div>
					<div className='category formation-content'>
						<div className='title-content'>
							<ul>{formationsContent}</ul>
						</div>
					</div>
					<div className='title-start'>
						<Title title='Hard skills' />
					</div>
					<div className='category hardskill-content'>
						<div className='title-content'>
							<ul>{hardSkillsContent}</ul>
						</div>
					</div>
					<div className='title-start'>
						<Title title='Soft skills' />
					</div>
					<div className='category softskill-content'>
						<div className='title-content'>
							<ul>{softSkillsContent}</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
