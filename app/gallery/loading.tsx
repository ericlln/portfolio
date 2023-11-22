import Navbar from '@/src/Navbar/Navbar';

export default function LoadingImages() {
    return (
        <div>
            <Navbar />
            <div className="flex h-screen">
                <div className="m-auto">
                    <h1 className="text-center text-2xl font-semibold text-gray-500">Loading...</h1>
                </div>
            </div>
        </div>
    );
}
