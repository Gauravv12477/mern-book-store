import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

//react-icons
import { FaBlog,  } from "react-icons/fa";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    //toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(()=>{
        const handleScroll = () => {
            if(window.scrollY > 100) {
                setIsSticky(true)
            } else {
                setIsSticky(false);
            }

            window.addEventListener('scroll',handleScroll)

            return () => {
                window.addEventListener('scroll',handleScroll)
            }
        }
        handleScroll();
    }, [])
    
    return (
        <header className="flex flex-row gap-5 bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-3000 justify-between h-auto w-screen ">
            <div className={`flex flex-row gap-5  justify-between w-full py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""} `}>
                <Link  className="flex flex-row text-2xl font-bold  text-blue-700 items-center" to="/"><FaBlog/>Pustkzz</Link>
                <nav className=" bg-transparent flex flex-row gap-5  justify-between">
                    
                    {/* nav item for large device */}
                
                    <ul className={`hidden md:flex align-middle items-center text-base  text-black uppercase gap-6`}>

                        <li className="flex relative flex-col align-center font-semibold group items-center transition duration-350 hover:ease-in ">
                            <Link className="group-hover:text-blue-700" to="/">Shop</Link>
                            <div className="absolute hidden w-full h-[2px] bg-blue-700 bottom-0 left-0  group-hover:block"></div>
                        </li>

                        <li className="flex relative flex-col align-center font-semibold group items-center transition-all duration-800 ">
                            <Link className="group-hover:text-blue-700" to="/">About Us</Link>
                            <div className="absolute hidden w-full h-[2px] bg-blue-700 bottom-0 left-0  group-hover:block"></div>
                        </li>

                        <li className="flex relative flex-col align-center font-semibold group items-center transition-all duration-800 ">
                            <Link className="group-hover:text-blue-700" to="/">Sell Your Book</Link>
                            <div className="absolute hidden w-full h-[2px] bg-blue-700 bottom-0 left-0  group-hover:block"></div>
                        </li>

                        <li className="flex relative flex-col align-center font-semibold group items-center transition-all duration-800 ">
                            <Link className="group-hover:text-blue-700" to="/">Blog</Link>
                            <div className="absolute hidden w-full h-[2px] bg-blue-700 bottom-0 left-0  group-hover:block"></div>
                        </li>
                       
                            
                    </ul>
                    
                    {/* btn for large device */}
                    <div className="space-x-12  lg:flex hidden items-center">
                        <button><FaBarsStaggered className="w-5 hover:text-blue-700"/></button>
                    </div>

                    {/* menu for mobile apps  */}
                    <div className="flex md:hidden justify-end">
                        <button onClick={toggleMenu} className="text-black focus: outline-none h-8" >
                            {
                                isMenuOpen  ? <FaXmark className="h-5 w-5 text-black"/> : <FaBarsStaggered />
                            }
                        </button>           
                    </div>

                    <div>
                        <ul className={`absolute md:hidden space-y-4 left-6 right-6 top-20 px-4 rounded-lg py-7 bg-blue-600 ${isMenuOpen ? "" : "hidden" }`}>

                            <li className="block text-base text-white uppercase cursor-pointer hover:text-black">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="block text-base text-white uppercase cursor-pointer hover:text-black">
                                <Link to="/about">About Us</Link>
                            </li>
                            <li className="block text-base text-white uppercase cursor-pointer hover:text-black">
                                <Link to="/shop">Shop</Link>
                            </li>
                            <li className="block text-base text-white uppercase cursor-pointer hover:text-black">
                                <Link to="/contact">Sell Your Book</Link>
                            </li>
                            <li className="block text-base text-white uppercase cursor-pointer hover:text-black">
                                <Link to="/Blog">Blog</Link>
                            </li>
                        </ul>
                    </div>
    
                    
                </nav>
            </div>
        </header>
    );
}

export default Navbar