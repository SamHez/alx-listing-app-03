import React from "react";

const BookingForm: React.FC = () => (
    <div className="bg-white p-6 shadow-xl rounded-2xl border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Detail</h2>
        <form className="space-y-6">
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                        type="text"
                        placeholder="Enter first name"
                        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                        type="text"
                        placeholder="Enter last name"
                        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="email@example.com"
                        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
                    />
                </div>
            </div>

            {/* Payment Information */}
            <div>
                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-6">Pay with</h2>
                <div className="flex flex-col mb-6">
                    <label className="text-sm font-medium text-gray-700 mb-1">Card Number</label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="0000 0000 0000 0000"
                            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none pl-12"
                        />
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            💳
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">Expiration Date</label>
                        <input
                            type="text"
                            placeholder="MM/YY"
                            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">CVV</label>
                        <input
                            type="text"
                            placeholder="123"
                            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
                        />
                    </div>
                </div>
            </div>

            {/* Billing Address */}
            <div>
                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-6">Billing Address</h2>
                <div className="flex flex-col mb-6">
                    <label className="text-sm font-medium text-gray-700 mb-1">Street Address</label>
                    <input
                        type="text"
                        placeholder="123 Main St"
                        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
                    />
                </div>
                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">City</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">State</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">Country</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
                        />
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="button"
                className="mt-10 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-xl w-full shadow-lg shadow-green-100 transition-all duration-300 transform hover:-translate-y-1 active:scale-[0.98]"
            >
                Confirm & Pay
            </button>
        </form>
    </div>
);

export default BookingForm;
