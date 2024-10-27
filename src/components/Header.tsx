import { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";

const NavLink = ({ title, handleClick } : { title: string, handleClick: () => void }) => (
    <LinkScroll 
        to={title} 
        onClick={handleClick}
        className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
    >
        {title}
    </LinkScroll>
)

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 80)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    },[])

    return ( 
        <header className={`fixed top-0 right-0 z-50 w-full transition-all duration-500 ${hasScrolled ? "py-2 bg-s1" : "py-10"}`}>
            <div className="container max-lg:px-5">
                <div className="absolute top-0 right-0 z-10 max-lg:p-5 w-full flex justify-between items-center lg:hidden bg-s1">
                    <img src="/images/xora.svg" alt="logo" width={115} height={55} />
                    <button onClick={() => setIsOpen(!isOpen)} className="w-10 h-10 flex justify-center items-center rounded-full border border-zinc-200">
                        <img className="w-6" src={isOpen ? "/images/close.svg" : "/images/magic.svg"} alt="magic" />
                    </button>
                </div>
                <div className={`${!isOpen && "max-lg:hidden"} max-lg:fixed w-full max-lg:h-screen top-0 right-0 z-4 max-lg:bg-s2`}>
                    <nav className="max-lg:absolute left-0 top-1/2 max-lg:translate-x-1/2 max-lg:-translate-y-1/2">
                        <ul className="flex max-lg:flex-col justify-between lg:items-center max-lg:gap-8">
                            <li>
                                <NavLink handleClick={() => setIsOpen(false)} title="features"/>
                            </li>
                            <li className="max-lg:hidden">
                                <div className="dot"/>
                            </li>
                            <li>
                                <NavLink handleClick={() => setIsOpen(false)} title="pricing"/>
                            </li>
                            <li className="max-lg:hidden">
                                <img src="/images/xora.svg" alt="logo" width={155} height={55} className="cursor-pointer" onClick={() => scrollTo(0,0)}/>
                            </li>
                            <li>
                                <NavLink handleClick={() => setIsOpen(false)} title="faq"/>
                            </li>
                            <li className="max-lg:hidden">
                                <div className="dot"/>
                            </li>
                            <li>
                                <NavLink handleClick={() => setIsOpen(false)} title="download"/>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
     );
}
 
export default Header;