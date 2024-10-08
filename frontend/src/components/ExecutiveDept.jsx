import React, { useState } from 'react';
import '../components/ExecutiveDept.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'; 
import executiveCoverPic from '../assets/teams/exec.webp';
import maamAbaya from '../assets/teams/maamAbaya.png';

const departments = {
    Executive: {
        color: '#DB4437',
        overview: 'Oversees strategic direction and decision-making, ensuring organizational goals are met effectively and efficiently, while continually evaluating and adapting to emerging opportunities.',
        members: [
            { name: 'Shiela Abaya', role: 'Organization Adviser', img: maamAbaya }
        ]
    },
    Operations: {
        color: '#F4B400',
        overview: 'Handles the daily operations to keep everything running smoothly.',
        members: [
            { name: 'John Doe', role: 'Operations Lead', img: maamAbaya }
        ]
    },
    Technology: {
        color: '#4285F4',
        overview: 'Responsible for technological developments and maintaining the systems.',
        members: [
            { name: 'Jane Smith', role: 'Tech Lead', img: maamAbaya }
        ]
    },
    Creatives: {
        color: '#0F9D58',
        overview: 'Creates innovative designs and strategies to enhance brand visibility.',
        members: [
            { name: 'Chris Johnson', role: 'Creative Lead', img: maamAbaya }
        ]
    },
    'Community Development': {
        color: '#611DE6',
        overview: 'Focuses on fostering relationships within the community and promoting growth.',
        members: [
            { name: 'Alex Brown', role: 'Community Lead', img: maamAbaya }
        ]
    }
};

function ExecutiveDept() {
    {/*const [activeDepartment, setActiveDepartment] = useState('Executive');
    const [departmentData, setDepartmentData] = useState(null);

    // Fetch department data from backend API
    const fetchDepartmentData = async (department) => {
        try {
            const response = await axios.get(`/api/departments/${department.toLowerCase().replace(' ', '-')}`);
            setDepartmentData(response.data);
        } catch (error) {
            console.error('Error fetching department data:', error);
        }
    };

    // Fetch data for the initially active department
    useEffect(() => {
        fetchDepartmentData(activeDepartment);
    }, [activeDepartment]);*/}

    const [activeDepartment, setActiveDepartment] = useState('Executive');

    const handleOptionClick = (department) => {
        setActiveDepartment(department);
    };

    const { color, overview, members } = departments[activeDepartment];

    return (
        <Container fluid className="teamsContainer">
            <Row className="position-relative">
                <img src={executiveCoverPic} alt={`${activeDepartment} Board`} className="teamCover mb-3" />
                <div className="execOverlay"></div>
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
                        <img src={member.img} alt={member.name} className="membersPic" />
                        <h4 className="memberName">{member.name}</h4>
                        <h5 className="execMember">{member.role}</h5>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ExecutiveDept;
