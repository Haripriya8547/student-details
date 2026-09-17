import { Button, Container, Row, Table, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { deleteStudent } from "../redux/studentSlice";

function ListStudentDetails() {

    const { student } = useSelector(
        (state) => state.studentState
    );

    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);



    const handleDeleteClick = (student) => {
        setSelectedStudent(student);
        setShowModal(true);
    };


   
    const handleDelete = () => {

        if (selectedStudent) {
            dispatch(deleteStudent(selectedStudent.id));
        }

        setShowModal(false);
        setSelectedStudent(null);
    };


    return (
        <>

            <h2 className="text-center mt-4">
                List Student Details
            </h2>


           
            <Button
                variant="warning"
                className="d-flex justify-content-end m-3 rounded-5"
            >
                <Link
                    className="text-decoration-none text-black"
                    to="/admin/student-details"
                >
                    Add Student
                </Link>
            </Button>


            <Container fluid>

                <Row className="bg-dark-subtle p-5">

                    <Table
                        striped
                        bordered
                        hover
                        className="tableList bg-success-subtle rounded-5 shadow-lg table-light"
                    >

                        <thead>

                            <tr>
                                <th>Student Name</th>
                                <th>Email</th>
                                <th>Student ID</th>
                                <th>Course</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>

                        </thead>


                        <tbody>

                            {student && student.length > 0 ? (

                                student.map((student) => (

                                    <tr key={student.id}>

                                        
                                        <td>
                                            {student.studentName}
                                        </td>


                                       
                                        <td>
                                            {student.email}
                                        </td>


                                        
                                        <td className="text-danger fw-bold">
                                            {student.studentId}
                                        </td>


                                        
                                        <td>
                                            {student.course}
                                        </td>


                                        
                                        <td>

                                            <Link
                                                to={`/admin/edit-student/${student.id}`}
                                                className="btn btn-primary"
                                            >
                                                Edit
                                            </Link>

                                        </td>


                                        
                                        <td>

                                            <Button
                                                variant="danger"
                                                onClick={() =>
                                                    handleDeleteClick(student)
                                                }
                                            >
                                                Delete
                                            </Button>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td
                                        colSpan="6"
                                        className="text-center"
                                    >
                                        No students found
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </Table>

                </Row>

            </Container>


           

            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                centered
            >

                <Modal.Header closeButton>

                    <Modal.Title>
                        Delete Student
                    </Modal.Title>

                </Modal.Header>


                <Modal.Body>

                    <p>
                        Are you sure you want to delete this student?
                    </p>

                    {selectedStudent && (

                        <p className="fw-bold">
                            {selectedStudent.studentName}
                        </p>

                    )}

                </Modal.Body>


                <Modal.Footer>

                    <Button
                        variant="secondary"
                        onClick={() => setShowModal(false)}
                    >
                        Cancel
                    </Button>


                    <Button
                        variant="danger"
                        onClick={handleDelete}
                    >
                        Delete
                    </Button>

                </Modal.Footer>

            </Modal>

        </>
    );
}

export default ListStudentDetails;