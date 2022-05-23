import React from "react";
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav } from 'react-bootstrap';


class Navigation extends Component {
    render() {
        return (
            <div className="App">
                <Nav variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/">Chatbot</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            using OpenAI
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        );
    }
}

export default Navigation;
