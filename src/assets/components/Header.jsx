import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogout } from "../../redux/userSlice";

function Header() {

     const dispatch = useDispatch();
  const navigate =useNavigate();

  const handleLogout = () => {
    dispatch(userLogout());
    toast.success(" user logout successfully");
    navigate("/login");
  }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>

                <Navbar.Brand as={Link} to="/">
                    Student Details
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link  as={Link} to="/assignments">Assignments</Nav.Link>
                        <Nav.Link  as={Link} to="/marks">Marks</Nav.Link>
                        <Nav.Link as={Link} to="/attendence">Attendance</Nav.Link>
                        
                    </Nav>

                    <Nav>
                         <Nav.Link as={Link} to="/login">Log in</Nav.Link>
                        <NavDropdown
                            title={<CgProfile size={25} />}
                            id="basic-nav-dropdown"
                            align="end"
                        >
                        

                            <NavDropdown.Item  as={Link} to="/settings">
                                Settings
                            </NavDropdown.Item>

                            <NavDropdown.Item as={Link} to="/help">
                                Help
                            </NavDropdown.Item>

                            <NavDropdown.Divider />

                            <NavDropdown.Item  as={Link} onClick={handleLogout}  to="/login">
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default Header;