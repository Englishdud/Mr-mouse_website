import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home.js'
import { Store } from './pages/Store.js'
import { Contact } from './pages/Contact.js'
import { Navbar } from './components/Navbar.js'

function App() {
  return (
      <>
      <Navbar />
      <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/st" element={<Store />} />
        <Route path="/ct" element={<Contact />} />
      </Routes>
    </Container>
    </>
  )
}

export default App
