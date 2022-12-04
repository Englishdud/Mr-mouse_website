import {Container, Nav, Navbar as Navbarbs} from 'react-bootstrap'

export function Navbar() {
    return (
        <Navbarbs className='bg-white shadow-lg mb-3'>
            <Container>
                <Nav>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/store'>Store</Nav.Link>
                    <Nav.Link href='/contact'>Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbarbs>
    )
}