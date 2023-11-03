import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../features/modal";
import { slideNumber, nextSlide, prevSlide, goToSlide } from "../../features/slide";
import SlideBtn from "../Buttons/SlideBtn/SlideBtn";

import "./Modal.css";

export default function Modal({ data, content }) {
	const dispatch = useDispatch();
	const slide = useSelector((state) => state.slide.value);

	const length = data.length;

	return (
		<div className='modal'>
			<div className='modal-content'>
				<SlideBtn
					moveSlide={prevSlide}
					direction={"prev"}
					data={data}
					length={length}
				/>

				<div className='slide'>
					{content}
					<div className='dots-container'>
						<div className="dot">{`${slide + 1} / ${data.length}`}</div>
					</div>
				</div>

				<SlideBtn
					moveSlide={nextSlide}
					direction={"next"}
					data={data}
					length={length}
				/>

				<div
					className='modal-btn-close'
					onClick={() => dispatch(closeModal(), dispatch(slideNumber(0)))}
				>
					<button>
						<i className='bx bx-x'></i>
					</button>
				</div>
			</div>
		</div>
	);
}
