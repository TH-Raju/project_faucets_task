import React, { useContext } from 'react';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import ModalBody from './ModalBody';
import { CgProfile } from "react-icons/cg";
import { FaWallet } from "react-icons/fa";
import { UserContext } from '../App';



const Header = () => {
  const [value, setValue] = useContext(UserContext);
  const [modalShow, setModalShow] = React.useState(false);


  const handleSelect = (e) => {
    setValue(e)
    // console.log(e)
  }

  return (


    <Navbar collapseOnSelect expand="lg" >
      <Container className='py-2 '>
        <Navbar.Brand><Link to='/' style={{ color: '#9B1FE9', textDecoration: 'none' }} className='fw-bold'>Faucets</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto">
          </Nav>
          <Nav >
            <NavDropdown title={value ? value : "Select Name"} style={{ border: '1px solid gray', padding: '0px 20px' }} id="collasible-nav-dropdown" onSelect={handleSelect}>
              <NavDropdown.Item eventKey="Arbitrum Rinkeby"> <img src={require("../image/1.png")} style={{ height: '15px', width: '15px' }} alt=" " />  Arbitrum Rinkeby</NavDropdown.Item>
              <NavDropdown.Item eventKey="Avalanche Fuji">  <img src={require("../image/2.png")} style={{ height: '15px', width: '15px' }} alt=" " /> Avalanche Fuji</NavDropdown.Item>
              <NavDropdown.Item eventKey="BNB Chain Testnet "><img src={require("../image/3.png")} style={{ height: '15px', width: '15px' }} alt=" " /> BNB Chain Testnet</NavDropdown.Item>
              <NavDropdown.Item eventKey="Ethereum Rinkeby">  <img src={require("../image/4.png")} style={{ height: '15px', width: '15px' }} alt=" " /> Ethereum Rinkeby</NavDropdown.Item>
              <NavDropdown.Item eventKey="Fantom Testnet">  <img src={require("../image/5.png")} style={{ height: '15px', width: '15px' }} alt=" " /> Fantom Testnet</NavDropdown.Item>
              <NavDropdown.Item eventKey="Harmony Testnet">  <img src={require("../image/6.png")} style={{ height: '15px', width: '15px' }} alt=" " /> Harmony Testnet</NavDropdown.Item>
              <NavDropdown.Item eventKey="PQA Network Sokol">  <img src={require("../image/7.png")} style={{ height: '15px', width: '15px' }} alt=" " /> POA Network Sokol</NavDropdown.Item>
              <NavDropdown.Item eventKey="Polygon Mumbai">  <img src={require("../image/8.png")} style={{ height: '15px', width: '15px' }} alt=" " /> Polygon Mumbai</NavDropdown.Item>

            </NavDropdown>
            <Button className='border border-danger  mx-3  px-4 fw-bold' variant="outline" onClick={() => setModalShow(true)} style={{ color: '#9B1FE9' }}> <FaWallet /> Collect Wallet</Button>{' '}
            <ModalBody show={modalShow} onHide={() => setModalShow(false)}></ModalBody>

            <DropdownButton title={<CgProfile style={{ height: '25px', width: '25px' }} />} >
              <Dropdown.Item ><Link to='/login' style={{ textDecoration: 'none', color: 'black' }}>Log in</Link></Dropdown.Item>
              <Dropdown.Item ><Link to='/signup' style={{ textDecoration: 'none', color: 'black' }}>Sign Up</Link></Dropdown.Item>
              <Dropdown.Item ><Link to='/faq' style={{ textDecoration: 'none', color: 'black' }}>FAQ</Link></Dropdown.Item>

            </DropdownButton>


          </Nav>
        </Navbar.Collapse>


      </Container>
    </Navbar>

  );
};

export default Header;