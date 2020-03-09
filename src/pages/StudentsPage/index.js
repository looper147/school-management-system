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
                    Add student <FaBookReader size="20" />
                </Alert>
                <Form>
                    <Row>
                        <Form.Group as={Col} controlId="Fn">
                            <Form.Label for="Fn">First Name</Form.Label>
                            <Form.Control type="text" placeholder="First name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="Mn">
                            <Form.Label for="Mn">Middle Name</Form.Label>
                            <Form.Control type="text" placeholder="Middle name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="Ln">
                            <Form.Label for="Ln">Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="birthdate">
                            <Form.Label for="birthdate">Date of birth</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="gender">
                            <p>Gender</p>
                            {['radio'].map(type =>
                                <>
                                    <Form.Check
                                        custom
                                        id={`custom-inline-radio-${type}-1`}
                                        inline
                                        label="Male"
                                        name="gender"
                                        type={type}
                                    />
                                    <Form.Check
                                        custom
                                        id={`custom-inline-radio-${type}-2`}
                                        inline
                                        label="Female"
                                        name="gender"
                                        type={type}
                                    />
                                </>
                            )}

                        </Form.Group>
                        <Form.Group as={Col} controlId="class">
                            <Form.Label for="class">Class</Form.Label>
                            <Form.Control as="select">
                                <option selected disabled>Select class</option>
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
                        <Form.Group controlId="address">
                            <Form.Label for="address">Address</Form.Label>
                            <Form.Control type="text" placeholder="Address" />
                        </Form.Group>
                    </Row>



                    <input type="submit" value="Add student" className="btn-success" />

                </Form>

            </div>


        </>
    )

}