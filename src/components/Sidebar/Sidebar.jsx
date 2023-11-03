import { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoWhite from "/assets/Logo.png";
import "./Sidebar.css";

export default function Sidebar() {
	const [open, setOpen] = useState(false);
	const [showLogo, setShowLogo] = useState(false);

	const toggleMenu = () => {
		setOpen(!open);
		const toggle = document.querySelector(".sidebar");
		toggle.classList.toggle("open");
	};

	const showLogoOnScroll = () => {
		if (window.scrollY >= 80) {
			setShowLogo(true);
		} else {
			setShowLogo(false);
		}
	};

	window.addEventListener("scroll", showLogoOnScroll);

	return (
		<nav
			className={showLogo ? "sidebar active" : "sidebar"}
			onMouseOver={toggleMenu}
			onMouseOut={toggleMenu}
		>
			<div className='image-text'>
				<span className='image'>
					<img src={LogoWhite} alt='logo' />
				</span>
			</div>

			<ul className='menu-links'>
				<li className='nav-link'>
					<NavLink to='/'>
						<i className='bx bx-grid-alt icon'></i>
						<span className='text nav-text'>Accueil</span>
					</NavLink>
				</li>
				<li className='nav-link'>
					<NavLink to='/apropos'>
						<i className='bx bx-face icon'></i>
						<span className='text nav-text'>À propos</span>
					</NavLink>
				</li>
				<li className='nav-link'>
					<NavLink to='/skills'>
						<i className='bx bx-bar-chart icon'></i>
						<span className='text nav-text'>Skills</span>
					</NavLink>
				</li>
				<li className='nav-link'>
					<NavLink to='/portfolio'>
						<i className='bx bx-code-alt icon'></i>
						<span className='text nav-text'>Portfolio</span>
					</NavLink>
				</li>
				<li className='nav-link'>
					<NavLink to='/confiance'>
						<i className='bx bx-heart icon'></i>
						<span className='text nav-text'>Ils m&apos;ont fait confiance</span>
					</NavLink>
				</li>
				<li className='nav-link'>
					<NavLink to='/contact'>
						<i className='bx bx-at icon'></i>
						<span className='text nav-text'>Contact</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
