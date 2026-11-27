import { Link } from "react-router-dom";
import MainLayout from "../components/Layouts/MainLayout";

const NotFound = () => {
    return (
        <MainLayout>
            <section className="min-h-[75vh] flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-7xl font-bold tracking-wider text-accent">404</h1>
                <p className="mt-4 text-xl text-white/90 font-bold">
                    Page Not Found, go back.
                </p>
                <Link
                    to="/"
                    className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF5FA2] to-[#FCC89B] text-black font-display-bold hover:oy-90 hover:scale-105 transition"
                >
                    Return Home Here!
                </Link>
            </section>
        </MainLayout>
    )
}

export default NotFound;