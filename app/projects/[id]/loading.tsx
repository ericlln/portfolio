import Navbar from '@/src/Navbar/Navbar';

export default function LoadingProject() {
	return (
		<div>
			<Navbar />
			<div className="flex h-screen">
				<div className='m-auto'>
					<h1 className="text-center text-gray-500 text-2xl font-semibold">Loading...</h1>
				</div>
			</div>
		</div>
	);
}
