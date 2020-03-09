import React from "react";
import { Form, Row, Col, Alert } from "react-bootstrap";
//importing icons
import { Icon } from "react-icons-kit";
//student icon
import { u1F466 } from 'react-icons-kit/noto_emoji_regular/u1F466'
export default function StudentPage() {
    return (
        <>
            <div className="content">
                <Alert variant="info" style={{ width: "100%", padding: "10px" }}>
                    Add student<Icon icon={u1F466} size="40" />
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
                    </Row>



                    <input type="submit" value="Add student" className="btn-success" />

                </Form>

            </div>


        </>
    )

}