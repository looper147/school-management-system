import React from "react";
import { useState } from "react";
//import Form stuffs
import { Form, Row, Col, Alert } from "react-bootstrap";
//student icon
import { FaBookReader } from 'react-icons/fa';
//a labeled input component
function FormInput(props) {
    return (
        <Form.Group as={Col} controlId={props.label} md="2">
            <Form.Label>{props.label}</Form.Label>
            <Form.Control type={props.type} />
        </Form.Group>
    )

}
function AddStudentForm() {
    return (
        <>
            <Alert variant="info" style={{ width: "100%", padding: "10px" }}>
                <FaBookReader size="20" />Add Student
                </Alert>
            <Form>
                <caption>Student informations</caption>
                <Row>
                    <FormInput label="First Name" type="text" />
                    <FormInput label="Middle Name" type="text" />
                    <FormInput label="Last Name" type="text" />
                    <Form.Group as={Col} controlId="gender" md="2">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control as="select">
                            <option value disabled>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </Form.Control>
                    </Form.Group>
                    <FormInput label="Upload student's photo" type="file" />
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
                    <FormInput label="Address" type="text" />
                    <FormInput label="E-mail" type="email" />
                    <FormInput label="Date of birth" type="date" />
                </Row>
                <caption>Parents informations</caption>
                <Row>
                    <FormInput label="Father Name" type="text" />
                    <FormInput label="Mother Name" type="text" />
                    <FormInput label="Father Occupation" type="text" />
                    <FormInput label="Mother Occupation" type="text" />
                </Row>
                <Row>
                    <FormInput label="Phone Number" type="text" />
                    <FormInput label="Nationality" type="text" />
                    <FormInput label="Present Address" type="text" />
                    <FormInput label="Permanent Address" type="text" />
                </Row>
            </Form>
            <input type="submit" value="Add Student" className="btn-success" />
        </>)
}
export default function StudentPage() {
    return (
        <>
            <div className="content">
                <AddStudentForm />
            </div>


        </>
    );
}


