import React from 'react';
import '../components/TeamsMain.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'; 
import executiveCoverPic from '../assets/teams/exec.webp';
import creativesoverPic from '../assets/teams/creatives.webp';
import technologyCoverPic from '../assets/teams/technology.webp';
import operationsCoverPic from '../assets/teams/operations.webp';
import ball1 from '../assets/teams/ball1.png'; 
import square1 from '../assets/teams/square1.png'; 

function TeamsMain() {
    return (
        <Container fluid className="teamsContainer">
            <h1>Teams</h1>
            <img src={ball1} alt="Decorative Ball" className="ball-left" />
            <img src={ball1} alt="Decorative Ball" className="ball-2left" />
            <img src={ball1} alt="Decorative Ball" className="ball-right" />
            <img src={ball1} alt="Decorative Ball" className="ball-2right" />

                
                

                {/* First Row of Images */}
                <Row className="teamsRow d-flex justify-content-center mx-3 mt-3">
                    <Col lg={6} sm={12} className="teamsBox m-3">
                        <div className="teamsPic">
                            <img src={executiveCoverPic} alt="Executive Board" />
                            <div className="execOverlay">Executive Board</div>
                        </div>
                    </Col>
                    <Col lg={6} sm={12} className="teamsBox m-3">
                        <div className="teamsPic">
                            <img src={creativesoverPic} alt="Creatives Board" />
                            <div className="creativesOverlay">Creatives Board</div>
                        </div>
                    </Col>
                </Row>

                {/* Second Row of Images */}
                <Row className="d-flex justify-content-center mx-3">
                    <Col lg={6} sm={12} className="teamsBox m-3">
                        <div className="teamsPic">
                            <img src={technologyCoverPic} alt="Technology Department" />
                            <div className="technologyDeptOverlay">Technology Department</div>
                        </div>
                    </Col>
                    <Col lg={6} sm={12} className="teamsBox m-3">
                        <div className="teamsPic">
                            <img src={operationsCoverPic} alt="Operation Department" />
                            <div className="operationDeptOverlay">Operations Department</div>
                        </div>
                    </Col>
                </Row>

                <img src={square1} alt="Decorative Triangle" className="squareLeft" />
                <img src={square1} alt="Decorative Triangle" className="squareRight" />
        </Container>
    );
}

export default TeamsMain;
