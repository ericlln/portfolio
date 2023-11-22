export default function Background() {
    return (
        <>
            <div className="collapse md:visible">
                <div className="absolute -right-0 mr-36 mt-16 h-72 w-72 rounded-full bg-highlight opacity-70 mix-blend-multiply blur-3xl filter"></div>
                <div className="absolute -right-0 mr-72 mt-48 h-96 w-1/4 rounded-full bg-red-100 opacity-70 mix-blend-multiply blur-3xl filter"></div>
                <div className="mr-30 absolute -right-0 mt-96 h-72 w-72 rounded-full bg-blue-100 opacity-70 mix-blend-multiply blur-3xl filter"></div>
            </div>
        </>
    );
}
