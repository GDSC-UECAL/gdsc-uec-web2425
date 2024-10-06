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
import partnerships from '../assets/common/partnership.png';


function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="Landing" style={{width: '100%', height: '100vh', position: 'relative', overflow: 'hidden', margin: '0px', padding: '0px'}}>
        <img style={{width: '20%', left: '7vw', top: '420px', position: 'absolute', animation: 'float 10s linear infinite'}} src={el12} />
        <img style={{width: '20%', left: '36vw', top: '500px', position: 'absolute', animation: 'float 13s linear infinite'}} src={el1} />
        <img style={{width: '40%', left: '80vw', top: '50vh', position: 'absolute', transform: 'rotate(15deg)', transformOrigin: '0 0', animation: 'float 19s linear infinite'}} src={el3} />
        <img style={{width: '600px', left: '-250px', top: '70vh', position: 'absolute', animation: 'float 18s linear infinite'}} src={el5} />
        <img style={{width: '30%', left: '80vw', top: '6vh', position: 'absolute', animation: 'float 18s linear infinite'}} src={el2} />
        <img style={{width: '1000px', left: '-550px', top: '-100px', position: 'absolute', animation: 'float 15s linear infinite'}} src={el10} />
        <img style={{width: '10%', right: '40vw', top: '300px', position: 'absolute', animation: 'float 8s linear infinite', transformOrigin: '0 0'}} src={el11} />
        
        <div className="Rectangle21" style={{width: '340px', height: '59px', left: '55vw', top: '300px', position: 'absolute', background: 'white', borderRadius: '60px', border: '7px #2C2C2C solid'}} />
        <div className="Rectangle20" style={{width: '230px', height: '59px', left: '28vw', top: '640px', position: 'absolute', background: 'white', borderRadius: '60px', border: '7px #2C2C2C solid'}} />
      
        <div className="Line4" style={{width: '262px', height: '0', left: '57vw', top: '325px', position: 'absolute', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', border: '4px #2C2C2C solid'}}></div>
        <div className="Line1" style={{width: '165px', height: '0', left: '30vw', top: '666px', position: 'absolute', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', border: '4px #2C2C2C solid'}}></div>  

        <div className="Ellipse8" style={{width: '35px', height: '35px', left: '9vw', top: '70vh', position: 'absolute', background: '#4285F4', boxShadow: '2px 4px 4px -1px rgba(0, 0, 0, 0.25)', borderRadius: '50%', border: '4px  white solid'}} />
        <div className="Ellipse9" style={{width: '35px', height: '35px', left: '34vw', top: '58vh', position: 'absolute', background: '#0F9D58', boxShadow: '2px 4px 4px -1px rgba(0, 0, 0, 0.25)', borderRadius: '50%', border: '4px  white solid'}} />
        <div className="Ellipse10" style={{width: '35px', height: '35px', left: '33vw', top: '653px', position: 'absolute', background: '#DB4437', boxShadow: '2px 4px 4px -1px rgba(0, 0, 0, 0.25)', borderRadius: '50%', border: '4px white solid'}} />
        <div className="Ellipse2" style={{width: '2vw', height: '2vw', left: '61vw', top: '53vh', position: 'absolute', background: '#F4B400', boxShadow: '2px 4px 4px -1px rgba(0, 0, 0, 0.25)', borderRadius: '50%', border: '0.3vw white solid'}} />
        <div className="Ellipse7" style={{width: '2vw', height: '2vw', left: '47vw', top: '38vh', position: 'absolute', background: '#DB4437', boxShadow: '2px 4px 4px -1px rgba(0, 0, 0, 0.25)', borderRadius: '50%', border: '0.3vw white solid'}} />
        <div className="Ellipse11" style={{width: '35px', height: '35px', left: '68vw', top: '310px', position: 'absolute', background: '#4285F4', boxShadow: '2px 4px 4px -1px rgba(0, 0, 0, 0.25)', borderRadius: '50%', border: '4px white solid'}} />

      
        <div className="container-fluid p-0 position-relative" style={{ height: '110vh' }}>
          <div className="position-absolute w-100 h-100 d-flex flex-column justify-content-center">
            <div className="text-end text-sm-center" style={{ right: 'clamp(0px, 15vw, 1000px)', position: 'relative' }}>
              <h2 className="text-together">Together,</h2>
            </div>
            <div className="text-center my-4">
              <h2 className="text-we-discover">we discover</h2>
            </div>
            <div className="text-start text-sm-center" style={{ left: 'clamp(0px, 15vw, 1800px)', position: 'relative' }}>
              <h2 className="text-future">future.</h2>
            </div>
          </div>
        </div>
      </div>    
      
      {/*About GDSC Section
      <img style={{width: '30%', maxWidth: 395, height: 'auto', left: -100, top: '80%', position: 'absolute'}} src="https://via.placeholder.com/395x217" />
      <img style={{width: '50%', maxWidth: 761, height: 'auto', right: -100, top: '70%', position: 'absolute', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}} src="https://via.placeholder.com/761x430" />*/}
      <div className="About-GDSC" style={{width: '100%', position: 'relative', overflow: 'hidden', margin: '0px', padding: '0px'}}>
        <div className="container-fluid mt-5">
          <div className="row text-center mb-4">
            <div className="col-md-12">
              <h1 className="display-4 text-dark p-2" style={{ fontsize: 'clamp(24px, 1vw, 50px)', fontWeight: '700' }}>
                Google Developer Student Club
              </h1>
              <h2 className="display-5 text-dark mb-5 p-2" style={{ fontSize: '1.5rem' }}>
                University of the East - Caloocan
              </h2>
            </div>
          </div>
          <div className="row flex-column-reverse flex-md-row">
            <div className="col-md-6">
              <div className="pe-md-4">
                <p className="text-left p-5" style={{ fontSize: '1.5rem' }}>
                  The <b>Google Developer Student Club</b> (GDSC) at UE Caloocan is a student-led community that empowers aspiring developers and technology enthusiasts to learn, grow, and collaborate on innovative projects.

                  <br></br><br></br>As part of the global GDSC network, it offers a platform for students to gain hands-on experience with Google technologies, enhance their technical skills, and work on real-world solutions.

                  <br></br><br></br>Our mission is to empower students by providing a supportive peer-to-peer learning environment where they can enhance their skills and expand their networks.
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0">
              <img
                src={gdsc_photo}
                alt="Club"
                style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
     </div>   
     
     {/*Stastics and Bulletin*/}
     <div className="Statistics mt-5" style={{width: '100%', position: 'relative', overflow: 'hidden', margin: '0px', padding: '0px'}}>
      <div className="container-fluid px-4">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 mt-5 fw-bold">Making tech education accessible to our growing community.</h2>
          </div>
        </div>  
        
        <div className="row justify-content-center mt-5 mb-5 gx-4 gy-4">
          {[
            { title: "250+", text: "Members", color: "danger", icon: "fas fa-users" },
            { title: "100+", text: "Events", color: "warning", icon: "fas fa-calendar-alt" },
            { title: "50+", text: "Products", color: "success", icon: "fas fa-code" },
            { title: "20+", text: "Partners", color: "primary", icon: "fas fa-handshake" }
          ].map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center">
              <div className={`card border-${item.color} shadow w-100`} style={{ maxWidth: '250px', aspectRatio: '1 / 1' }}>
                <div className="card-body d-flex flex-column justify-content-center align-items-center text-center p-3">
                  <div className={`text-${item.color} mb-2`}>
                    <i className={`${item.icon} fa-3x`}></i>
                  </div>
                  <h3 className={`card-title text-${item.color} fw-bold mb-0`} style={{ fontSize: '70px' }}>{item.title}</h3>
                  <p className="card-text fs-5 mt-1">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 mt-5 fw-bold">Bulletin Board</h2>
          </div>
        </div>  

        {/* Red div for Bulletin board */}
        <div className="row">
          <div className="col-12">
            <div className="bg-danger p-5">
              {/* Bulletin board content goes here */}
            </div>
          </div>
        </div>   
      </div>
    </div>
      
    {/* Partners and Sponsors */}          
<div className="Partnerships mt-5" style={{ width: '100%', position: 'relative', overflow: 'hidden', margin: '0px', padding: '0px' }}>
  <div className="row mt-5">
    <div className="col-12 text-center">
      <h2 className="display-5 mt-5 fw-bold">Partners and Sponsorships</h2>
      <h2 className="display-5 text-dark p-5" style={{ fontSize: '1.5rem' }}>
        Join our trusted partners to achieve your goals.
      </h2>
    </div>
  </div>
  <div className="wider-container mx-auto" style={{ maxWidth: "90vw" }}>
  <div className="row justify-content-center  gx-4 gy-4">
    {[...Array(16)].map((_, index) => (
      <div key={index} className="col-3 col-sm-3 col-md-1">
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



    {/* Contact Section*/}
    <div className="Contact_Us mt-5" style={{ width: '100%', position: 'relative', overflow: 'hidden', margin: '0px', padding: '0px' }}>
      <div className="container-fluid mt-5">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-md-6 d-flex justify-content-center align-items-center mb-md-0 order-md-1">
            <img
              src={gdsc_mascot}
              alt="Club"
              style={{ width: '80vh', height: 'auto', objectFit: 'cover' }}
            />
          </div>

          {/* Text column */}
          <div className="col-md-6 order-md-0">
            <div className="pe-md-4">
              <div className="row mb-4">
                <div className="col-md-12">
                <h2 className="display-4 text-dark px-5" style={{ fontSize: 'clamp(24px, 2vw, 50px)', fontWeight: '700' }}>
                  Let's work together to make a difference!
                </h2>
                <h2 className="display-5 text-dark p-0 mb-5 px-5" style={{ fontSize: '1.5rem' }}>
                  Feel free to reach out!
                </h2>
                  
                  {/* Contact Form */}
                  <form className="mt-4 px-5">
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email:</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="Enter your email" 
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">Subject:</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="subject" 
                        placeholder="Enter subject" 
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Message:</label>
                      <textarea 
                        className="form-control" 
                        id="message" 
                        rows="3" 
                        placeholder="Enter message" 
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
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