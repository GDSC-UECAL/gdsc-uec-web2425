import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../components/ExecutiveDept.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import executiveCoverPic from '../assets/teams/exec.webp';
import { Container, Row, Col } from 'react-bootstrap'; 
import maamAbaya from '../assets/teams/maamAbaya.png';

function CommunityDept() {
    const location = useLocation();
    const navigate = useNavigate();
    const activeDepartment = location.state?.activeDepartment || 'Community Development';

    // Define custom colors for each department
    const departmentColors = {
        'Executive': '#DB4437', // Custom Red
        'Creatives': '#0F9D58', // Custom Green
        'Technology': '#4285F4', // Custom Blue
        'Operations': '#F4B400', // Custom Yellow
        'Community Development': '#611DE6' // Custom Violet
    };

    const activeColor = departmentColors[activeDepartment];

    // Handle click to navigate between departments
    const handleOptionClick = (department) => {
        navigate(`/${department.toLowerCase().replace(' ', '-')}`, { state: { activeDepartment: department } });
    };

    return (
        <Container fluid className="teamsContainer">
            <Row className="position-relative">
                <img src={executiveCoverPic} alt="Executive Board" className="teamCover mb-3" />
                {/* Overlay */}
                <div className="commOverlay"></div>
                
            </Row>
            <Row className="teamsText">
                <div className='text-align-center'>
                    <h1 className='deptheader my-3'>{activeDepartment} Department</h1>
                    <h5 className='deptOverview mt-3 px-5'>Develops initiatives and programs that foster collaboration and community growth, enhancing overall club development.</h5>
                </div>
            </Row>
            <Row className='teamsOption'>
                <Col className='option'>
                    <a
                        style={{
                            color: activeDepartment === 'Executive' ? departmentColors['Executive'] : 'black',
                            borderBottom: activeDepartment === 'Executive' ? `4px solid ${departmentColors['Executive']}` : 'none',
                            cursor: 'pointer'
                        }}
                        onClick={() => handleOptionClick('Executive')}
                    >
                        Executive
                    </a>
                </Col>
                <Col className='option'>
                    <a
                        style={{
                            color: activeDepartment === 'Operations' ? departmentColors['Operations'] : 'black',
                            borderBottom: activeDepartment === 'Operations' ? `4px solid ${departmentColors['Operations']}` : 'none',
                            cursor: 'pointer'
                        }}
                        onClick={() => handleOptionClick('Operations')}
                    >
                        Operations
                    </a>
                </Col>
                <Col className='option'>
                    <a
                        style={{
                            color: activeDepartment === 'Technology' ? departmentColors['Technology'] : 'black',
                            borderBottom: activeDepartment === 'Technology' ? `4px solid ${departmentColors['Technology']}` : 'none',
                            cursor: 'pointer'
                        }}
                        onClick={() => handleOptionClick('Technology')}
                    >
                        Technology
                    </a>
                </Col>
                <Col className='option'>
                    <a
                        style={{
                            color: activeDepartment === 'Creatives' ? departmentColors['Creatives'] : 'black',
                            borderBottom: activeDepartment === 'Creatives' ? `4px solid ${departmentColors['Creatives']}` : 'none',
                            cursor: 'pointer'
                        }}
                        onClick={() => handleOptionClick('Creatives')}
                    >
                        Creatives
                    </a>
                </Col>
                <Col className='option'>
                    <a
                        style={{
                            color: activeDepartment === 'Community Development' ? departmentColors['Community Development'] : 'black',
                            borderBottom: activeDepartment === 'Community Development' ? `4px solid ${departmentColors['Community Development']}` : 'none',
                            cursor: 'pointer'
                        }}
                        onClick={() => handleOptionClick('Community Development')}
                    >
                        Comm. Dev.
                    </a>
                </Col>
            </Row>
            <Row className='teamMembers'>
                <Col lg={4}>
                    <img src={maamAbaya} alt="Members" className="membersPic" />
                    <h4 className='memberName'>Shiela Abaya</h4>
                    <h5 className='commMember'>Organization Adviser</h5>
                </Col>
                <Col lg={4}>
                    <img src={maamAbaya} alt="Members" className="membersPic" />
                    <h4 className='memberName'>Shiela Abaya</h4>
                    <h5 className='commMember'>Organization Adviser</h5>
                </Col>
                <Col lg={4}>
                    <img src={maamAbaya} alt="Members" className="membersPic" />
                    <h4 className='memberName'>Shiela Abaya</h4>
                    <h5 className='commMember'>Organization Adviser</h5>
                </Col>
            </Row>
        </Container>
    );
}

export default CommunityDept;
