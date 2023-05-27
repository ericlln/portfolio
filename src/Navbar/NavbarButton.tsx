import { ReactNode } from 'react';
import Link from 'next/link';

type NavbarButtonProps = { href: string; externalLink?: boolean; children: ReactNode };

const NavbarButton = ({ href, externalLink, children }: NavbarButtonProps) => {
	return (
		<div className="px-6 py-1">
			<h1 className="text-gray-500 text-sm font-semibold hover:text-highlight hover:-translate-y-0.5 ease-in duration-100">
				{externalLink ? <a href={href}>{children}</a> : <Link href={href}>{children}</Link>}
			</h1>
		</div>
	);
};

export default NavbarButton;
