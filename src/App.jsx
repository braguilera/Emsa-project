import './App.css'
import Technology from './screens/Technology'
import Services from './screens/Services'
import Nav from './screens/Nav'
import Home from './screens/Home'
import AboutUs from './screens/AboutUs'
import Certificate from './screens/Certificate'
import Clients from './screens/Clients'
import Testimonies from './screens/Testimonies'
import News from './screens/News'
import Footer from './screens/Footer'

function App() {

  return (
    <main className='bg-slate-50 text-slate-700 flex flex-col overflow-hidden '>
      <Nav/>
      <Home/>
      <Services/>
      <Technology/>
      <AboutUs/>
      <Certificate/>
      <Clients/>
      <Testimonies/>
      <News/>
      <Footer/>
    </main>
  )
}

export default App
