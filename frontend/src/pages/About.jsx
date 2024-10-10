import './About.css';
import el1 from '../assets/common/1.png';
import el2 from '../assets/common/2.png';
import el3 from '../assets/common/3.png';
import el4 from '../assets/common/4.png';
import el5 from '../assets/common/5.png';
import el6 from '../assets/common/6.png';
import el7 from '../assets/common/7.png';
import el8 from '../assets/common/8.png';
import el9 from '../assets/common/9.png';
import el10 from '../assets/common/10.png';
import el11 from '../assets/common/11.png';
import el12 from '../assets/common/12.png';
import el13 from "../assets/common/13.png";
import el14 from "../assets/common/14.png";
import gdsc_photo from '../assets/common/gdsc-grp.png';
import gdsc_mascot from '../assets/common/mascot.png';
import vecA from '../assets/common/vector_a.png';
import vecB from '../assets/common/vector_b.png';
import vecC from '../assets/common/vector_c.png';
import vecD from '../assets/common/vector_d.png';
import vecE from '../assets/common/vector_e.png';
import vecF from '../assets/common/vector_f.png';
import vecG from '../assets/common/vector_g.png';
import vecH from '../assets/common/vector_h.png';
import vision from '../assets/about/vision.png';
import "../components/Aboutuscarousel.css";
import Aboutuscarousel from '../components/Aboutuscarousel.jsx';
import { FaBrain, FaHammer, FaNetworkWired } from 'react-icons/fa';


