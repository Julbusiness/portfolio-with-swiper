import './SlideBtn.css'
import { useDispatch } from "react-redux";

export default function SlideBtn({direction, moveSlide, length}) {

  const dispatch = useDispatch();

	return (
		<div>
			<div
				className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
				onClick={() => dispatch(moveSlide(length))}
			>
				<button>
          {direction === "next" ? <i className='bx bx-right-arrow-alt'></i> : <i className='bx bx-left-arrow-alt'></i>}
				</button>
			</div>
		</div>
	);
}
