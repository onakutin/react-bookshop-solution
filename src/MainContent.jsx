import { useContext } from "react"
import CurrencyContext from "./CurrencyContext"


export default function MainContent({ currentPage }) {

    const { currency } = useContext(CurrencyContext);

    return (
        <>
            <h1 className="app__headline">Flourish and Blotts</h1>

            {
                currentPage === ''
                    ? <h2>Welcome!! { currency }</h2>
                    : ''
            }

            {
                currentPage === 'about'
                    ? <h2>About us</h2>
                    : ''
            }

            {
                currentPage === 'contact'
                    ? <h2>Contact form</h2>
                    : ''
            }
        </>
    )
}