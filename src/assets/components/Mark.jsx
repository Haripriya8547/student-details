import { Card, Table, ProgressBar } from "react-bootstrap";

function Marks() {
  const subjects = [
    {
       subject: "Python", 
      mark: 85 
    },
    {
       subject: "React", 
      mark: 90
     },
    {
       subject: "HTML & CSS", 
      mark: 95
     },
    { 
      subject: "Django", 
      mark: 80 },
  ];

  return (
    <Card id="marks" className="shadow mb-4">

      <Card.Header>
        <h4>📚 Subject Marks</h4>
      </Card.Header>

      <Card.Body>

        <Table responsive bordered hover>

          <thead>
            <tr>
              <th>Subject</th>
              <th>Mark</th>
              
            </tr>
          </thead>

          <tbody>

            {subjects.map((item, index) => (
              <tr key={index}>

                <td>{item.subject}</td>

                <td>{item.mark} / 100</td>

                

              </tr>
            ))}

          </tbody>

        </Table>

      </Card.Body>

    </Card>
  );
}

export default Marks;