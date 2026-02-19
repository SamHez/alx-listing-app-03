export interface ButtonProps {
    label: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "outline";
    className?: string;
}

export interface CardProps {
    title: string;
    description: string;
    image: string;
    price: number;
    rating: number;
}

export interface AddressProps {
    state: string;
    city: string;
    country: string;
}

export interface OfferProps {
    bed: string;
    shower: string;
    occupants: string;
}

export interface PropertyProps {
    name: string;
    address: AddressProps;
    rating: number;
    category: string[];
    price: number;
    offers: OfferProps;
    image: string;
    discount: string;
}
