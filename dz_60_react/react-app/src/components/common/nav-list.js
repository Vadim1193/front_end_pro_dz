
function NavList({ items, className, itemRender }) {
    return (
        <ul className={className}>
            {items.map(item => (
                <li key={item.id}>
                    {itemRender(item)}
                </li>
            ))}
        </ul>
    )
}

function renderLink(item) {
    return (
        <a className={`${item.class || ''} ${item.active ? 'active' : ''}`} href={item.link}>{item.value}</a>
    )
}

export {
    NavList,
    renderLink
}
