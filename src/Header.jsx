import './Header.scss';
import TopMenu from './TopMenu';

export default function Header({ currentPage, setCurrentPage }) {

    const currentMenuItem = 'contact';

    return (
        <header className="header">
            <div className="header__shop-name">Flourish & Blotts</div>

            <TopMenu
                currentPage={ currentPage }
                setCurrentPage={ setCurrentPage }
                currentItem={ currentMenuItem }
            />
        </header>
    )

}