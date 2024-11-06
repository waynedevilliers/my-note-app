import Navbar from "./Navbar"

const Header = () => {
    return ( 
        <header className="absolute flex justify-center fixed t-0 z-50 w-screen bg-base-300 border-b-2 border-accent p-4">
            <Navbar />
        </header>
    )   
}

export default Header