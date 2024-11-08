import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";

const Layout = () => {
    const [scrollY, setScrollY] = useState(0);

    // Scroll listener to update scrollY state
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);

        // Clean up event listener on component unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative min-h-screen min-w-screen flex flex-col">
            <Header scrollY={scrollY} />
            
            {/* Main content area with Toast notifications */}
            <main className="flex-grow flex flex-col items-center mb-24 bg-base-100 relative z-10">
                <ToastContainer theme="colored" autoClose={1000} position="bottom-left" />
                <Outlet />
            </main>

            {/* Footer appears only after scrolling down 100px */}
            {scrollY > 100 && <Footer />}
        </div>
    );
};

export default Layout;




