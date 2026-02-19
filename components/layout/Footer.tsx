import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 border-t py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h4 className="font-bold mb-4">Support</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>Help Center</li>
                            <li>AirCover</li>
                            <li>Anti-discrimination</li>
                            <li>Disability support</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Hosting</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>Airbnb your home</li>
                            <li>AirCover for Hosts</li>
                            <li>Hosting resources</li>
                            <li>Community forum</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Airbnb</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>Newsroom</li>
                            <li>New features</li>
                            <li>Careers</li>
                            <li>Investors</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; 2024 ALX Listing App. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <span>Privacy</span>
                        <span>Terms</span>
                        <span>Sitemap</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
