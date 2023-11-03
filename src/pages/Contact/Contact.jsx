import { Link } from "react-router-dom";
import Bandeau from "../../components/Bandeau/Bandeau";
import image from "/assets/images/bandeaux/contact.png";
import contactImage from "/assets/images/accueil/contact.jpg";
import profilImage from "/assets/images/accueil/moi.jpg";
import Title from "../../components/Title/Title";
import "./Contact.css";

export default function Contact() {
	return (
		<section className='contact'>
			<Bandeau image={image} />
			<div className='contact-container'>
				<div className='contact-wrapper'>
					<div className='title-start'>
						<Title title='Contact' />
					</div>
					<div className='contact-card'>
						<div className='contact-card-pics'>
							<div className='profil-image'>
								<img src={profilImage} alt='' />
							</div>
							<div className='contact-image'>
								<img src={contactImage} alt='' />
							</div>
						</div>
						<div className='contact-card-text'>
							<div className='pics-text'>
								<h2>Julien DUTRUCH</h2>
								<p className='tel'>06.76.13.88.26</p>
								<p className='email'>devprojules@gmail.com</p>
								<div className='reseaux'>
									<Link to='https://www.linkedin.com/in/juliendutruch/'>
										<i className='bx bxl-linkedin-square'></i>
									</Link>
									<Link to='https://github.com/Julbusiness'>
										<i className='bx bxl-github'></i>
									</Link>
									<Link to='https://twitter.com/devprojules33'>
										<i className='bx bxl-twitter'></i>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
