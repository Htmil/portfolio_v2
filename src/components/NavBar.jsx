import { NavLink, Link } from "react-router-dom";

export default function NavBar() {

    return (
        <>
            <div className="bg-white font-bold w-full h-10 flex justify-between items-center font-inter">
                <Link to="/" className="text-lg sm:text-xl">
                    HTML
                </Link>
                <p className="items-center font-normal hidden text-sm md:flex">Currently learning:
                    <a className="flex items-bottom px-2" href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Space+Grotesk&size=15&duration=3000&pause=1000&color=000000&vCenter=true&random=false&width=150&height=30&lines=c%23+;React;Bootstrap;Tailwind+CSS" alt="Typing SVG" /></a>
                </p>
                <nav className="w-max">
                    <NavLink to="/" className="home text-lg sm:text-xl p-2">H</NavLink><span>|</span>
                    <NavLink to="projects" className="projects text-lg sm:text-xl p-2">Pr</NavLink><span>|</span>
                    <NavLink to="about" className="about text-lg sm:text-xl p-2">Ab</NavLink><span>|</span>
                    <NavLink to="contact" className="contact text-lg sm:text-xl p-2">Co</NavLink><span>|</span>
                    <NavLink to="curriculum" className="cv text-lg sm:text-xl p-2">Cv</NavLink>
                </nav>
            </div>
        </>
    )
}
