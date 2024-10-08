import React, { useState } from 'react';
import '../components/ExecutiveDept.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'; 
import defaultImage from '../assets/teams/exec.webp'; // Default department image
import maamAbaya from '../assets/teams/maamAbaya.png'; // Temporary member image

const departments = {
    Executive: {
        color: '#DB4437', // Red
        overlayColor: 'rgba(116, 1, 1, 0.5)', // Matching red overlay
        overview: 'Oversees strategic direction and decision-making, ensuring organizational goals are met effectively and efficiently, while continually evaluating and adapting to emerging opportunities.',
        members: [
            { name: 'Shiela Abaya', role: 'Organization Adviser', img: maamAbaya }
        ]
    },
    Operations: {
        color: '#F4B400', // Yellow
        overlayColor: 'rgba(244, 180, 0, 0.5)', // Matching yellow overlay
        overview: 'Handles the daily operations to keep everything running smoothly.',
        members: [
            { name: 'John Doe', role: 'Operations Lead', img: maamAbaya }
        ]
    },
    Technology: {
        color: '#4285F4', // Blue
        overlayColor: 'rgba(11, 47, 131, 0.5)', // Matching blue overlay
        overview: 'Responsible for technological developments and maintaining the systems.',
        members: [
            { name: 'Jane Smith', role: 'Tech Lead', img: maamAbaya }
        ]
    },
    Creatives: {
        color: '#0F9D58', // Green
        overlayColor: 'rgba(8, 148, 50, 0.5)', // Matching green overlay
        overview: 'Creates innovative designs and strategies to enhance brand visibility.',
        members: [
            { name: 'Chris Johnson', role: 'Creative Lead', img: maamAbaya }
        ]
    },
    'Community Development': {
        color: '#611DE6', // Violet
        overlayColor: 'rgba(119, 5, 111, 0.5)', // Matching violet overlay
        overview: 'Focuses on fostering relationships within the community and promoting growth.',
        members: [
            { name: 'Alex Brown', role: 'Community Lead', img: maamAbaya }
        ]
    }
};

function ExecutiveDept() {
    const [activeDepartment, setActiveDepartment] = useState('Executive');

    const handleOptionClick = (department) => {
        setActiveDepartment(department);
    };

    const { color, overlayColor, overview, members } = departments[activeDepartment];

    return (
        <Container fluid className="teamsContainer">
            <Row className="position-relative">
                {/* Default image used for all departments */}
                <img src={defaultImage} alt={`${activeDepartment} Board`} className="teamCover mb-3" />
                
                {/* Dynamic overlay color */}
                <div className="execOverlay" style={{ backgroundColor: overlayColor }}></div>
            </Row>
            <Row className="teamsText">
                <div className="text-align-center">
                    <h1 className="deptheader my-3" style={{ color }}>{activeDepartment} Board</h1>
                    <h5 className="deptOverview mt-3 px-5">{overview}</h5>
                </div>
            </Row>
            <Row className="teamsOption">
                {Object.keys(departments).map((dept) => (
                    <Col key={dept} className="option">
                        <a
                            style={{
                                color: activeDepartment === dept ? departments[dept].color : 'black',
                                borderBottom: activeDepartment === dept ? `4px solid ${departments[dept].color}` : 'none',
                                cursor: 'pointer'
                            }}
                            onClick={() => handleOptionClick(dept)}
                        >
                            {dept === 'Community Development' ? 'Comm. Dev.' : dept}
                        </a>
                    </Col>
                ))}
            </Row>
            <Row className="teamMembers">
                {members.map((member, index) => (
                    <Col lg={4} key={index}>
                        <img src={maamAbaya} alt={member.name} className="membersPic" />
                        <h4 className="memberName">{member.name}</h4>
                        <h5 className="execMember">{member.role}</h5>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ExecutiveDept;
