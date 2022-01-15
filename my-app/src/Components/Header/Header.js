import React from 'react';
import Logo from "../../assets/logo.png";
import { Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps=state=>{
    return{
        token:state.token,
    }
}



const Header = (props) => {
    let links=null;
    if (props.token===null){
        links=(
            <NavLink exact to="/login" className="textDec" activeStyle={{color:"wheat"}} style={{color:"white",fontSize:"18px",paddingRight:"20px",textDecoration:"none"}} >Login</NavLink>
        )
    }else {
        links=<div>
            <NavLink exact to="/" className="textDec" activeStyle={{color:"wheat"}} style={{color:"white",fontSize:"18px",paddingRight:"20px",textDecoration:"none"}} >Burger Builder</NavLink>
            <NavLink exact to="/orders" className="textDec" activeStyle={{color:"wheat"}} style={{color:"white",fontSize:"18px",paddingRight:"20px",textDecoration:"none"}} >Orders</NavLink>
            <NavLink exact to="/logout" className="textDec" activeStyle={{color:"wheat"}} style={{color:"white",fontSize:"18px",paddingRight:"20px",textDecoration:"none"}} >Logout</NavLink>

        </div>

    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={{ backgroundColor:"#D70F64"}} className="p-0 m-0" variant="dark">
                <Container fluid={true} style={{margin:"0 50px"}}>
                    <Navbar.Brand href="#home">
                        <NavLink exact to="/" className="NavLink">  <img src={Logo} alt="Logo" width="60px" height="50px"/></NavLink>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            {links}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </div>
    );
};

export default connect(mapStateToProps)(Header);




