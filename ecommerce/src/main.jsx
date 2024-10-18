import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header/Header'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import "./styles.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <ItemListContainer greeting={"Gaming Store"}/>
  </StrictMode>,
)