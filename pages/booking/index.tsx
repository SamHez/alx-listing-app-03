import React from "react";
import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";
import Layout from "@/components/layout/Layout";

const BookingPage: React.FC = () => {
    const bookingDetails = {
        propertyName: "Villa Arrecife Beach House",
        price: 7500,
        bookingFee: 65,
        totalNights: 3,
        startDate: "24 August 2024",
    };

    return (
        <Layout>
            <div className="container mx-auto px-4 py-12 max-w-7xl">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-10 tracking-tight">
                    Confirm and Pay
                </h1>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content Area */}
                    <div className="flex-1 order-2 lg:order-1">
                        <BookingForm />
                        <CancellationPolicy />
                    </div>

                    {/* Sidebar / Order Summary Area */}
                    <div className="w-full lg:w-[400px] order-1 lg:order-2">
                        <OrderSummary bookingDetails={bookingDetails} />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default BookingPage;
