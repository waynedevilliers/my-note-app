import Navbar from "./Navbar";

const Header = ({ scrollY }) => {
    return (
        <header className={`flex justify-center fixed top-0 z-50 w-full ${scrollY > 0 ? "bg-base-300 border-b-2 border-accent transition duration-300" : "bg-transparent"} transition duration-300`}>
            <Navbar />
        </header>
    );
};

export default Header;



