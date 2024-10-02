import { useState } from 'react'
import './Home.css'
import logo from '../assets/common/gdsc_logo.png';
import Footer from "../components/Footer.jsx";
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

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="HomePage" style={{width: '100vw', height: '100vw', position: 'relative', overflow: 'hidden', margin: '0px', padding: '0px'}}>

        <div className="Webpage1" style={{width: '20vw', height: '35vh', left: '8vw', top: '45vh', position: 'absolute', transform: 'rotate(-4.98deg)', transformOrigin: '0 0'}} />

        <img style={{width: '20%', height: '20%', left: '7vw', top: '420px', position: 'absolute', animation: 'float 10s linear infinite'}} src={el12} />
        <img style={{width: '20%', height: '20%', left: '36vw', top: '500px', position: 'absolute', animation: 'float 13s linear infinite'}} src={el1} />
        <img style={{width: '40%', height: '%', left: '80vw', top: '50vh', position: 'absolute', transform: 'rotate(15deg)', transformOrigin: '0 0', animation: 'float 19s linear infinite'}} src={el3} />
        <img style={{width: '600px', height: '600px', left: '-250px', top: '70vh', position: 'absolute', animation: 'float 18s linear infinite'}} src={el5} />
        <img style={{width: '30%', height: '30%', left: '80vw', top: '6vh', position: 'absolute', animation: 'float 18s linear infinite'}} src={el2} />
        <img style={{width: '700px', height: '700px', left: '-300px', top: '-18vh', position: 'absolute', animation: 'float 15s linear infinite'}} src={el10} />
        <img style={{width: '10%', height: '10%', right: '40vw', top: '300px', position: 'absolute', animation: 'float 8s linear infinite', transformOrigin: '0 0'}} src={el11} />

        <div className="Ellipse2" style={{width: '2vw', height: '2vw', left: '61vw', top: '53vh', position: 'absolute', background: '#F4B400', boxShadow: '2px 4px 4px -1px rgba(0, 0, 0, 0.25)', borderRadius: '50%', border: '0.3vw white solid'}} />
        <div className="Ellipse7" style={{width: '2vw', height: '2vw', left: '47vw', top: '38vh', position: 'absolute', background: '#DB4437', boxShadow: '2px 4px 4px -1px rgba(0, 0, 0, 0.25)', borderRadius: '50%', border: '0.3vw white solid'}} />

        <div className="Rectangle20" style={{width: '230px', height: '59px', left: '28vw', top: '640px', position: 'absolute', background: 'white', borderRadius: '60px', border: '7px #2C2C2C solid'}} />
        <div className="Line1" style={{width: '165px', height: '0', left: '30vw', top: '666px', position: 'absolute', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', border: '4px #2C2C2C solid'}}></div>

        <div className="Ellipse8" style={{width: '35px', height: '35px', left: '9vw', top: '70vh', position: 'absolute', background: '#4285F4', boxShadow: '2px 4px 4px -1px rgba(0, 0, 0, 0.25)', borderRadius: '50%', border: '0.3vw white solid'}} />
        <div className="Ellipse9" style={{width: '35px', height: '35px', left: '34vw', top: '58vh', position: 'absolute', background: '#0F9D58', boxShadow: '2px 4px 4px -1px rgba(0, 0, 0, 0.25)', borderRadius: '50%', border: '0.3vw white solid'}} />
        <div className="Ellipse10" style={{width: '35px', height: '35px', left: '33vw', top: '653px', position: 'absolute', background: '#DB4437', boxShadow: '2px 4px 4px -1px rgba(0, 0, 0, 0.25)', borderRadius: '50%', border: '4px white solid'}} />
        <div className="Rectangle21" style={{width: '340px', height: '59px', left: '55vw', top: '300px', position: 'absolute', background: 'white', borderRadius: '60px', border: '7px #2C2C2C solid'}} />
        <div className="Line4" style={{width: '262px', height: '0', left: '57vw', top: '325px', position: 'absolute', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', border: '4px #2C2C2C solid'}}></div>
        <div className="Ellipse11" style={{width: '35px', height: '35px', left: '68vw', top: '310px', position: 'absolute', background: '#4285F4', boxShadow: '2px 4px 4px -1px rgba(0, 0, 0, 0.25)', borderRadius: '50%', border: '4px white solid'}} />

        <div className="text-together" style={{width: '100vw', right: 250, top: 290, position: 'relative'}}>Together,</div>
        <div className="text-we-discover" style={{width: '100vw', top: 250, position: 'relative'}}>we discover</div>
        <div className="text-future" style={{width: '100vw', left: 260, top: 210, position: 'relative'}}>future.</div>
    </div>
    </>
  )
}

export default Home