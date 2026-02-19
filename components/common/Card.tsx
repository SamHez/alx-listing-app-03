import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, description, image, price, rating }) => {
    return (
        <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <span className="flex items-center text-sm font-medium">⭐ {rating}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
                <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">${price} / night</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
