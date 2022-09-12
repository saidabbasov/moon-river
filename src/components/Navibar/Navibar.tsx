import React from 'react'
import Navbar from 'react-bootstrap/esm/Navbar';
import Nav from 'react-bootstrap/esm/Nav';
import burgerMenu from "./../../images/burger-menu.png"
import LogoMoonRiver from "./../../images/LogoMoonRiver.png"

import styles from "./Navibar.module.scss"
import { Example } from '../Modal/Modal';

const Navibar = () => {
     
  return <div className={styles.navibar}>
        <Navbar collapseOnSelect expand="lg" bg="grey" variant="dark">
            <Navbar.Brand>
            <img className={styles.logo} src={LogoMoonRiver} alt='' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <img  src={burgerMenu} alt='' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='mr-auto'>
                        <Nav.Link><Example /></Nav.Link>
                        <Nav.Link><div>About us</div></Nav.Link>
                        <Nav.Link><div>Contact</div></Nav.Link>
                        <Nav.Link><div>Sign in</div></Nav.Link>
                        <Nav.Link><div>Travel</div></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar.Toggle>
        </Navbar>
  </div>
}

export default Navibar;