import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

export const NavBar = () => {
  return (
    <Navbar bg='dark' variant='dark' className='fixed-top navbar'>
        <Container>
            <Navbar.Brand>NetBlog</Navbar.Brand>
            <Nav className='ms-auto'>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href='/login'>Login</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
  )
}
