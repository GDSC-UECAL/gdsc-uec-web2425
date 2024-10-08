import React, { useState, useEffect } from 'react';
import '../components/TeamsComponent.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import defaultImage from '../assets/teams/exec.webp'; // Default department image

const TeamsComponent = () => {
    const [teams, setTeams] = useState([]);  // Initialize as an empty array
    const [activeDepartment, setActiveDepartment] = useState('Executive');
    const [loading, setLoading] = useState(true);

    // Fetch data from backend on component mount
    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/v1/teams'); // Replace with your actual API endpoint
                const result = await response.json();
                setTeams(result.data || []); // Ensure teams is set to an array
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
        return <div>Loading...</div>; // Display a loading state while fetching data
    }

    // Find the active department's details
    const activeDept = teams.find(team => team.department.title === activeDepartment);
    // const teamss = activeDept ? activeDept.teamss : [];
    const color = activeDept?.department?.color || '#000'; // Fallback color
    const overlayColor = activeDept?.department?.overlayColor || 'rgba(0,0,0,0.5)';
    const overview = activeDept?.department?.description || '';

    return (
        <Container fluid className="teamsContainer">
            {/* Map over teams and conditionally display each department */}
            {
                teams.map((team, index) => {
                    if (team.department.title === 'Executive') {
                        return (
                            <div key={index}>
                                <h1>Executive Board</h1>
                            </div>
                        );
                    } else if (team.department.title === 'Operations') {
                        return (
                            <div key={index}>
                                <h1>Operations Department</h1>
                            </div>
                        );
                    } else if (team.department.title === 'Technology') {
                        return (
                            <div key={index}>
                                <h1>Technology Department</h1>
                            </div>
                        );
                    } else if (team.department.title === 'Community Development') {
                        return (
                            <div key={index}>
                                <h1>Community Development Department</h1>
                            </div>
                        );
                    } else if (team.department.title === 'Creatives') {
                        return (
                            <div key={index}>
                                <h1>Creatives Board</h1>
                            </div>
                        );
                    }
                    return null;
                })
            }

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

            {/* Department Options */}
            <Row className="teamsOption">
                {teams.map((team, index) => (
                    <Col key={index} className="option">
                        <a
                            style={{
                                color: activeDepartment === team.department.title ? color : 'black',
                                borderBottom: activeDepartment === team.department.title ? `4px solid ${color}` : 'none',
                                cursor: 'pointer'
                            }}
                            onClick={() => handleOptionClick(team.department.title)}
                        >
                            {team.department.title}
                        </a>
                    </Col>
                ))}
            </Row>

           {/* Team Members */}
           <Row className="teamMembers">
                {teams.map((team, index) => {
                    // Render header and members only for the appropriate department
                    const { title } = team.department;

                    if (title === 'Executive') {
                        return (
                            <React.Fragment key={index}>
                                <h1>Executive Board</h1>
                                {teams.filter(member => member.department.title === 'Executive').map((member, memberIndex) => (
                                    <Col lg={4} key={memberIndex}>
                                        <img src={`http://localhost:8000/storage/${member.image}`} alt={member.name} className="membersPic" />
                                        <h4 className="memberName">{member.name}</h4>
                                        <h5 className="execMember">{member.role}</h5>
                                    </Col>
                                ))}
                            </React.Fragment>
                        );
                    } else if (title === 'Operations') {
                        return (
                            <React.Fragment key={index}>
                                <h1>Operations Department</h1>
                                {teams.filter(member => member.department.title === 'Operations').map((member, memberIndex) => (
                                    <Col lg={4} key={memberIndex}>
                                        <img src={`http://localhost:8000/storage/${member.image}`} alt={member.name} className="membersPic" />
                                        <h4 className="memberName">{member.name}</h4>
                                        <h5 className="execMember">{member.role}</h5>
                                    </Col>
                                ))}
                            </React.Fragment>
                        );
                    } else if (title === 'Technology') {
                        return (
                            <React.Fragment key={index}>
                                <h1>Technology Department</h1>
                                {teams.filter(member => member.department.title === 'Technology').map((member, memberIndex) => (
                                    <Col lg={4} key={memberIndex}>
                                        <img src={`http://localhost:8000/storage/${member.image}`} alt={member.name} className="membersPic" />
                                        <h4 className="memberName">{member.name}</h4>
                                        <h5 className="execMember">{member.role}</h5>
                                    </Col>
                                ))}
                            </React.Fragment>
                        );
                    } else if (title === 'Community Development') {
                        return (
                            <React.Fragment key={index}>
                                <h1>Community Development Department</h1>
                                {teams.filter(member => member.department.title === 'Community Development').map((member, memberIndex) => (
                                    <Col lg={4} key={memberIndex}>
                                        <img src={`http://localhost:8000/storage/${member.image}`} alt={member.name} className="membersPic" />
                                        <h4 className="memberName">{member.name}</h4>
                                        <h5 className="execMember">{member.role}</h5>
                                    </Col>
                                ))}
                            </React.Fragment>
                        );
                    } else if (title === 'Creatives') {
                        return (
                            <React.Fragment key={index}>
                                <h1>Creatives Board</h1>
                                {teams.filter(member => member.department.title === 'Creatives').map((member, memberIndex) => (
                                    <Col lg={4} key={memberIndex}>
                                        <img src={`http://localhost:8000/storage/${member.image}`} alt={member.name} className="membersPic" />
                                        <h4 className="memberName">{member.name}</h4>
                                        <h5 className="execMember">{member.role}</h5>
                                    </Col>
                                ))}
                            </React.Fragment>
                        );
                    }
                    return null; // Return null for non-matching departments
                })}
            </Row>

        </Container>
    );
};

export default TeamsComponent;
