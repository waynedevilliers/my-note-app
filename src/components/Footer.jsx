import { useState, useEffect } from 'react';

const Footer = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100); // Adjust scroll distance as needed
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <footer
            className={`w-full fixed bottom-0 left-0 p-4 bg-stone-300 text-center transition-all duration-300 ${
                scrolled ? 'border-t-2 border-stone-800' : 'border-t border-stone-300'
            }`}
        >
            <p className="text-sm text-stone-600">© 2023 Notify. All rights reserved.</p>
        </footer>
    );
};

export default Footer;




