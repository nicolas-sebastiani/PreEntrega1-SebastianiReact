import Logo from "./logo"
import Navbar from "./Navbar"

function Header (){
    return(
        <header className="nav">
            <Logo/>
            <Navbar/>
        </header>
    )
}
export default Header