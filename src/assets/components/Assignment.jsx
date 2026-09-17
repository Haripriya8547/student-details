import { Card, Table, Badge } from "react-bootstrap";

function Assignment() {
  const assignments = [
    {
      name: "Assignment 1",
      subject: "Python",
      mark: 18,
      total: 20,
      status: "Submitted",
    },
    {
      name: "Assignment 2",
      subject: "React",
      mark: 17,
      total: 20,
      status: "Submitted",
    },
    {
      name: "Assignment 3",
      subject: "Django",
      mark: 0,
      total: 20,
      status: "Pending",
    },
  ];

  return (
    <Card id="assignments" className="shadow mb-4">

      <Card.Header>
        <h4>Assignment Details</h4>
      </Card.Header>

      <Card.Body>

        <Table responsive striped bordered hover>

          <thead>
            <tr>
              <th>Assignment</th>
              <th>Subject</th>
              <th>Mark</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {assignments.map((assignment, index) => (
              <tr key={index}>

                <td>{assignment.name}</td>

                <td>{assignment.subject}</td>

                <td>
                  {assignment.mark} / {assignment.total}
                </td>

                <td>
                  {assignment.status === "Submitted" ? (
                    <Badge bg="success">
                      Submitted
                    </Badge>
                  ) : (
                    <Badge bg="warning" text="dark">
                      Pending
                    </Badge>
                  )}
                </td>

              </tr>
            ))}

          </tbody>

        </Table>

      </Card.Body>

    </Card>
  );
}



export default Assignment;