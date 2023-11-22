import { ReactNode } from 'react';
import Link from 'next/link';

interface NavbarButtonProps {
    href: string;
    externalLink?: boolean;
    children: ReactNode;
}

const NavbarButton = ({ href, externalLink, children }: NavbarButtonProps) => {
    return (
        <div className="px-6 py-1">
            <h1 className="text-md font-semibold text-gray-500 duration-100 ease-in hover:-translate-y-0.5 hover:text-highlight">
                {externalLink ? <a href={href}>{children}</a> : <Link href={href}>{children}</Link>}
            </h1>
        </div>
    );
};

export default NavbarButton;
