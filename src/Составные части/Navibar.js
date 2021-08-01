import React from 'react';
import { Navbar,Nav, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';





export default function NaviBar() {
    return (
    <>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
           <Navbar.Brand>Football results</Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
           <Navbar.Collapse id="responsive-navbar-nav"/>
              <Nav className="mr-auto">
                   <Nav.Link><Link to="/">Home</Link></Nav.Link>
                   <Nav.Link><Link to="/users">Command List</Link></Nav.Link>
                   <Nav.Link><Link to="/about">League calendar</Link></Nav.Link>
                   <Nav.Link><Link to="/RMA">Real Madrid F.C. calendar</Link></Nav.Link>
              </Nav>
              <Nav>
                  <Button variant="primary" >Log in</Button>
                  <Button variant="primary">Sing out</Button>                  
              </Nav>
              
        </Navbar>
    </>
    )
} 
