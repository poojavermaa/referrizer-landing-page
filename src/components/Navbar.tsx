import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiX } from 'react-icons/hi';
import { CgMenuRight, CgSearch } from 'react-icons/cg';

const navigation = [
    { name: 'Solutions', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Testimonials', href: '#' },
    { name: 'Resources', href: '#' }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 bg-white z-40 shadow-sm transition-transform duration-300
                ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link to="/">
                                <img
                                    className="h-8 w-auto"
                                    src="./images/logo-dark.png"
                                    alt="Referrizer"
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="text-[#23283B] text-sm font-medium hover:text-[#377DFF] 
                                        transition-colors duration-300"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Desktop Buttons */}
                        <div className="hidden md:flex items-center space-x-4">
                            <Link
                                to="/login"
                                className="text-[#23283B] text-sm font-medium hover:text-[#377DFF] 
                                    transition-colors duration-300"
                            >
                                Log In
                            </Link>
                            <Link
                                to="/signup"
                                className="bg-[#377DFF] text-white text-sm font-medium px-4 py-2 rounded-lg
                                    hover:bg-[#2563EB] transition-colors duration-300"
                            >
                                Sign Up for Free
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center gap-2">
                            <button
                                className="inline-flex items-center justify-center p-2 rounded-md text-[#23283B]
                                    hover:text-[#377DFF] hover:bg-gray-100 transition-colors duration-300"
                            >
                                <CgSearch size={24} color="#4c70f0" />
                            </button>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-[#23283B]
                                    hover:text-[#377DFF] hover:bg-gray-100 transition-colors duration-300"
                            >
                                {isOpen ? (
                                    <HiX size={24} color="#4c70f0" />
                                ) : (
                                    <CgMenuRight size={24} color="#4c70f0" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile menu overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300
                    ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Mobile menu panel */}
            <div
                className={`fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-50 
                    transform transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="h-full overflow-y-auto">
                    {/* Mobile menu header */}
                    <div className="px-6 py-4 border-b border-gray-200">
                        <img
                            className="h-8 w-auto"
                            src="./images/logo-dark.png"
                            alt="Referrizer"
                        />
                    </div>

                    {/* Mobile menu items */}
                    <div className="px-6 py-6 space-y-6">
                        <div className="space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="block text-lg font-medium text-[#23283B] hover:text-[#377DFF]
                                        transition-colors duration-300"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <div className="pt-6 border-t border-gray-200 space-y-4">
                            <Link
                                to="/login"
                                className="block w-full text-center py-3 text-[#23283B] text-lg font-medium
                                    hover:text-[#377DFF] transition-colors duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Log In
                            </Link>
                            <Link
                                to="/signup"
                                className="block w-full text-center py-3 bg-[#377DFF] text-white text-lg 
                                    font-medium rounded-lg hover:bg-[#2563EB] transition-colors duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Sign Up for Free
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Navbar };