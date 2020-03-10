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
            <Form.Control type={props.type} onChange={props.onChange} value={props.value} />
        </Form.Group>
    )

}
function AddStudentForm() {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');

    const handleFirstNameChange = (event) => {
        const firstName = event.target.value;
        setFirstName(firstName);
    }
    const handleMiddleNameChange = (event) => {
        const middleName = event.target.value;
        setMiddleName(middleName)
    }
    const handleFormSubmit = (event) => {
        alert(`${firstName} ${middleName}`);
        event.preventDefault();
    }
    return (
        <>
            <Alert variant="info" style={{ width: "80%", padding: "10px" }}>
                <FaBookReader size="20" />Add Student
                </Alert>
            <Form onSubmit={handleFormSubmit}>
                <h4>Student informations</h4>
                <Row>
                    <FormInput label="First Name" type="text" onChange={handleFirstNameChange} />
                    <FormInput label="Middle Name" type="text" onChange={handleMiddleNameChange} />
                    <FormInput label="Last Name" type="text" />
                    <Form.Group as={Col} controlId="gender" md="2">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control as="select">
                            <option value disabled>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </Form.Control>
                    </Form.Group>
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
                </Row>
                <Row>
                    <FormInput label="Address" type="text" />
                    <FormInput label="E-mail" type="email" />
                    <FormInput label="Date of birth" type="date" />
                </Row>
                <h4>Parents informations</h4>
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

                <input type="submit" value="Add Student" className="btn-success" />
            </Form>

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


