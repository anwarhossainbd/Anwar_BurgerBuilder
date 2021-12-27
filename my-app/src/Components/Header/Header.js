import React from 'react';
import Logo from "../../assets/logo.png";
import { Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";



const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={{ backgroundColor:"#D70F64"}} className="p-0 m-0" variant="dark">
                <Container fluid={true} style={{margin:"0 50px"}}>
                    <Navbar.Brand href="#home">
                        <Nav.Link exact to="/" className="NavLink">  <img src={Logo} alt="Logo" width="60px" height="50px"/></Nav.Link>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <NavLink exact to="/" className="textDec" activeStyle={{color:"wheat"}} style={{color:"white",fontSize:"18px",paddingRight:"20px",textDecoration:"none"}} >Burger Builder</NavLink>
                            <NavLink exact to="/orders" className="textDec" activeStyle={{color:"wheat"}} style={{color:"white",fontSize:"18px",paddingRight:"20px",textDecoration:"none"}} >Orders</NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </div>
    );
};

export default Header;












// import {Container, Nav, Navbar} from "react-bootstrap";
// import Logo from "../../assets/logo.png";
// import { NavLink } from 'react-router-dom';
// import "../Header/Header.css"
//
//
// const Header = () => {
//
//     return (
//         <div>
//
//             <h1>aaa</h1>
//             <Navbar collapseOnSelect expand="lg"  style={{ backgroundColor:"#D70F64"}} variant="dark">
//                 <Container fluid={true} style={{margin:"0 50px"}}>
//                     <Navbar.Brand href="#home">
//                         <NavLink exact to="/" className="NavLink">  <img src={Logo} alt="Logo" width="60px" height="50px"/></NavLink>
//
//                     </Navbar.Brand>
//                     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                     <Navbar.Collapse id="responsive-navbar-nav">
//                         <Nav className="me-auto">
//                         </Nav>
//                         <Nav>
//                             <div>
//                                 <NavLink exact to="/" className="textDec" activeStyle={{color:"wheat"}} style={{color:"white",fontSize:"18px",paddingRight:"20px",textDecoration:"none"}} className="NavLink">Burger Builder</NavLink>
//                                 <NavLink exact to="/orders" className="textDec" activeStyle={{color:"wheat"}}  style={{color:"white",fontSize:"18px",textDecoration:"none",paddingRight:"20px"}} className="NavLink">Orders</NavLink>
//                                 <NavLink exact to="/logout" className="textDec" activeStyle={{color:"wheat"}}  style={{color:"white",fontSize:"18px",textDecoration:"none",paddingRight:"20px"}} className="NavLink">Logout</NavLink>
//                             </div>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//
//         </div>
//     );
// };
//
// export default connect(mapStateToProps) (Header);