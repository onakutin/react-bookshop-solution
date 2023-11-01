import { useContext } from "react"
import CurrencyContext from "./CurrencyContext"
import Homepage from "./Homepage";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import BookDetail from "./BookDetail";
import SubpageLayout from "./SubpageLayout";


export default function MainContent({ currentPage }) {

    const { currency } = useContext(CurrencyContext);

    return (
        <>
            <h1 className="app__headline">Flourish and Blotts</h1>

            <Routes>
                <Route path="/" element={ <Homepage /> } />

                <Route path="/" element={ <SubpageLayout /> }>
                    <Route path="/about-us" element={ <AboutUs /> } />
                    <Route path="/contact-us" element={ <Contact /> } />
                    <Route path="/book/:id" element={ <BookDetail /> } />
                    <Route path="*" element="404: page not found" />
                </Route>
            </Routes>
        </>
    )
}