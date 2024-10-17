import CartWidget from "./CartWidget"

function Navbar () {
    return <ul>
            <li>
                <a href="/hardware">Hardware</a>
            </li>
            <li>
                <a href="/perifericos">Perifericos</a>
            </li>
            <li>
                <a href="/notebooks">Notebooks</a>
            </li>
            <li>
                <a href="/monitores">Monitores</a>
            </li>
            <li>
                <a href="/cart"><CartWidget/></a>
            </li>
        </ul>
}

export default Navbar