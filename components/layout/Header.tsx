import React from "react";

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
            <div className="bg-[#34967C] py-2 px-4 text-center text-white text-sm">
                <span>Overseas trip? Get the latest information on travel guides</span>
                <button className="ml-4 underline font-semibold">More Info</button>
            </div>
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold tracking-tighter text-[#34967C]">alx</span>
                </div>

                <div className="hidden lg:flex items-center border rounded-full px-4 py-2 shadow-sm hover:shadow-md transition cursor-pointer space-x-4">
                    <div className="border-r pr-4">
                        <p className="text-xs font-bold">Location</p>
                        <p className="text-sm text-gray-500">Search for destination</p>
                    </div>
                    <div className="border-r pr-4">
                        <p className="text-xs font-bold">Check in</p>
                        <p className="text-sm text-gray-500">Add date</p>
                    </div>
                    <div className="border-r pr-4">
                        <p className="text-xs font-bold">Check out</p>
                        <p className="text-sm text-gray-500">Add date</p>
                    </div>
                    <div className="pr-2">
                        <p className="text-xs font-bold">People</p>
                        <p className="text-sm text-gray-500">Add guest</p>
                    </div>
                    <div className="bg-[#E0562E] p-3 rounded-full text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <button className="text-sm font-semibold hover:bg-gray-100 px-4 py-2 rounded-full border border-transparent shadow-sm bg-[#34967C] text-white">Sign in</button>
                    <button className="text-sm font-semibold hover:bg-gray-100 px-4 py-2 rounded-full border shadow-sm">Sign up</button>
                </div>
            </div>

            <nav className="container mx-auto px-4 py-2 border-t">
                <ul className="flex items-center space-x-8 overflow-x-auto no-scrollbar py-2 text-gray-500 font-medium text-sm">
                    {["Rooms", "Mansion", "Countryside", "Villa", "Tropical", "New", "Amazing pool", "Beach house", "Island", "Camping", "Apartment", "House", "Lakefront"].map((item) => (
                        <li key={item} className="flex flex-col items-center flex-shrink-0 cursor-pointer hover:text-black border-b-2 border-transparent hover:border-black pb-2 px-1 transition-all">
                            <span className="mb-1">🏠</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
