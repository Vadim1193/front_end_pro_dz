import './header.css';
import NavList from '../menu-header/menu-header';

export default function Header() {
    const logoName = 'LoGo';

    return (
        <header>
            <div className="wrapper-header">
                <span className="logo">{logoName}</span>
                <NavList />
            </div>
        </header>
    )
}

