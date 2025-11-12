import React from 'react';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <h1 className="text-2xl font-bold">TechHome</h1>
                </div>

                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <a
                                href="#"
                                className="px-3 py-2 rounded-lg font-medium text-gray-200 hover:bg-gray-100 hover:text-amber-700 transition no-underline hover:no-underline !no-underline"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="px-3 py-2 rounded-lg font-medium text-gray-200 hover:bg-gray-100 hover:text-amber-700 transition no-underline hover:no-underline !no-underline"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="px-3 py-2 rounded-lg font-medium text-gray-200 hover:bg-gray-100 hover:text-amber-700 transition no-underline hover:no-underline !no-underline"
                            >
                                Menu
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="px-3 py-2 rounded-lg font-medium text-gray-200 hover:bg-gray-100 hover:text-amber-700 transition no-underline hover:no-underline !no-underline"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
