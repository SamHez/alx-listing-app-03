import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = "primary", className = "" }) => {
    const baseStyles = "px-4 py-2 rounded-lg font-semibold transition-all duration-200";
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-600 text-white hover:bg-gray-700",
        outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
    };

    return (
        <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
            {label}
        </button>
    );
};

export default Button;