function About() {
    return (
        <>

            <div className="About-Us" style={{ width: '100%', height: '100vh', position: 'relative', overflowX: 'clip', margin: '0px', padding: '0px' }}>

                <img className="floating-element el2" style={{ width: '7%', left: '22vw', top: '19vh', position: 'absolute', float: 'right', animation: 'float 10s linear infinite' }} src={el2} />
                <img className="floating-element el7" style={{ width: '5%', left: '70vw', top: '18vh', position: 'absolute', float: 'right', animation: 'float1 16s linear infinite' }} src={el7} />
                <img className="floating-element el11" style={{ width: '4%', left: '40vw', top: '32vh', position: 'absolute', float: 'right', animation: 'float 20s linear infinite' }} src={el11} />
               
                <img className="floating-element el1" style={{ width: '2%', left: '75vw', top: '30vh', position: 'absolute', float: 'right', animation: 'float 13s linear infinite' }} src={el1} />
                <img className="floating-element el10" style={{ width: '8%', left: '42vw', top: '19vh', position: 'absolute', float: 'right', animation: 'float1 12s linear infinite' }} src={el10} />
                <img className="floating-element el12" style={{ width: '13%', left: '12vw', top: '29vh', position: 'absolute', float: 'right', animation: 'float 11s linear infinite' }} src={el12} />
                <img className="floating-element el13" style={{ width: '6%', left: '0vw', top: '29vh', position: 'absolute', float: 'right', animation: 'float1 10s linear infinite' }} src={el3} />
                <img className="floating-element el12" style={{ width: '3%', left: '10vw', top: '24vh', position: 'absolute', float: 'right', animation: 'float 9s linear infinite' }} src={el12} />
                
                <img className="floating-element el5" style={{ width: '3%', left: '3vw', top: '20vh', position: 'absolute', float: 'right', animation: 'float 7s linear infinite' }} src={el5} />
        
                <img className="floating-element el10" style={{ width: '5%', left: '17vw', top: '20vh', position: 'absolute', float: 'right', animation: 'float 15s linear infinite' }} src={el10} />
                <img className="floating-element el5" style={{ width: '5%', left: '80vw', top: '35vh', position: 'absolute', float: 'right', animation: 'float1 18s linear infinite' }} src={el5} />
                <img className="floating-element el6" style={{ width: '9%', left: '92vw', top: '30vh', position: 'absolute', float: 'right', animation: 'float 14s linear infinite' }} src={el6} />
                <img className="floating-element el8" style={{ width: '10%', left: '80vw', top: '15vh', position: 'absolute', float: 'right', animation: 'float1 17s linear infinite' }} src={el8} />
                <img className="floating-element el9" style={{ width: '7%', left: '60vw', top: '20vh', position: 'absolute', float: 'right', animation: 'float 9s linear infinite' }} src={el9} />
                
                <img style={{ width: '53%', left: '53.7vw', top: '15.5vh', position: 'absolute', float: 'right' }} src={el14} />

                <img style={{ width: '50%', left: '-3vw', top: '24.5vh', position: 'absolute', float: 'right' }} src={el13} />

                <div className="container-fluid p-0 position-relative vh-100">
                    <div className="position-absolute w-100 h-100 d-flex flex-column justify-content-center">
                        <div className="text-center">
                            <h1 className="about-title">About Us</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-carousel">
                <Aboutuscarousel />
            </div>
            <div style={{width:'100vw', overflowX: 'clip'}}>
            <img className="vector-image vec-e" style={{ width: '20%', left: '0vw', top: '104vh', position: 'absolute', float: 'right' }} src={vecE} />
            <img className="vector-image vec-h" style={{ width: '21%', right: '0vw', top: '110.6vh', position: 'absolute', float: 'right' }} src={vecH} />
            <img className="floating-element el6" style={{ width: '21%', right: '-10vw', top: '145.6vh', position: 'absolute', float: 'right' }} src={el6} />
            <img className="floating-element el10" style={{ width: '10%', left: '-5vw', top: '130.6vh', position: 'absolute', float: 'right' }} src={el10} />
            <img className="floating-element el12" style={{ width: '19%', left: '-10vw', top: '160.6vh', position: 'absolute', float: 'right' }} src={el12} />
            <img className="vector-image vec-c" style={{ width: '30%', left: '-4vw', top: '180.6vh', position: 'absolute', float: 'right' }} src={vecC} />
            <div className="container-fluid p-0 position-relative">
                <div className="gdsc-section">
                    <h2 className="gdsc-title">
                        What is <span className="gdsc-letter g">G</span><span className="gdsc-letter d">D</span><span className="gdsc-letter s">S</span><span className="gdsc-letter c">C</span> UE Caloocan?
                    </h2>
                    <p className="gdsc-description">
                        Google Developer Student Clubs UE Caloocan is a student-led technology organization situated at the University of The East in Caloocan City. As a proud member of a global community, our mission is to empower diverse communities worldwide through the transformative power of technology.
                    </p>
                </div>
            </div>
            </div>
            <div className="about-container p-2">
                <section className="mission-section text-start mb-5" >
                <h2 className="mission-title" style={{ textAlign: 'start' }}>Mission</h2>
                <p className="mission-subtitle mb-5" style={{ textAlign: 'start' }}>We aim to do the <b><span style={{color:'#eb5757'}}>A</span>.<span style={{color:'#f2c94c'}}>B</span><span style={{color:'#198754'}}>.C</span></b></p>
                <div className="row text-center text-start">
                    <div className="col-md-4 col-sm-12 mb-4">
                    <div className="mission-item">
                        <FaNetworkWired className="abc-icon" style={{color:'#eb5757'}}/>
                        <h3 className="mission-heading text-danger">Aspire</h3>
                        <p> Individuals to grow with the help of peer-to-peer learning through the community.</p>
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-12 mb-4">
                    <div className="mission-item">
                        <FaHammer className="abc-icon" style={{color:'#f2c94c'}}/>
                        <h3 className="mission-heading text-warning">Build</h3>
                        <p>Experience & meaningful technologies to empower communities.</p>
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-12 mb-4">
                    <div className="mission-item">
                        <FaBrain className="abc-icon" style={{color:'#198754'}}/>
                        <h3 className="mission-heading text-success">Connect</h3>
                        <p>With people through the community and organizations to grow your network.</p>
                    </div>
                    </div>
                </div>
                </section>

                <section className="mission-section" >
                <div className="row flex-column-reverse flex-md-row">
                    <div className="col-md-6 col-sm-12 mb-4">
                        <div className="vision-item" style={{lineHeight: '35px'}}>
                            <h2 className="mission-title mb-3" style={{ textAlign: 'start' }}>Vision</h2>
                            <p>The organization envisions itself as a catalyst for creating an inclusive and supportive environment that encourages personal and professional growth. Through the power of technology and innovative solutions, we aim to uplift communities, making a positive impact and addressing their needs.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-4">
                        <div className="mission-item">
                        <img
                            src={vision}
                            alt="Club"
                            style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                        </div>
                    </div>
                </div>
                </section>
                <section className="mission-section text-start" >
                <div className="row flex-column-reverse flex-md-row text-center text-start">
                    <div className="col-md-6 col-sm-12 mb-4">
                        <div className="mission-item" style={{lineHeight: '35px'}}>
                            <h2 className="mission-title mb-2" style={{ textAlign: 'start' }}>Departments</h2>
                        </div>
                    </div>
                </div>
                </section>
            </div>
                <div className="row text-center text-start">
                    <div className="col-md-6 col-sm-12 mb-4 d-flex flex-column justify-content-center">
                        <div className="o-department-block text-start" style={{ borderColor: '#f54242'}}>
                            <h3>Operations Department</h3>
                            <p>Ensures seamless event execution and initiative implementation, optimizing resources for successful outcomes through meticulous planning.</p>
                        </div>
                        <div className="c-department-block my-3 text-start" style={{color: '#4287f5', borderColor: '#4287f5'}}>
                            <h3>Creatives Department</h3>
                            <p>Plans and implements engaging marketing and communication strategies, enhancing the organization's brand presence and community.</p>
                        </div>
                        <div className="cd-department-block text-start" style={{color: '#f5ae45', borderColor: '#f5ae45'}}>
                            <h3>Community Development Department</h3>
                            <p>Empowers members through educational materials and workshops, fostering innovation and technical expertise within the community.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-4 d-flex flex-column justify-content-center">
                        <div className="t-department-block mb-3 text-end" style={{color: '#39ba3c', borderColor: '#39ba3c'}}>
                            <h3>Technology Department</h3>
                            <p>Empowers members through educational materials and workshops, fostering innovation and technical expertise within the community.</p>
                        </div>
                        <div className="e-department-block text-end" style={{color: '#6c12b6', borderColor: '#6c12b6'}}>
                            <h3>Executive Board</h3>
                            <p>Oversees strategic direction and decision-making, ensuring organizational goals are met effectively and efficiently, while continually evaluating and adapting to emerging opportunities.</p>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default About;
