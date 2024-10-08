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
import "../components/Aboutuscarousel.css";
import Aboutuscarousel from '../components/Aboutuscarousel.jsx';


function About() {
  return (
    <>
    
      <div className="Landing" style={{ width: '100%', height: '100vh', position: 'relative', overflowX: 'clip', margin: '0px', padding: '0px' }}>

        <img className="testimg" style={{ width: '7%', left: '22vw', top: '15vh', position: 'absolute', float: 'right', animation: 'float 10s linear infinite'}} src={el2} />
        <img className="testimg" style={{ width: '5%', left: '70vw', top: '18vh', position: 'absolute', float: 'right', animation: 'float1 16s linear infinite' }} src={el7} />
        <img className="testimg" style={{ width: '4%', left: '40vw', top: '32vh', position: 'absolute', float: 'right', animation: 'float 20s linear infinite' }} src={el11} />
        <img className="testimg" style={{ width: '10%', left: '47vw', top: '31vh', position: 'absolute', float: 'right', animation: 'float1 15s linear infinite' }} src={el4} />
        <img className="testimg" style={{ width: '2%', left: '75vw', top: '30vh', position: 'absolute', float: 'right', animation: 'float 13s linear infinite' }} src={el1} />
        <img className="testimg" style={{ width: '8%', left: '42vw', top: '19vh', position: 'absolute', float: 'right', animation: 'float1 12s linear infinite' }} src={el10} />
        <img className="testimg" style={{ width: '13%', left: '12vw', top: '29vh', position: 'absolute', float: 'right', animation: 'float 11s linear infinite' }} src={el12} />
        <img className="testimg" style={{ width: '6%', left: '0vw', top: '29vh', position: 'absolute', float: 'right', animation: 'float1 10s linear infinite' }} src={el3} />
        <img className="testimg" style={{ width: '3%', left: '10vw', top: '24vh', position: 'absolute', float: 'right', animation: 'float 9s linear infinite' }} src={el12} />
        <img className="testimg" style={{ width: '10%', left: '3vw', top: '24vh', position: 'absolute', float: 'right', animation: 'float1 14s linear infinite' }} src={el4} />
        <img className="testimg" style={{ width: '3%', left: '3vw', top: '20vh', position: 'absolute', float: 'right', animation: 'float 7s linear infinite' }} src={el5} />
        <img className="testimg" style={{ width: '20%', left: '25vw', top: '4vh', position: 'absolute', float: 'right', animation: 'float1 12s linear infinite' }} src={el7} />
        <img className="testimg" style={{ width: '5%', left: '17vw', top: '20vh', position: 'absolute', float: 'right', animation: 'float 15s linear infinite' }} src={el10  } />
        <img className="testimg" style={{ width: '5%', left: '80vw', top: '35vh', position: 'absolute', float: 'right', animation: 'float1 18s linear infinite' }} src={el5} />
        <img className="testimg" style={{ width: '9%', left: '92vw', top: '30vh', position: 'absolute', float: 'right', animation: 'float 14s linear infinite' }} src={el6} />
        <img className="testimg" style={{ width: '10%', left: '80vw', top: '15vh', position: 'absolute', float: 'right', animation: 'float1 17s linear infinite' }} src={el8} />
        <img className="testimg" style={{ width: '7%', left: '60vw', top: '20vh', position: 'absolute', float: 'right', animation: 'float 9s linear infinite' }} src={el9} />
        <img className="testimg" style={{ width: '15%', left: '84vw', top: '20vh', position: 'absolute', float: 'right', animation: 'float1 10s linear infinite' }} src={el1} />
        <img style={{ width: '53%', left: '53.7vw', top: '15.5vh', position: 'absolute', float: 'right' }} src={el14} />
        
        <img style={{ width: '50%', left: '-3vw', top: '24.5vh', position: 'absolute', float: 'right' }} src={el13} />

        <div className="container-fluid p-0 position-relative" style={{ height: '95vh' }}>
          <div className="position-absolute w-100 h-100 d-flex flex-column justify-content-center">
            <div className="text-start text-sm-center" style={{ right: 'clamp(0px, 0vw, 1000px)', position: 'relative' }}>
              <h1 className="text-together">About Us</h1>
            </div>
          </div>
        </div>
      </div>
      <Aboutuscarousel/>
      



    </>
  );
}

export default About;
