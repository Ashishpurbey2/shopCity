import React from 'react'
import {Container,Row,Col } from 'react-bootstrap'
import {Nav,Navbar,NavDropdown,Button,Form,FormControl  } from 'react-bootstrap'
import './Header.css'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
    return (
        <header>
           <Navbar className="ash" bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand href="/">ProShop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <LinkContainer to='/cart'>
                            <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/login'>
                            <Nav.Link><i className='fas fa-user'></i>Sign In</Nav.Link>
                        </LinkContainer>    
                        </Nav> 
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
