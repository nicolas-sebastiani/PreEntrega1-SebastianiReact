import Logo from "./logo"
import Navbar from "./Navbar"

export default function Header (){
    return(
        <header className="nav">
            <Logo/>
            <Navbar/>
        </header>
    )
}
