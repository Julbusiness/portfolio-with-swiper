import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../../features/modal";
import { slideNumber } from "../../../features/slide";
import { cardNumber } from "../../../features/card";
import Bandeau from "../../../components/Bandeau/Bandeau";
import imageBandeau from "/assets/images/bandeaux/visitCard.png";
import Title from "../../../components/Title/Title";
import data from "../../../data/data.json";
import LeftCard from "../../../components/Cards/LeftCard/LeftCard";
import Modal from "../../../components/Modal/Modal";

import "./VisitCard.css";

export default function VisitCard() {
	const modal = useSelector((state) => state.modal);
	const card = useSelector((state) => state.card.value);
	const slide = useSelector((state) => state.slide.value);

	const dispatch = useDispatch();

	const visitCardData = data.portfolioData.visitCard;
	const modalData = visitCardData[card].modalImage;

	let content;
	content = visitCardData.map((card, index) => (
		<li
			key={card.id}
			onClick={() => {
				dispatch(openModal());
				dispatch(cardNumber(index));
				dispatch(slideNumber(0));
			}}
		>
			<LeftCard
				image={`/assets/images/visitCard/${card.image}`}
				title={card.title}
				text={card.text}
			/>
		</li>
	));

	let contentModal;
	contentModal = (
		<li key={modalData[slide].id}>
			<img
				src={`/assets/images/visitCard/${modalData[slide].image}`}
				alt=''
				className='image-modal'
			/>
		</li>
	);

	return (
		<section className='visitCard'>
			<Bandeau image={imageBandeau} />
			<div className='visitCard-container'>
				<div className='visitCard-wrapper'>
					<div className='title-start'>
						<Title title='Carte de visite' />
					</div>
					<div className='visitCard-cards'>
						<ul>
							{modal.value && <Modal data={modalData} content={contentModal} />}
							{visitCardData && content}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
