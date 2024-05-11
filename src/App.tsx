import { useLocation } from 'react-router-dom'
import './App.scss'
import RouteController from './RouteController'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'

function App() {
  const { pathname } = useLocation();
  return (
    <>
      {
        !pathname.includes("/sign_up") && !pathname.includes("/login") && <Nav />
      }
      {!pathname.includes("/search") && !pathname.includes("/login") && !pathname.includes("/sign_up") && <Hero />}
      {!pathname.includes("/search") && !pathname.includes("/login") && !pathname.includes("/sign_up") && <Header />}
      <RouteController /> 
      {
        !pathname.includes("/sign_up") && !pathname.includes("/login") && <Footer />
      }
    </>
  )
}

export default App
