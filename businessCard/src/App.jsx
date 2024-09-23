import Info from './components/Info.jsx'
import About from './components/About.jsx'
import Interests from './components/Interests.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className='card'>
        <Info />
      <div className="container">
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  )
}