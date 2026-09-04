
   import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
     
      <section className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100">

            <Col md={6}>
              <h1>
                Welcome to <span>EduManage</span>
              </h1>

              <h2>Student Management System 🎓</h2>

              <p>
                Manage student details, attendance, assignments,
                marks and academic performance easily in one place.
              </p>

              <Button variant="outline-primary" size="lg" className="me-3">
                Get Started
              </Button>

              <Button variant="outline-primary" size="lg">
                Learn More
              </Button>
            </Col>

            <Col md={6} className="text-center">
              <img
                src="public/images/education.webp"
                alt="Students"
                className="hero-image img-fluid"
              />
            </Col>

          </Row>
        </Container>
      </section>

    

      <section className="features-section">
        <Container>

          <div className="text-center mb-5">
            <h2>Our Features</h2>
            <p>Everything you need to manage students efficiently</p>
          </div>

          <Row>

            <Col md={4} className="mb-4">
              <Card className="feature-card h-100">
                <Card.Body className="text-center">

                  <div className="feature-icon">👨‍🎓</div>

                  <Card.Title>
                    Student Details
                  </Card.Title>

                  <Card.Text>
                    Store and manage student information easily.
                  </Card.Text>

                </Card.Body>
              </Card>
            </Col>


            <Col md={4} className="mb-4">
              <Card className="feature-card h-100">
                <Card.Body className="text-center">

                  <div className="feature-icon">📅</div>

                  <Card.Title>
                    Attendance
                  </Card.Title>

                  <Card.Text>
                    Track student attendance and calculate percentages.
                  </Card.Text>

                </Card.Body>
              </Card>
            </Col>


            <Col md={4} className="mb-4">
              <Card className="feature-card h-100">
                <Card.Body className="text-center">

                  <div className="feature-icon">📝</div>

                  <Card.Title>
                    Assignment Marks
                  </Card.Title>

                  <Card.Text>
                    Manage assignments, marks and submission status.
                  </Card.Text>

                </Card.Body>
              </Card>
            </Col>

          </Row>

        </Container>
      </section>


  

      <section className="about-section">
        <Container>

          <Row className="align-items-center">

            <Col md={6}>
              <img
                src="public/images/classroom.jpg"
                alt="Classroom"
                className="about-image img-fluid"
              />
            </Col>

            <Col md={6}>
              <h2>Manage Everything in One Place</h2>

              <p>
                EduManage helps teachers and administrators manage
                student academic information quickly and efficiently.
              </p>

              <ul>
                <li>✅ Student Profile Management</li>
                <li>✅ Attendance Tracking</li>
                <li>✅ Assignment Management</li>
                <li>✅ Marks and Performance</li>
              </ul>

              <Button variant="primary">
                Explore Dashboard
              </Button>
            </Col>

          </Row>

        </Container>
      </section>



     
    </>
  );
}

export default Dashboard;