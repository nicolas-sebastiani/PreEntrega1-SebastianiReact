import Header from './components/Header/Header'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import "./styles.css"

export default function App () {
    return(
        <>
            <Header/>
            <ItemListContainer greeting={"Gaming Store"}/>
        </>
    )
}