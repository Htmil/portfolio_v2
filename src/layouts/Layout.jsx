import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


export default function Layout() {
    return (
        <>
            <header className="">
                <NavBar />
            </header>
            <main className="bg-gray-300 text-gray-900 overflow-y-scroll sm:p-8">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}


