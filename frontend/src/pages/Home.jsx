import { useState } from 'react'
import './Home.css'
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
import members_ico from '../assets/common/members_ico.png';
import events_ico from '../assets/common/events_ico.png';
import products_ico from '../assets/common/products_ico.png';
import partners_ico from '../assets/common/partners_ico.png';
import HomeBulletin from "../components/HomeBulletin.jsx";
import emailjs from '@emailjs/browser';


function Home() {

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Your response has been recorded.");

    emailjs.sendForm('service_lnprdde', 'template_5sbuxy9', e.target, 't4VFBtZ0Uuc-J9l1U')
  }

  const [count, setCount] = useState(0)

  return (
    <>
    <div className="Landing" style={{width: '100%', height: '100vh', position: 'relative', overflowX: 'clip', margin: '0px', padding: '0px'}}>
        <div className="Rectangle20" style={{width: '290px', height: '59px', left: '13vw', top: '700px', position: 'absolute', background: 'white', borderRadius: '60px', border: '7px #2C2C2C solid'}} />
        <div className="Line1" style={{width: '205px', height: '0', left: '15vw', top: '725px', position: 'absolute', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', border: '4px #2C2C2C solid'}}></div>  
        <div className="Ellipse10" style={{width: '35px', height: '35px', left: '250px', top: '712px', position: 'absolute', background: '#DB4437', boxShadow: '2px 4px 4px -1px rgba(0, 0, 0, 0.25)', borderRadius: '50%', border: '4px white solid'}} />
     
        <img style={{width: '30%', left: '7vw', top: '105vw', opacity: '30%', position: 'absolute', animation: 'float 23s linear infinite'}} src={el12} />
        <img style={{width: '60%', left: '65vw', top: '1vh', position: 'absolute', float: 'right', animation: 'float 19s linear infinite'}} src={el2} />
        <img style={{width: '40%', left: '75vw', top: '60vh', position: 'absolute', float: 'right', animation: 'float 19s linear infinite'}} src={el3} />
        <img style={{width: '600px', left: '-280px', top: '70vh', position: 'absolute', animation: 'float 18s linear infinite'}} src={el5} />
        <img style={{width: '1000px', left: '-550px', top: '-100px', position: 'absolute', animation: 'float 15s linear infinite'}} src={el10} />

        <img style={{width: '15%', right: '5vw', top: '300px', position: 'absolute', animation: 'float 8s linear infinite', transformOrigin: '0 0', transform: 'rotate(180deg)'}} src={el9} />    
        <div className="container-fluid p-0 position-relative" style={{ height: '100vh' }}>
          
        <div className="Rectangle21" style={{width: '340px', height: '59px', left: '58vw', top: '150px', position: 'absolute', background: 'white', borderRadius: '60px', border: '7px #2C2C2C solid'}} />   
        <div className="Line4" style={{width: '263px', height: '0', left: '60vw', top: '175px', position: 'absolute', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', border: '4px #2C2C2C solid'}}></div>
        <div className="Ellipse11" style={{width: '35px', height: '35px', left: '70vw', top: '160px', position: 'absolute', background: '#4285F4', boxShadow: '2px 4px 4px -1px rgba(0, 0, 0, 0.25)', borderRadius: '50%', border: '4px white solid'}} />

          <div className="position-absolute w-100 h-100 d-flex flex-column justify-content-center">
            <div className="text-start text-sm-center" style={{ right: 'clamp(0px, 15vw, 1000px)', position: 'relative' }}>
              <img style={{width: '25vw', top: '110px', left: '70vw', position: 'absolute', zIndex: '-999'}} src={vecB} />
              <img style={{width: '40vw', top: '270px', left: '1vw', position: 'absolute', zIndex: '-999'}} src={vecC} />
            <img style={{width: '40vw', top: '10px', position: 'relative', zIndex: '-999'}} src={vecA} />
              <h2 className="text-together">Together,</h2>
            </div>
            <div className="text-center my-4">
              <h2 className="text-we-discover">we discover</h2>
            </div>
            <div className="text-start text-sm-center" style={{ left: 'clamp(0px, 15vw, 1800px)', position: 'relative' }}>
              <img style={{width: '25%', left: '14vw', top: '100px', position: 'absolute',  animation: 'float 13s linear infinite'}} src={el1} />
              <h2 className="text-future">future.</h2>
            </div>
            <div>
              <img style={{width: '30vw', top: '-10px ', left: '18vw', position: 'relative', zIndex: '-999'}} src={vecD} />
            </div>
          </div>
        </div>
      </div>    
      
      {/*What is GDSC?*/}
      <div className="container-elements" style={{width: '100%', position: 'relative', overflowX: 'clip'}}>
      <div className="About-GDSC" style={{width: '100%', position: 'relative', overflow: 'hidden', margin: '0px', padding: '0px'}}>
      <img style={{width: '18vw', left: '-1vw', top: '80px', position: 'absolute', zIndex: '-999'}} src={vecE} />
      <img style={{width: '18vw', right: '-2vw', top: '30px', position: 'absolute', zIndex: '-999'}} src={vecF} />
        <div className="container-fluid mt-5">
          <div className="row text-center mb-4">
            <div className="col-md-12">
              <h1 className="display-4 text-dark px-2" style={{ fontsize: 'clamp(24px, 1vw, 50px)', fontWeight: '700' }}>
                Google Developer Student Club
              </h1>
              <h2 className="display-5 text-dark mb-4 px-1 py-2" style={{ fontSize: '1.4rem' }}>
                University of the East - Caloocan
              </h2>
            </div>
          </div>
          <div className="row flex-column-reverse flex-md-row">
            <div className="col-md-6">
              <div className="pe-md-4">
                <p className="text-left pt-5 px-5 text-start" style={{ fontSize: '18px' }}>
                  The <b>Google Developer Student Club</b> (GDSC) at UE Caloocan is a student-led community that empowers aspiring developers and technology enthusiasts to learn, grow, and collaborate on innovative projects.

                  <br></br><br></br>As part of the global GDSC network, it offers a platform for students to gain hands-on experience with Google technologies, enhance their technical skills, and work on real-world solutions.

                  <br></br><br></br>Our mission is to empower students by providing a supportive peer-to-peer learning environment where they can enhance their skills and expand their networks.
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center p-0 align-items-center mb-4 mb-md-0">
              <img
                src={gdsc_photo}
                alt="Club"
                style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
     </div>
     <img style={{width: '40%', right: '83vw', top: '550px', position: 'absolute', animation: 'float 10s linear infinite'}} src={el6} />
     <img style={{width: '70%', left: '65vw', top: '500px', position: 'absolute', animation: 'float 21s linear infinite'}} src={el7} />
     </div>  
     
     {/*Stastics and Bulletin ============================================================================================================================ */}
     <div className="Statistics mt-5" style={{width: '100%', position: 'relative', overflowX: 'clip', margin: '0px', padding: '0px'}}>
      <div className="container-fluid px-4 pb-2">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h3 className="display-6 mt-5 fw-bold">Making tech education accessible to our growing community.</h3>
          </div>
        </div>  
        
        <div className="row justify-content-center px-2 mt-5 mb-5 gx-4 gy-4">
          {[
            { title: "250+", text: "Members", color: "danger", icon: "fas fa-users" },
            { title: "100+", text: "Events", color: "warning", icon: "fas fa-calendar-alt" },
            { title: "50+", text: "Products", color: "success", icon: "fas fa-code" },
            { title: "20+", text: "Partners", color: "primary", icon: "fas fa-handshake" }
          ].map((item, index) => (
            <div className="col-6 col-sm-6 col-md-3 col-lg-3 d-flex px-3 justify-content-center mb-4">
              <div className="card-wrapper" style={{ width: '100%', paddingBottom: '100%', position: 'relative' }}>
                <div 
                  className={`card border-${item.color} shadow w-100 h-100`} 
                  style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }}
                >
                  <div className="card-body d-flex flex-column justify-content-center align-items-center text-center p-3">
                    <div className={`text-${item.color} mb-2`}>
                      <i className={`${item.icon} fa-3x`}></i>
                    </div>
                    <h3 className={`card-title text-${item.color} fw-bold mb-0`} style={{ fontSize: 'calc(16px + 2vw)' }}>{item.title}</h3>
                    <p className="card-text mt-1" style={{ fontSize: 'calc(12px + 0.5vw)' }}>{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <img style={{width: '10vw', left: '-5vw', top: '650px', position: 'absolute', zIndex: '-999'}} src={vecG} />
        <img style={{width: '18vw', right: '-2vw', top: '500x', position: 'absolute', zIndex: '-999'}} src={vecH} />

        <div className="row mb-5">
          <div className="col-12 text-center">
            <h3 className="display-6 mt-5 fw-bold">Bulletin Board</h3>
          </div>
        </div>  

        <div className="row">
          <div className="col-12">
            <div className="px-5 text-center d-flex justify-content-center" style={{overflow: 'visible'}}>
              <HomeBulletin />
            </div>
          </div>
        </div>   
      </div>
    </div>
      
    {/* Partners and Sponsors */}          
<div className="Partnerships  mt-3" style={{ width: '100%', position: 'relative', overflowX: 'clip', margin: '0px', padding: '0px' }}>
  <img style={{width: '1000px', right: '73vw', top: '-100px', position: 'absolute', animation: 'float 13s linear infinite', zIndex: '-999'}} src={el4} />
  <img style={{width: '1000px', left: '70vw', top: '700px', position: 'absolute', animation: 'float 8s linear infinite', transform: 'rotate(180deg)', zIndex: '-999'}} src={el8} />
  <div className="row mt-5">
    <div className="col-12 text-center">
      <h2 className="display-5 mt-5 px-5 fw-bold">Partners and Sponsors</h2>
      <h2 className="display-5 text-dark p-5" style={{ fontSize: '1.5rem' }}>
        Join our trusted partners to achieve your goals.
      </h2>
    </div>
  </div>
  <div className="wider-container mx-auto" style={{ maxWidth: "80vw" }}>
  <div className="row justify-content-center  gx-4 gy-4">
    {[...Array(16)].map((_, index) => (
      <div key={index} className="col-3 col-sm-3 col-md-2 col-lg-2">
        <div className="partnership-item" 
          style={{
            transition: 'transform 0.3s ease-in-out',
            overflow: 'hidden',
          }}>
          <img 
            src={`https://via.placeholder.com/150?text=Partner${index + 1}`} 
            alt={`Partner ${index + 1}`} 
            className="img-fluid" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }} 
          />
        </div>
      </div>
    ))}
  </div>
  </div>
</div>



  {/* Contact Section */}
  <div className="Contact_Us mt-5" style={{ width: '100%', position: 'relative', overflow: 'hidden', margin: '0px', padding: '0px' }}>
    <div className="container-fluid mt-5">
      <div className="row flex-column-reverse flex-md-row">
        <div className="col-md-6 d-flex justify-content-center align-items-center mb-md-0 order-md-1">
          <img
            src={gdsc_mascot}
            alt="Club"
            style={{ width: 'clamp(20rem, 35vw, 40vw)', height: 'auto', objectFit: 'cover' }}
          />
        </div>
        
        <div className="col-md-6 order-md-0">
          <div className="pe-md-4">
            <div className="row mb-4">
              <div className="col-md-12">
                <h2 className="display-4 text-dark text-start px-5" style={{ fontSize: 'clamp(24px, 2vw, 50px)', fontWeight: '700' }}>
                  Let's work together to make a difference!
                </h2>
                <h2 className="display-5 text-dark text-start px-5 mb-5" style={{ fontSize: '1.5rem' }}>
                  Feel free to reach out!
                </h2>
                
                


                <form className="mt-4 px-5 text-start" onSubmit={sendEmail}>
                  <div className="mb-3">
                    <label htmlFor="emailFrom" className="form-label">Email:</label>
                    <input 
                      name="email_from"
                      type="email" 
                      className="form-control" 
                      id="email_from" 
                      placeholder="Enter your email" 
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject:</label>
                    <input 
                      name="subject"
                      type="text" 
                      className="form-control" 
                      id="subject" 
                      placeholder="Enter subject" 
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message:</label>
                    <textarea 
                      name='message'
                      className="form-control" 
                      id="message" 
                      rows="3" 
                      placeholder="Enter message" 
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>   

    </>
  )
}

export default Home;