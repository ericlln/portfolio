import Heading from '@/src/Heading';
import Navbar from '@/src/Navbar/Navbar';

export default function Home() {
	return (
		<div className="relative">
			<div className="absolute -right-0 mr-36 mt-16 w-72 h-72 bg-highlight rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
			<div className="absolute -right-0 mr-72 mt-48 w-1/4 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
			<div className="absolute -right-0 mr-30 mt-96 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
			<Navbar />
			<Heading />
		</div>
	);
}
