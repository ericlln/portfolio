import NavbarButton from './NavbarButton';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className="border-b-2 border-gray-300">
			<div className="px-12 py-3 mx-auto">
				<div className="flex justify-between">
					<Link href="/">Icon</Link>
					<div className="flex mt-1">
						<NavbarButton href="/projects">Projects</NavbarButton>
						<NavbarButton href="/gallery">Gallery</NavbarButton>
						<NavbarButton href="https://www.google.com" externalLink={true}>
							Resume
						</NavbarButton>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
