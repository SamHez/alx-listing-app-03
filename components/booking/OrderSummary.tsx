import React from "react";

interface BookingDetails {
    propertyName: string;
    price: number;
    bookingFee: number;
    totalNights: number;
    startDate: string;
}

const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({ bookingDetails }) => (
    <div className="bg-white p-6 shadow-xl rounded-2xl border border-gray-100 h-fit sticky top-24">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Review Order Details</h2>

        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 pb-6 border-b border-gray-100">
            <div className="w-full sm:w-32 h-32 flex-shrink-0">
                <img
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=300&q=80"
                    alt="Property"
                    className="w-full h-full object-cover rounded-xl shadow-sm"
                />
            </div>
            <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-bold text-gray-900 leading-tight">{bookingDetails.propertyName}</h3>
                <div className="flex items-center justify-center sm:justify-start mt-2">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-sm font-semibold text-gray-900">4.76</span>
                    <span className="ml-1 text-sm text-gray-500">(345 reviews)</span>
                </div>
                <p className="mt-3 text-sm text-gray-600 font-medium bg-gray-50 px-3 py-1 rounded-full inline-block">
                    {bookingDetails.startDate} • {bookingDetails.totalNights} Nights
                </p>
            </div>
        </div>

        {/* Price Breakdown */}
        <div className="mt-6 space-y-4">
            <div className="flex justify-between items-center text-gray-600">
                <p className="text-base">Booking Fee</p>
                <p className="font-semibold text-gray-900">${bookingDetails.bookingFee.toLocaleString()}</p>
            </div>
            <div className="flex justify-between items-center text-gray-600">
                <p className="text-base">Subtotal ({bookingDetails.totalNights} nights)</p>
                <p className="font-semibold text-gray-900">${bookingDetails.price.toLocaleString()}</p>
            </div>

            <div className="pt-4 mt-2 border-t border-gray-100 flex justify-between items-center">
                <p className="text-xl font-bold text-gray-900">Grand Total</p>
                <p className="text-xl font-bold text-blue-600">
                    ${(bookingDetails.bookingFee + bookingDetails.price).toLocaleString()}
                </p>
            </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-sm text-blue-800 leading-relaxed">
                <span className="font-bold">Pro Tip:</span> Secure your stay now! High demand for these dates.
            </p>
        </div>
    </div>
);

export default OrderSummary;
