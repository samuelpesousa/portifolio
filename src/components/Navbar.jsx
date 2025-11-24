import React, { useEffect, useState } from "react";
import { navLinks } from '../constanst/index.js';


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(true);
        }
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll);

    }, [])

    return(
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner">
                <a className="logo" href="#hero">&lt;Samuel.Dev/&gt;</a>
            

            <nav className="desktop">
                <ul>
                    {navLinks.map(({link, name}) => (
                        <li key={name} className="group">
                            <a href={link}>
                                <span>{name}</span>
                                <span className="underline" />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <a href="#contact" className="contact-btn group">
                <div className="inner">
                    <span className="btn-text">Entrar em Contato</span>
                    <span className="btn-text-mobile">Contato</span>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="btn-arrow"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </div>
            </a>
            </div>
        </header>

    );
}

export default Navbar