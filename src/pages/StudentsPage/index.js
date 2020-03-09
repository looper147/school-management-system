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
                    <FaBookReader size="20" />Add student
                </Alert>
                <Form>
                    <Row>
                        <Form.Group as={Col} controlId="Fn">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="Mn">
                            <Form.Label>Middle Name</Form.Label>
                            <Form.Control type="text" placeholder="Middle name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="Ln">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="birthday">
                            <Form.Label>Date of birth</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>

                    </Row>


                    <Row>

                        <Form.Group as={Col} controlId="class" md="4">
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
                        <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Address" />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="E-mail" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="gender" >
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

                    </Row>


                    <input type="submit" value="Add student" className="btn-success" />

                </Form>

            </div>


        </>
    )

}