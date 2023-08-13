import './header.css';
import NavListComp from '../menu-header/menu-header';

export default function HeaderComp() {
    const logoName = 'LoGo';

    return (
        <header>
            <div className="wrapper-header">
                <span className="logo">{logoName}</span>
                <NavListComp />
            </div>
        </header>
    )
}

