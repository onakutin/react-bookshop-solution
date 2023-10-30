import { useState } from "react"
import './TopMenu.scss';

export default function TopMenu({ currentItem }) {

    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen( !open );
    }

    return (
        <>
            {
                open ? (
                        <nav className="topmenu">
                            <a
                                className={ `link` + (currentItem === '' ? ' link--highlighted' : '') }
                                href="#"
                            >
                                Home
                            </a>
                            <a
                                className={ `link` + (currentItem === 'about' ? ' link--highlighted' : '') }
                                href="#about"
                            >
                                About us
                            </a>
                            <a
                                className={ `link` + (currentItem === 'contact' ? ' link--highlighted' : '') }
                                href="#contact"
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