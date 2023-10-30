import { useState } from "react"
import './TopMenu.scss';

export default function TopMenu({
    currentPage,
    setCurrentPage,
    currentItem
}) {

    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen( !open );
    }

    const handleItemClick = (page) => {
        setCurrentPage(page);
    }

    return (
        <>
            {
                open ? (
                        <nav className="topmenu">
                            <a
                                className={ `link` + (currentPage === '' ? ' link--highlighted' : '') }
                                href="#"
                                onClick={ () => handleItemClick('') }
                            >
                                Home
                            </a>
                            <a
                                className={ `link` + (currentPage === 'about' ? ' link--highlighted' : '') }
                                href="#about"
                                onClick={ () => handleItemClick('about') }
                            >
                                About us
                            </a>
                            <a
                                className={ `link` + (currentPage === 'contact' ? ' link--highlighted' : '') }
                                href="#contact"
                                onClick={ () => handleItemClick('contact') }
                            >
                                Contact
                            </a>
                        </nav>
                    )
                    : ''
            }

            <div className="burger" onClick={ toggleMenu }>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    )
}