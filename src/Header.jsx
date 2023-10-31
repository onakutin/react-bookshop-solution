import { useState } from 'react';
import CurrencySelection from './CurrencySelection';
import './Header.scss';
import SearchBox from './SearchBox';
import TopMenu from './TopMenu';

export default function Header({ currentPage, setCurrentPage }) {

    const currentMenuItem = 'contact';

    const [value, setValue] = useState('');

    return (
        <header className="header">
            <div className="header__shop-name">Flourish & Blotts</div>

            <SearchBox value={ value } setValue={ setValue } />

            <CurrencySelection />

            <TopMenu
                currentPage={ currentPage }
                setCurrentPage={ setCurrentPage }
                currentItem={ currentMenuItem }
            />
        </header>
    )

}