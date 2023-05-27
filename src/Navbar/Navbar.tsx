import NavbarButton from './NavbarButton';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className="border-b-2 border-gray-300">
			<div className="px-12 py-3 mx-auto">
				<div className="flex justify-between">
					<Link href="/">
						<div className="flex h-max mt-0 ring-2 text-gray-500 ring-highlight hover:bg-highlight hover:text-white rounded-full py-1 px-6 ease-in duration-100">
							<button
								type="button"
								className=""
							>
								<svg
									aria-hidden="true"
									className="w-6 h-6"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path d="M13 23h-6v-6.065c.626-.155 1.04-.496 1.319-1.046 2.152.773 3.647-2.303 1.819-3.556.949-1.116.245-2.727-1.207-2.522-.698-2.361-4.151-2.379-4.85 0-1.405-.227-2.186 1.199-1.385 2.289-1.648 1.404-.105 4.036 1.872 3.467.217.703.78 1.184 1.432 1.357v6.076h-2v-4.877c-.304-.239-.551-.515-.546-.51-2.001-.266-3.454-2.114-3.454-4.069 0-.583.129-1.173.41-1.735-.322-1.653.654-3.337 2.356-3.874l.018-.006c.827-1.162 2.152-1.823 3.517-1.893l5.682-5.036 12.017 10.647-1.33 1.491-10.687-9.469-3.284 2.908c.308.164.595.36.855.59l2.419-2.149c1.126.998 2.255 1.995 3.384 2.993l2.258 1.994 3.385 2.995v10h-6v-5h-2v5zm-2-5.585c-.713.445-1.259.529-2 .585v3h2v-3.585zm1.415-1.406l4.585-.009v5h2v-7.117l-7.027-6.196-.813.72c1.124.795 1.697 2.21 1.351 3.614.646 1.147.669 2.693-.096 3.988m-5.962-3.688c1.495-1.022 3.241.769 2.302 2.224.002-1.472-.852-2.279-2.302-2.224m-2.118 1.19c-1.247-1.865 1.004-4.164 2.904-2.894-1.892-.032-2.946 1.043-2.904 2.894" />
								</svg>
							</button>
						</div>
					</Link>
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
