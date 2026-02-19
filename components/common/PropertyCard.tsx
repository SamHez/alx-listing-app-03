import React from "react";
import { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<PropertyProps> = ({ name, price, rating, image, address }) => {
    return (
        <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group">
            <div className="relative h-64 w-full">
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-4 right-4 text-white text-2xl drop-shadow-md">
                    ❤️
                </button>
            </div>
            <div className="p-4">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-900 truncate">{name}</h3>
                    <div className="flex items-center">
                        <span className="text-sm">⭐</span>
                        <span className="text-sm font-medium ml-1">{rating}</span>
                    </div>
                </div>
                <p className="text-gray-500 text-sm mb-2">{address.city}, {address.country}</p>
                <p className="text-gray-900 font-bold">
                    ${price} <span className="font-normal text-gray-500">/ night</span>
                </p>
            </div>
        </div>
    );
};

export default PropertyCard;
