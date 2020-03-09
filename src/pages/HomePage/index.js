import React from "react";
import { Alert } from "react-bootstrap";
import "./index.css";
//student icon
import { FaBookReader } from 'react-icons/fa';
//teacher icon
import { FaUserTie } from 'react-icons/fa';
//parent icon
import { FaUserAlt } from 'react-icons/fa';
export default function HomePage() {
    return (
        <>
            {/*total students*/}
            <div className="content">
                <div className="homeAlerts">
                    <Alert variant="primary">
                        <Alert.Heading>370</Alert.Heading>
                        Total students<FaBookReader size="40" />
                    </Alert>
                    {/*total teachers*/}
                    <Alert variant="danger">
                        <Alert.Heading>50</Alert.Heading>
                        Total teachers <FaUserTie size="40" />
                    </Alert>
                    {/*total parents*/}
                    <Alert variant="warning">
                        <Alert.Heading>350</Alert.Heading>
                        Total parents<FaUserAlt size="40" />
                    </Alert>
                </div>

            </div>
        </>
    );
}
