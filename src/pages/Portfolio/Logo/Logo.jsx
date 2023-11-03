import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../../features/modal";
import { slideNumber } from "../../../features/slide";
import Bandeau from "../../../components/Bandeau/Bandeau";
import imageBandeau from "/assets/images/bandeaux/logo.png";
import Title from "../../../components/Title/Title";
import data from "../../../data/data.json";
import Modal from "../../../components/Modal/Modal";

import "./Logo.css";

export default function Logo() {
	const modal = useSelector((state) => state.modal);
	const slide = useSelector((state) => state.slide.value);
	const dispatch = useDispatch();

	const logoData = data.portfolioData.logo;

	let content;
	content = logoData.map((card, index) => (
		<li
			className='card-image'
			key={index}
			onClick={() => {
				dispatch(openModal());
				dispatch(slideNumber(index));
			}}
		>
			<img
				src={`/assets/images/logos/${card.image}`}
				alt=''
				className='image-grid'
			/>
		</li>
	));

	let contentModal;
	contentModal = (
		<img
			src={`/assets/images/logos/${logoData[slide].image}`}
			alt=''
			key={logoData[slide].id}
			className='image-modal'
		/>
	);

	return (
		<section className='logo'>
			<Bandeau image={imageBandeau} />
			<div className='logo-container'>
				<div className='logo-wrapper'>
					<div className='title-start'>
						<Title title='Logo' />
					</div>
					<div className='logo-cards'>
						<ul>
							{modal.value && <Modal data={logoData} content={contentModal} />}
							{logoData && content}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
