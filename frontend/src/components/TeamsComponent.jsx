import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../components/TeamsComponent.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'; 
import defaultImage from '../assets/teams/exec.webp'; 

function TeamsComponent() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/v1/teams');
                setMembers(response.data.data);  // Access the data field within the response
            } catch (error) {
                console.error('Error fetching the team data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Container fluid className="teamsContainer">
            <Row className="position-relative">
                <img src={defaultImage} alt="Team Board" className="teamCover mb-3" />
            </Row>
            <Row className="teamMembers">
                {members.length > 0 ? (
                    members.map((member, index) => (
                        <Col lg={4} key={index}>
                            <img src={member.image} alt={member.name} className="membersPic" />
                            <h4 className="memberName">{member.name}</h4>
                        </Col>
                    ))
                ) : (
                    <p>No members available.</p>
                )}
            </Row>
        </Container>
    );
}

export default TeamsComponent;
