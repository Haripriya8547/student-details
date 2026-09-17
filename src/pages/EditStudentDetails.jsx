import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import * as formik from "formik";
import * as yup from "yup";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { editStudent } from "../redux/studentSlice";

function EditStudentDetails() {

    const { Formik } = formik;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id } = useParams();

  
    const { student } = useSelector(
        (state) => state.studentState
    );

    
    const existingStudent = student.find(
        (student) => student.id === Number(id)
    );

    const schema = yup.object().shape({

        studentName: yup
            .string()
            .required("Please enter student name"),

        email: yup
            .string()
            .email("Please enter a valid email")
            .required("Please enter email"),

        studentId: yup
            .number()
            .required("Please enter student ID"),

        course: yup
            .string()
            .required("Please enter your course"),

    });


    const handleEdit = (values) => {

        const updatedStudent = {
            ...values,
            id: Number(id),
        };

        dispatch(editStudent(updatedStudent));

        navigate("/admin/list-details");

    };



  


    return (

        <Container>

            <Row>
                <Col>
                    <h2 className="text-center mt-4">
                        Edit Student Details
                    </h2>
                </Col>
            </Row>


            <Row className="m-3 justify-content-center">

                <Col md={6}>

                    <Formik

                        validationSchema={schema}

                        onSubmit={handleEdit}

                        initialValues={{

                            studentName: existingStudent.studentName,

                            email: existingStudent.email,

                            studentId: existingStudent.studentId,

                            course: existingStudent.course,

                        }}

                    >

                        {({
                            handleSubmit,
                            handleChange,
                            values,
                            touched,
                            errors
                        }) => (

                            <Form noValidate onSubmit={handleSubmit}>

                                {/* Student Name */}

                                <Row className="mt-2 mb-3">

                                    <Form.Group as={Col}>

                                        <Form.Label>
                                            Student Name
                                        </Form.Label>

                                        <Form.Control

                                            type="text"

                                            placeholder="Student Name"

                                            name="studentName"

                                            onChange={handleChange}

                                            value={values.studentName}

                                            isValid={
                                                touched.studentName &&
                                                !errors.studentName
                                            }

                                            isInvalid={
                                                touched.studentName &&
                                                !!errors.studentName
                                            }

                                        />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.studentName}
                                        </Form.Control.Feedback>

                                    </Form.Group>

                                </Row>


                                {/* Email */}

                                <Row className="mb-3">

                                    <Form.Group as={Col}>

                                        <Form.Label>
                                            E-mail
                                        </Form.Label>

                                        <Form.Control

                                            type="email"

                                            placeholder="Email"

                                            name="email"

                                            onChange={handleChange}

                                            value={values.email}

                                            isValid={
                                                touched.email &&
                                                !errors.email
                                            }

                                            isInvalid={
                                                touched.email &&
                                                !!errors.email
                                            }

                                        />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.email}
                                        </Form.Control.Feedback>

                                    </Form.Group>

                                </Row>


                                {/* Student ID */}

                                <Row className="mb-3">

                                    <Form.Group as={Col}>

                                        <Form.Label>
                                            Student ID
                                        </Form.Label>

                                        <Form.Control

                                            type="number"

                                            placeholder="Student ID"

                                            name="studentId"

                                            onChange={handleChange}

                                            value={values.studentId}

                                            isValid={
                                                touched.studentId &&
                                                !errors.studentId
                                            }

                                            isInvalid={
                                                touched.studentId &&
                                                !!errors.studentId
                                            }

                                        />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.studentId}
                                        </Form.Control.Feedback>

                                    </Form.Group>

                                </Row>


                                {/* Course */}

                                <Row className="mb-3">

                                    <Form.Group as={Col}>

                                        <Form.Label>
                                            Course
                                        </Form.Label>

                                        <Form.Control

                                            type="text"

                                            placeholder="Course"

                                            name="course"

                                            onChange={handleChange}

                                            value={values.course}

                                            isValid={
                                                touched.course &&
                                                !errors.course
                                            }

                                            isInvalid={
                                                touched.course &&
                                                !!errors.course
                                            }

                                        />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.course}
                                        </Form.Control.Feedback>

                                    </Form.Group>

                                </Row>


                                <Button
                                    type="submit"
                                    variant="success"
                                >
                                    Update Student
                                </Button>

                            </Form>

                        )}

                    </Formik>

                </Col>

            </Row>

        </Container>

    );

}

export default EditStudentDetails;