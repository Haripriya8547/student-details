import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userLogin } from "../redux/userSlice";

function Login() {

  const { isAuthenticated, users } = useSelector(
    (state) => state.userState
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);

  const [loginData, setLogindata] = useState({
    email: "",
    password: "",
  });

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);

    const user = users.find(
      (u) => u.email === loginData.email
    );

    if (!user) {
      toast.error("Invalid email");
      return;
    }

    if (user.password !== loginData.password) {
      toast.error("Invalid password");
      return;
    }

    // THIS WAS MISSING
    dispatch(userLogin(user));

    toast.success("User logged in successfully!");

    navigate("/");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLogindata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Row className="m-3 justify-content-center">
      <Col md={6} lg={4}>

        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >

          <h2 className="text-center">
            Login Page
          </h2>

          <Form.Group className="mt-5 mb-3">

            <Form.Label>
              E-mail
            </Form.Label>

            <Form.Control
              required
              type="email"
              placeholder="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
            />

            <Form.Control.Feedback type="invalid">
              Please enter your email.
            </Form.Control.Feedback>

          </Form.Group>

          <Form.Group className="mb-3">

            <Form.Label>
              Password
            </Form.Label>

            <Form.Control
              required
              type="password"
              placeholder="Enter Password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
            />

            <Form.Control.Feedback type="invalid">
              Please enter your password.
            </Form.Control.Feedback>

          </Form.Group>

          <Form.Group className="mb-3">

            <Form.Check
              label="Remember me"
            />

          </Form.Group>

          <div className="text-center">

            <Button
              type="submit"
              variant="success"
            >
              Login
            </Button>

          </div>

          <div className="text-center mt-3">

            <Link to="/register">
              Don't have an account? Signup here!
            </Link>

          </div>

        </Form>

      </Col>
    </Row>
  );
}

export default Login;