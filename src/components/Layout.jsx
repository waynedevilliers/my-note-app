import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";

const Layout = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative">
            <Header scrollY={scrollY} />
            <main className="flex flex-col relative z-10 items-center mb-24 bg-base-100">
                <ToastContainer theme="colored" autoClose={1000} position="bottom-left" />
                <Outlet />
            </main>
            {scrollY > 100 && <Footer />} {/* Footer appears only after scrolling down 100px */}
        </div>
    );
};

export default Layout;



