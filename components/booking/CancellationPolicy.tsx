import React from "react";

const CancellationPolicy: React.FC = () => (
    <div className="mt-12 pt-8 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="mr-2">🛡️</span> Cancellation policy
                </h2>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mt-2">
                    <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold text-green-600">Free cancellation before Aug 23.</span>
                        <br />
                        Cancel before check-in on Aug 24 for a partial refund. Review our full policy for more details.
                    </p>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="mr-2">📋</span> Ground Rules
                </h2>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mt-2">
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-3 mt-1 text-xs">●</span>
                            <span>Follow the house rules provided by the host.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-3 mt-1 text-xs">●</span>
                            <span>Treat your Host’s home like your own.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-3 mt-1 text-xs">●</span>
                            <span>Keep noise levels down during quiet hours (10 PM - 7 AM).</span>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </div>
);

export default CancellationPolicy;
