import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Toggle navbar background on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Change to 'true' when scrolled past 50px
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`w-full p-4 fixed top-0 left-0 z-50 transition-colors duration-300 ${
                isScrolled ? "bg-stone-300 border-b-2 border-black" : "bg-stone-300"
            }`}
        >
            <div className="max-w-7xl w-full mx-auto flex justify-between items-center">
                {/* Left - Brand Name */}
                <div className="justify-start">
                    <Link
                        to="/"
                        className="text-3xl sm:text-2xl font-bold text-black hover:text-yellow-500 transition-colors"
                    >
                        Notify<span className="text-yellow-500">.</span>
                    </Link>
                </div>

                {/* Right - Navigation Links */}
                <ul className="flex gap-6">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `transition-colors ${
                                    isActive ? "text-yellow-500" : isScrolled ? "text-stone-600" : "text-black"
                                } hover:text-yellow-500`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/notes"
                            className={({ isActive }) =>
                                `transition-colors ${
                                    isActive ? "text-yellow-500" : isScrolled ? "text-stone-600" : "text-black"
                                } hover:text-yellow-500`
                            }
                        >
                            Notes
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

