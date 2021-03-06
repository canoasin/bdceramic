import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';

function NavBarComponent(){

    return(
      <>
    <Navbar fixed="top" expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="home">백두세라믹</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="회사소개" id="collasible-nav-dropdown">
                <NavDropdown.Item href="action/3.1">고벽돌</NavDropdown.Item>
                <NavDropdown.Item href="action/3.2">청고벽돌</NavDropdown.Item>
                <NavDropdown.Item href="action/3.3">백고벽돌</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="action/3.4">
                  전돌 및 내화벽돌
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="고벽돌" id="collasible-nav-dropdown">
                <NavDropdown.Item href="action/3.1">고벽돌</NavDropdown.Item>
                <NavDropdown.Item href="action/3.2">청고벽돌</NavDropdown.Item>
                <NavDropdown.Item href="action/3.3">백고벽돌</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="action/3.4">
                  전돌 및 내화벽돌
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="고벽돌타일" id="collasible-nav-dropdown">
                <NavDropdown.Item href="action/3.1">고벽돌</NavDropdown.Item>
                <NavDropdown.Item href="action/3.2">청고벽돌</NavDropdown.Item>
                <NavDropdown.Item href="action/3.3">백고벽돌</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="action/3.4">
                  전돌 및 내화벽돌
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="전돌" id="collasible-nav-dropdown">
                <NavDropdown.Item href="action/3.1">고벽돌</NavDropdown.Item>
                <NavDropdown.Item href="action/3.2">청고벽돌</NavDropdown.Item>
                <NavDropdown.Item href="action/3.3">백고벽돌</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="action/3.4">
                  전돌 및 내화벽돌
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="바닥재" id="collasible-nav-dropdown">
                <NavDropdown.Item href="action/3.1">고벽돌</NavDropdown.Item>
                <NavDropdown.Item href="action/3.2">청고벽돌</NavDropdown.Item>
                <NavDropdown.Item href="action/3.3">백고벽돌</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="action/3.4">
                  전돌 및 내화벽돌
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="수입벽돌" id="collasible-nav-dropdown">
                <NavDropdown.Item href="action/3.1">고벽돌</NavDropdown.Item>
                <NavDropdown.Item href="action/3.2">청고벽돌</NavDropdown.Item>
                <NavDropdown.Item href="action/3.3">백고벽돌</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="action/3.4">
                  전돌 및 내화벽돌
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="고객센터" id="collasible-nav-dropdown">
                <NavDropdown.Item href="action/3.1">고벽돌</NavDropdown.Item>
                <NavDropdown.Item href="action/3.2">청고벽돌</NavDropdown.Item>
                <NavDropdown.Item href="action/3.3">백고벽돌</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="action/3.4">
                  전돌 및 내화벽돌
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
      )
}

export default NavBarComponent