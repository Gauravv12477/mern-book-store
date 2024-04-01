import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Navbar = () => {
n

    return (
        <header>
            <Link to="/">Pustkzz</Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar