import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
function Footer(){
    return (
        <>
         <section className="stats-section">
        <Container>

          <Row className="text-center">

            <Col md={3} sm={6}>
              <h2>500+</h2>
              <p>Students</p>
            </Col>

            <Col md={3} sm={6}>
              <h2>20+</h2>
              <p>Teachers</p>
            </Col>

            <Col md={3} sm={6}>
              <h2>50+</h2>
              <p>Courses</p>
            </Col>

            <Col md={3} sm={6}>
              <h2>95%</h2>
              <p>Success Rate</p>
            </Col>

          </Row>

        </Container>
      </section>


    

      <footer className="footer">
        <p>
          © 2026 EduManage | Student Management System 🎓
        </p>
      </footer>

        </>
    )
}

export default Footer;