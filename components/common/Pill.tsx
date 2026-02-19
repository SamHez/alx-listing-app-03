import React from "react";

interface PillProps {
    label: string;
    onClick?: () => void;
    active?: boolean;
}

const Pill: React.FC<PillProps> = ({ label, onClick, active }) => {
    return (
        <button
            onClick={onClick}
            className={`px-6 py-2 rounded-full border text-sm font-medium transition whitespace-nowrap ${active
                    ? "bg-[#34967C] text-white border-[#34967C]"
                    : "border-gray-300 text-gray-600 hover:border-black"
                }`}
        >
            {label}
        </button>
    );
};

export default Pill;
