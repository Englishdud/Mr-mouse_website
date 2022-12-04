import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { Navbar } from './components/Navbar'
import { Contact } from './pages/Contact'

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
