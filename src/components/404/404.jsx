import Bandeau from "../Bandeau/Bandeau";
import image from "/assets/images/bandeaux/notfound.png"
import { Link } from "react-router-dom";
import "./404.css";

export default function NotFound() {
	return (
		<section className='notfound'>
			<Bandeau image={image}/>
			<div className='notfound-container'>
				<div className='oops'>Oops !</div>
				<div className='text'>404 - Page Not Found</div>
				<Link to='/' className='liens'>
					Retour &agrave; l&rsquo;accueil
				</Link>
			</div>
		</section>
	);
}
