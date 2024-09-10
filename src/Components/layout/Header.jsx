import { Link } from "react-scroll";

import "../../styles/Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo/logo.png";
import { useState } from "react";
function Header() {
  const [nav, setNav] = useState(false);
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };
  window.addEventListener("scroll", changeValueOnScroll);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className={`${nav ? "sticky" : ""}`}>
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="logo">
              <img src={logo} alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link to="home" smooth={true} duration={500} offset={0}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="about" smooth={true} duration={500} offset={-20}>
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="menu" smooth={true} duration={500} offset={-20}>
                  Our Menu
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="shop" smooth={true} duration={500} offset={-20}>
                  Shop
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="blog" smooth={true} duration={500} offset={-90}>
                  Blog
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="contact" smooth={true} duration={500} offset={-50}>
                  Contact
                </Link>
              </Nav.Link>
              <Nav.Link as={Link} to={"/"}>
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  <em className="roundpoint">2</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
