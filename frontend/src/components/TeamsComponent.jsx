import React, { useState, useEffect } from 'react';
import '../components/TeamsComponent.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import defaultImage from '../assets/teams/exec.webp'; 

const TeamsComponent = () => {
    const [teams, setTeams] = useState([]);  
    const [activeDepartment, setActiveDepartment] = useState('Executive Board');
    const [loading, setLoading] = useState(true);

    // Department color mapping
    const departmentColors = {
        'Executive Board': '#DB4437',
        'Technology Department': '#4285F4',
        'Operations Department': '#F4B400',
        'Creatives Board': '#0F9D58',
        'Community Development Department': '#611DE6',
    };

    // Fallback color
    const defaultColor = '#000000';

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/v1/teams');
                const result = await response.json();
                setTeams(result.data || []); 
                setLoading(false);
            } catch (error) {
                console.error('Error fetching departments:', error);
                setLoading(false);
            }
        };
        fetchDepartments();
    }, []);

    const handleOptionClick = (department) => {
        setActiveDepartment(department);
    };

    if (loading) {
        return <div>Loading...</div>; 
    }

    const uniqueDepartments = Array.from(new Set(teams.map(team => team.department.title)));

    // Use department color or fallback to black if department is not found
    const color = departmentColors[activeDepartment] || defaultColor;
    const overlayColor = color + '80'; // Add transparency for the overlay color
    const activeDept = teams.find(team => team.department.title === activeDepartment);
    const overview = activeDept?.department?.description || '';
    const members = teams.filter(member => member.department.title === activeDepartment); // Get members of the active department

    return (
        <Container fluid className="teamsContainer">
            {/* Department image and overlay */}
            <Row className="position-relative">
                <img src={defaultImage} alt={`${activeDepartment} Board`} className="teamCover mb-3" />
                <div className="execOverlay" style={{ backgroundColor: overlayColor }}></div>
            </Row>

            {/* Department Text */}
            <Row className="teamsText">
                <div className="text-align-center">
                    <h1 className="deptheader my-3" style={{ color }}>{activeDepartment}</h1>
                    <h5 className="deptOverview mt-3 px-5">{overview}</h5>
                </div>
            </Row>

            {/* Department Options (Pseudo-navbar) */}
            <Row className="teamsOption">
                {uniqueDepartments.map((department, index) => (
                    <Col key={index} className="option">
                        <a
                            style={{
                                color: activeDepartment === department ? color : 'black',
                                borderBottom: activeDepartment === department ? `4px solid ${color}` : 'none',
                                cursor: 'pointer'
                            }}
                            onClick={() => handleOptionClick(department)}
                        >
                            {department}
                        </a>
                    </Col>
                ))}
            </Row>

            {/* Team Members */}
            <Row className="teamMembers">
                {members.length > 0 ? (
                    members.map((member, memberIndex) => (
                        <Col sm={12} md={6} lg={3} key={memberIndex} className="text-center mb-4">
                            <img src={`http://localhost:8000/storage/${member.image}`} alt={member.name} className="membersPic" />
                            <h4 className="memberName">{member.name}</h4>
                            <h5 className="execMember" style={{ color }}>{member.role}</h5> {/* Apply the department color */}
                        </Col>
                    ))
                ) : (
                    <Col className="text-center">
                        <p>No members found for this department.</p>
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default TeamsComponent;
