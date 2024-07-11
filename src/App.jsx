
import { GlobalStyled } from './GlobalStyled.jsx'
import { Outlet } from 'react-router-dom'
import Header from './assets/components/Header/Header.jsx'
import Footer from './assets/components/Footer/Footer.jsx'


function App() {
  return (
    <>
      <GlobalStyled />

      <Header/>

      <Outlet/>
      
      <Footer />

    </>
  )
}

export default App
