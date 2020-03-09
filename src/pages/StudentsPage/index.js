import React from "react";
import { Alert } from "react-bootstrap";
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
                <form>
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Middle name" />
                    <input type="text" placeholder="Last name" />
                    <input type="submit" value="Add student" className="btn-success" />

                </form>

            </div>


        </>
    )

}