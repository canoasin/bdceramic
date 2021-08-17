import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar fixed="top" expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">백두세라믹</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="회사소개" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">고벽돌</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">청고벽돌</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">백고벽돌</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  전돌 및 내화벽돌
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="고벽돌" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">고벽돌</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">청고벽돌</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">백고벽돌</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  전돌 및 내화벽돌
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="고벽돌타일" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">고벽돌</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">청고벽돌</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">백고벽돌</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  전돌 및 내화벽돌
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="전돌" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">고벽돌</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">청고벽돌</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">백고벽돌</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  전돌 및 내화벽돌
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="바닥재" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">고벽돌</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">청고벽돌</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">백고벽돌</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  전돌 및 내화벽돌
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="수입벽돌" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">고벽돌</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">청고벽돌</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">백고벽돌</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  전돌 및 내화벽돌
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="고객센터" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">고벽돌</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">청고벽돌</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">백고벽돌</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  전돌 및 내화벽돌
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="content">
        <h1>h1 테스트입니다.</h1>
        <h2>h2 테스트입니다.</h2>
        <h3>h3 테스트입니다.</h3>
        <h4>h4 테스트입니다.</h4>
        <p>p 테스트입니다.</p>
      </div>
      <p style={{ textAlign: 'center' }}>bdceramic 프로젝트를 시작해봅시다.</p>
    </div>
  )
}

export default App