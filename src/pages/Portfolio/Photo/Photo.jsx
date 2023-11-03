import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../../features/modal";
import { slideNumber } from "../../../features/slide";
import Bandeau from "../../../components/Bandeau/Bandeau";
import imageBandeau from "/assets/images/bandeaux/photo.png";
import Title from "../../../components/Title/Title";
import data from "../../../data/data.json";
import Modal from "../../../components/Modal/Modal";

import "./Photo.css";

export default function Photo() {
	const modal = useSelector((state) => state.modal);
	const slide = useSelector((state) => state.slide.value);
	const dispatch = useDispatch();

	const photoData = data.portfolioData.photo;

	let content;
	content = photoData.map((card, index) => (
		<div
			className='card-image'
			key={index}
			onClick={() => {
				dispatch(openModal());
				dispatch(slideNumber(index));
			}}
		>
			<img
				src={`/assets/images/photos/${card.image}`}
				alt=''
				className='image-grid'
			/>
		</div>
	));

	let contentModal;
	contentModal = (
		<img
			src={`/assets/images/photos/${photoData[slide].image}`}
			alt=''
			key={photoData[slide].id}
			className='image-modal'
		/>
	);

	return (
		<section className='photo'>
			<Bandeau image={imageBandeau} />
			<div className='photo-container'>
				<div className='photo-wrapper'>
					<div className='title-start'>
						<Title title='Photo' />
					</div>
					<div className='photo-cards'>
						<ul>
							{modal.value && <Modal data={photoData} content={contentModal} />}
							{photoData && content}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
