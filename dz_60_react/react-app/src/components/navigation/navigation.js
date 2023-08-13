import './navigation.css';
import { NavList, renderLink } from '../common/nav-list';

const elemNavigation = [
    {id: 1, class: 'nav-home', value: 'Home', link: '/', active: true},
    {id: 2, class: 'nav-contacts', value: 'Contacts', link: '/contacts'},
    {id: 3, class: 'nav-call', value: 'Call me', link: '/call'},
    {id: 4, class: 'nav-store', value: 'Store', link: '/store'},
    {id: 5, class: 'nav-support', value: 'Support', link: '/support'},
];

export default function Navigation() {
    return (
        <aside className="navigation">
            <NavList items={elemNavigation} className="list-icons" itemRender={renderLink} /> 
        </aside>
    )
}


