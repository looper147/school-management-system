import React from "react";
import { Form, Row, Col, Alert } from "react-bootstrap";
//teacher icon
import { FaUserTie } from 'react-icons/fa';
//a labeled input component
function FormInput(props) {
    return (
        <Form.Group as={Col} controlId={props.label} md="2">
            <Form.Label>{props.label}</Form.Label>
            <Form.Control type={props.type} />
        </Form.Group>
    )

}
function AddTeacherForm() {
    return (
        <>
            <Alert variant="info" style={{ width: "80%", padding: "10px" }}>
                <FaUserTie size="20" />Add Teacher
            </Alert>
            <Form>
                <h4>Teacher informations</h4>
                <Row>
                    <FormInput label="First Name" type="text" />
                    <FormInput label="Last Name" type="text" />
                    <Form.Group as={Col} controlId="gender" md="2">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control as="select">
                            <option value disabled>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </Form.Control>
                    </Form.Group>
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
                    <Form.Group as={Col} controlId="class" md="3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control as="select">
                            <option default value disabled>Select class</option>
                            <option>informatics</option>
                            <option>Accountant</option>
                            <option>electricity</option>
                            <option>mechanics</option>
                            <option>Child care</option>
                            <option>Cooking</option>
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
                    <FormInput label="Date of Birth" type="date" />

                </Row>
                <Row>
                    <FormInput label="E-mail" type="email" />
                    <FormInput label="Address" type="text" />
                </Row>
            </Form>
            <input type="submit" className="btn-success" value="Add Teacher" /></>
    )
}
export default function TeachersPage() {
    return (
        <>
            <div className="content">
                <AddTeacherForm />
            </div>
        </>
    )
}