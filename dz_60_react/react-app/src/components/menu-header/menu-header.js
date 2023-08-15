import './nav-list.css';
import { NavList, renderLink } from '../common/nav-list';

const menuList = [
    { id: 1, value: 'Home', link: '/', active: true},
    { id: 2, value: 'About', link: '/about' },
    { id: 3, value: 'Store', link: '/store' },
    { id: 4, value: 'Contacts', link: '/contact' },
    { id: 5, value: 'Where to buy', link: '/foo' }
];

export default function MyNavList() {
    return (
        <nav>
            <NavList items={menuList} className="pages-list" itemRender={renderLink} /> 
        </nav>
    )
}


