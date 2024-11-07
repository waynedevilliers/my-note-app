import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="w-full bg-stone-300 p-4 border-b border-stone-500 flex justify-center">
            <div className="max-w-7xl w-full flex justify-between items-center">
                <div>
                    <Link to="/" className="text-3xl sm:text-2xl font-bold text-stone-600 cursor-pointer hover:text-yellow-500">
                        Notify<span className="text-yellow-500">.</span>
                    </Link>
                </div>
                <ul className="flex gap-4">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-500" : "text-stone-600 hover:text-yellow-500"}>Home</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-yellow-500" : "text-stone-600 hover:text-yellow-500"}>About</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;




  