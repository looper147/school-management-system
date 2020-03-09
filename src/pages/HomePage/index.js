import React from "react";
import { Alert } from "react-bootstrap";
import "./index.css";
import { NavLink } from "react-router-dom";
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
                        Total Students<FaBookReader size="40" />
                    </Alert>
                    {/*total teachers*/}
                    <Alert variant="danger">
                        <Alert.Heading>50</Alert.Heading>
                        Total Teachers <FaUserTie size="40" />
                    </Alert>
                    {/*total parents*/}
                    <Alert variant="warning">
                        <Alert.Heading>350</Alert.Heading>
                        Total Parents<FaUserAlt size="40" />
                    </Alert>
                </div>
                <NavLink to="/Students" className="nav-link"><strong>Students</strong><FaBookReader size="40" /></NavLink>
            </div>
        </>
    );
}
