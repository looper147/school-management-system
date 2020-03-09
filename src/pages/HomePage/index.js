import React from "react";
import { Alert } from "react-bootstrap";
import "./index.css";
//importing icons
import { Icon } from "react-icons-kit";
//student icon
import { u1F466 } from 'react-icons-kit/noto_emoji_regular/u1F466'
//teacher icon
import { userTie } from 'react-icons-kit/icomoon/userTie'
//parent icon
import { user } from 'react-icons-kit/icomoon/user'
export default function HomePage() {
    return (
        <>
            {/*total students*/}
            <div className="content">
                <div className="homeAlerts">
                    <Alert variant="primary">
                        <Alert.Heading>370</Alert.Heading>
                        Total students<Icon icon={u1F466} size="40" />
                    </Alert>
                    {/*total teachers*/}
                    <Alert variant="danger">
                        <Alert.Heading>50</Alert.Heading>
                        Total teachers<Icon icon={userTie} size="35" />
                    </Alert>
                    {/*total parents*/}
                    <Alert variant="warning">
                        <Alert.Heading>350</Alert.Heading>
                        Total parents<Icon icon={user} size="35" />
                    </Alert>
                </div>

            </div>
        </>
    );
}
