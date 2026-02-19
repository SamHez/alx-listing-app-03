import React from "react";
import Pill from "@/components/common/Pill";
import PropertyCard from "@/components/common/PropertyCard";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

const Home: React.FC = () => {
    const filters = [
        "Top Villa",
        "Free Reschedule",
        "Book Now, Pay later",
        "Self CheckIn",
        "Instant Book"
    ];

    return (
        <div className="container mx-auto px-4 pb-20">
            {/* Hero Section */}
            <section className="relative h-[450px] rounded-3xl overflow-hidden mb-12 flex items-center justify-center">
                <img
                    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                    alt="Hero background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="relative text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Find your favorite place here!</h1>
                    <p className="text-lg md:text-xl font-medium">The best prices for over 2 million properties worldwide.</p>
                </div>
            </section>

            {/* Filter Section */}
            <section className="mb-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center space-x-3 overflow-x-auto no-scrollbar pb-2">
                        <Pill label="All" active />
                        {filters.map((filter) => (
                            <Pill key={filter} label={filter} />
                        ))}
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-2 px-6 py-2 border rounded-full font-medium hover:border-black transition">
                            <span>Filter</span>
                            <span>⚙️</span>
                        </button>
                        <button className="flex items-center space-x-2 px-6 py-2 border rounded-full font-medium hover:border-black transition">
                            <span>Sort by: Highest Price</span>
                            <span>▼</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Listing Section */}
            <section>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PROPERTYLISTINGSAMPLE.map((property, index) => (
                        <PropertyCard key={index} {...property} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
