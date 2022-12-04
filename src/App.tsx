import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { Store } from './pages/Store'
import { Navbar} from './components/Navbar'

function App() {
  return(
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
