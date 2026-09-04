import { Card, Row, Col } from "react-bootstrap";

function Attendance() {
  return (
    <Card id="attendance" className="shadow mb-4">

      <Card.Header>
        <h4>📊 Attendance Details</h4>
      </Card.Header>

      <Card.Body>

        <Row>

          <Col md={4} className="text-center">
            <h5>Total Working Days</h5>
            <h3>100</h3>
          </Col>

          <Col md={4} className="text-center">
            <h5>Days Present</h5>
            <h3 className="text-success">85</h3>
          </Col>

          <Col md={4} className="text-center">
            <h5>Days Absent</h5>
            <h3 className="text-danger">15</h3>
          </Col>

        </Row>

      </Card.Body>

    </Card>
  );
}

export default Attendance;