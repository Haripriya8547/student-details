import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogout } from "../../redux/userSlice";
import { toast } from "react-toastify";

function Header() {

    const { isAuthenticated, user } = useSelector(
        (state) => state.userState
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(userLogout());
        toast.success("User logout successfully");
        navigate("/login");
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>

                <Navbar.Brand as={Link} to="/">
                    Student Details
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">

                        <Nav.Link as={Link} to="/assignments">
                            Assignments
                        </Nav.Link>

                        <Nav.Link as={Link} to="/marks">
                            Marks
                        </Nav.Link>

                        <Nav.Link as={Link} to="/attendence">
                            Attendance
                        </Nav.Link>

                    </Nav>

                    <Nav>

                        {!isAuthenticated && (
                            <Nav.Link as={Link} to="/login">
                                Log in
                            </Nav.Link>
                        )}

                        {isAuthenticated && (
                            <NavDropdown
                                title={
                                    <>
                                        <CgProfile size={25} />
                                        
                                    </>
                                }
                                id="basic-nav-dropdown"
                                align="end"
                            >

                                <NavDropdown.Item as={Link} to="/register">
                                    Register
                                </NavDropdown.Item>

                                <NavDropdown.Item
                                    as={Link}
                                    to="/admin/student-details"
                                >
                                    Add Student Details
                                </NavDropdown.Item>

                                <NavDropdown.Item
                                    as={Link}
                                    to="/admin/list-details"
                                >
                                    List Student Details
                                </NavDropdown.Item>
                                 <NavDropdown.Item
                                    as={Link}
                                    to="/admin/list-users"
                                >
                                    List users 
                                </NavDropdown.Item>

                                <NavDropdown.Divider />

                                <NavDropdown.Item onClick={handleLogout}>
                                    Logout
                                </NavDropdown.Item>

                            </NavDropdown>
                        )}

                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default Header;