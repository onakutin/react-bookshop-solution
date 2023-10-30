import './Header.scss';
import TopMenu from './TopMenu';

export default function Header() {

    const currentMenuItem = 'contact';

    return (
        <header className="header">
            <div className="header__shop-name">Flourish & Blotts</div>

            <TopMenu currentItem={ currentMenuItem } />
        </header>
    )

}