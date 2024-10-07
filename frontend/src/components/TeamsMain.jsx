import React from 'react';
import '../components/TeamsMain.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'; 
import executiveCoverPic from '../assets/teams/exec.webp';
import creativesCoverPic from '../assets/teams/exec.webp';
import technologyCoverPic from '../assets/teams/exec.webp';
import operationsCoverPic from '../assets/teams/exec.webp';
import communityCoverPic from '../assets/teams/exec.webp';
import ball1 from '../assets/teams/ball1.png'; 
import square1 from '../assets/teams/square1.png'; 

function TeamsMain() {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    // Handle clicks for each department
    const handleExecutiveClick = () => {
        navigate('/executive', { state: { activeDepartment: 'Executive' } });
    };

    const handleCreativesClick = () => {
        navigate('/creatives', { state: { activeDepartment: 'Creatives' } });
    };

    const handleTechnologyClick = () => {
        navigate('/technology', { state: { activeDepartment: 'Technology' } });
    };

    const handleOperationsClick = () => {
        navigate('/operations', { state: { activeDepartment: 'Operations' } });
    };

    const handleCommunityClick = () => {
        navigate('/community-development', { state: { activeDepartment: 'Community Development' } });
    };

    return (
        <Container fluid className="teamsContainer mb-5">
            <h1 style={{fontSize: '90px', marginTop: '30px', zIndex:'3'}}>Teams</h1>
            <img src={ball1} alt="Decorative Ball" className="elements ball-left" />
            <img src={ball1} alt="Decorative Ball" className="elements1 ball-2left" />
            <img src={ball1} alt="Decorative Ball" className="elements2 ball-right" />
            <img src={ball1} alt="Decorative Ball" className="elements ball-2right" />

            {/* First Row of Images */}
            <Row className="teamsRow d-flex justify-content-center mx-3 mt-3">
                <Col lg={6} sm={12} className="teamsBox m-3" onClick={handleExecutiveClick}>
                    <div className="teamsPic">
                        <img src={executiveCoverPic} alt="Executive Board" />
                        <div className="executiveOverlay">Executive Board</div>
                    </div>
                </Col>
                <Col lg={6} sm={12} className="teamsBox m-3" onClick={handleCreativesClick}>
                    <div className="teamsPic">
                        <img src={creativesCoverPic} alt="Creatives Board" />
                        <div className="creatiOverlay">Creatives Board</div>
                    </div>
                </Col>
            </Row>

            {/* Second Row of Images */}
            <Row className="d-flex justify-content-center mx-3">
                <Col lg={4} sm={12} className="teamsBox m-3" onClick={handleTechnologyClick}>
                    <div className="teamsPic">
                        <img src={technologyCoverPic} alt="Technology Department" />
                        <div className="technologyDeptOverlay">Technology Department</div>
                    </div>
                </Col>
                <Col lg={4} sm={12} className="teamsBox m-3" onClick={handleOperationsClick}>
                    <div className="teamsPic">
                        <img src={operationsCoverPic} alt="Operations Department" />
                        <div className="operationDeptOverlay">Operations Department</div>
                    </div>
                </Col>
                <Col lg={4} sm={12} className="teamsBox m-3" onClick={handleCommunityClick}>
                    <div className="teamsPic">
                        <img src={communityCoverPic} alt="Community Development Department" />
                        <div className="communityDeptOverlay">Community Development Department</div>
                    </div>
                </Col>
            </Row>

            <img src={square1} alt="Decorative Triangle" className="elements squareLeft" />
            <img src={square1} alt="Decorative Triangle" className="elements squareRight" />
        </Container>
    );
}

export default TeamsMain;
