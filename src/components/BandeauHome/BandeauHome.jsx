import { useEffect, useRef } from "react";
import video from "/assets/videos/accueil.mp4";
import "./BandeauHome.css";

export default function BandeauHome() {
	const videoRef = useRef(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.play().catch((error) => {
				console.error(
					"La vidéo n'a pas pu être lancée automatiquement.",
					error
				);
			});
		}
	}, []);

	return (
		<div className='bandeauHome-container'>
			<video ref={videoRef} autoPlay>
				<source src={video} type='video/mp4' />
			</video>
		</div>
	);
}
