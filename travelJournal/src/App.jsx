import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'
import data from './data.js'

export default function App() {
  const cards = data.map(elem => {
    return (
      <Card 
        key = {elem.id}
        {...elem}                     // we can also use elem = {elem}
        />
    )
  })

  return (
    <>
      <Navbar />
      <div className='hero'>
          <div className="card--list">
            {cards}
          </div>
      </div>
      <Footer />
    </>
  )
}

