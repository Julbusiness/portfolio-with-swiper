import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../../features/modal";
import { cardNumber } from "../../../features/card";
import Bandeau from "../../../components/Bandeau/Bandeau";
import imageBandeau from "/assets/images/bandeaux/web.png";
import Title from "../../../components/Title/Title";
import data from "../../../data/data.json";
import LeftCard from "../../../components/Cards/LeftCard/LeftCard";
import Modal from "../../../components/Modal/Modal";

import "./Web.css";

export default function Web() {
	const modal = useSelector((state) => state.modal);
	const card = useSelector((state) => state.card.value);
	const slide = useSelector((state) => state.slide.value);
	const dispatch = useDispatch();

	const webData = data.portfolioData.web;
	const modalData = webData[card].modalImage;

	let content;
	content = webData.map((card, index) => {
		return (
			<li
				key={card.id}
				onClick={() => {
					dispatch(openModal());
					dispatch(cardNumber(index));
					// dispatch(slideNumber(0));
				}}
			>
				<LeftCard
					image={`/assets/images/cards/${card.image}`}
					title={card.title}
					text={card.text}
					project={card.project}
				/>
			</li>
		);
	});

	let contentModal;
	contentModal = (
		<li key={modalData[slide].id}>
			<img
				src={`/assets/images/sites/${modalData[slide].image}`}
				className='image-modal'
			/>
		</li>
	);

	return (
		<section className='web'>
			<Bandeau image={imageBandeau} />
			<div className='web-container'>
				<div className='web-wrapper'>
					<div className='title-start'>
						<Title title='Sites Web' />
					</div>
					<div className='web-cards'>
						<ul>
							{modal.value && <Modal data={modalData} content={contentModal} />}
							{webData && content}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
