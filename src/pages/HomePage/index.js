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
                <NavLink to="/Students"><h4>Students</h4><FaBookReader size="60" /></NavLink>
                <NavLink to="/Teachers" className="teacherLink" ><h4>Teachers</h4><FaUserTie size="60" className="teacherIcon" /></NavLink>
            </div>
        </>
    );
}
