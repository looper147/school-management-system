import React from "react";
import { Form, Row, Col, Alert } from "react-bootstrap";
//importing icons
import { Icon } from "react-icons-kit";
//student icon
import { FaBookReader } from 'react-icons/fa';
export default function StudentPage() {
    return (
        <>
            <div className="content">
                <Alert variant="info" style={{ width: "100%", padding: "10px" }}>
                    <FaBookReader size="20" />Add Student
                </Alert>
                <Form>
                    <caption>Student informations</caption>
                    <Row>
                        <Form.Group as={Col} controlId="Fn" md="2">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="Mn" md="2">
                            <Form.Label>Middle Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="Ln" md="2">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="gender" md="2">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control as="select">
                                <option value disabled>Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </Form.Control>
                        </Form.Group>
                        <Col>
                            <Form.Group controlId="studentImage">
                                <Form.Label>Upload student image</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>

                        </Col>
                    </Row>


                    <Row>

                        <Form.Group as={Col} controlId="class" md="3">
                            <Form.Label>Class</Form.Label>
                            <Form.Control as="select">
                                <option default value disabled>Select class</option>
                                <option>Accounting and informatics</option>
                                <option>Assistant Accountant</option>
                                <option>Building electrician</option>
                                <option>Car mechanics</option>
                                <option>Child care</option>
                                <option>Cook</option>
                                <option>Computer programming and development</option>
                                <option>Decor</option>
                                <option>Electronics</option>
                                <option>General electricity</option>
                                <option>Graphic design</option>
                                <option>Heating,ventilating and air conditioning</option>
                                <option>Health observer</option>
                                <option>Hotel</option>
                                <option>Nurse</option>
                                <option>Nurse aide</option>
                                <option>Sale and commercial relations</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="address" md="3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group controlId="email" md="3">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="birthday" md="3">
                            <Form.Label>Date of birth</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                    </Row>



                    <caption>Parents informations</caption>
                    <Row>
                        <Form.Group as={Col} controlId="fatherName" md="2">
                            <Form.Label>Father Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="motherName" md="2">
                            <Form.Label>Mother Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="fatherOccupation" md="2">
                            <Form.Label>Father Occupation</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="MotherOccupation" md="2">
                            <Form.Label>Mother Occupation</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="phoneNumber" md="2">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="nationality" md="2">
                            <Form.Label>Nationality</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="presentAddress" md="2">
                            <Form.Label>Present Address</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="permanentAddress" md="2">
                            <Form.Label>Permanent Address</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Row>
                </Form>
                <input type="submit" value="Add student" className="btn-success" />
            </div>


        </>
    )

}