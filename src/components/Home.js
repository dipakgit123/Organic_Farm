import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import { faCarrot ,faAppleWhole,faSeedling } from '@fortawesome/free-solid-svg-icons';

import {Container,Nav,Navbar,NavDropdown,Card,Button,Carousel} from 'react-bootstrap';


const Home = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>

    {/* HOME SECTION */}

    <Carousel>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://picjumbo.com/wp-content/uploads/fruits-and-vegetables-still-life-and-black-background-2210x1473.jpg'
          alt="First slide"
          style={{height:'880px'}}
        />
        <div className='box'>
          <h3>We Serve Fresh Vegetables , Fruits & Dry Fruits</h3>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
        className='d-block w-100'
        src='https://img.freepik.com/premium-photo/fruits-vegetables-dark-background-ai-generative_686498-5374.jpg'
        alt="Second slide"
        style={{height:'880px'}}
        />
        <div className='box'>
          <h3>“Nature’s Bounty: Fresh Vegetables for Every Meal”</h3>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
        className='d-block w-100'
        src='https://img.freepik.com/premium-photo/fruits-vegetables-black-background_467381-17.jpg'
        alt="Third slide"
        style={{height:'880px'}}
        />
        <div className='box'>
          <h3>“Harvested with Care: Fresh Fruits for Your Well-being”</h3>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
        className='d-block w-100'
        src='https://img.freepik.com/premium-photo/bowl-dried-fruit-sits-dark-background_671352-3701.jpg'
        alt="Third slide"
        style={{height:'880px'}}
        />
        <div className='box'>
          <h3>“Fuel Your Day with the Best of Nature: Fresh Dry Fruits”</h3>
        </div>
      </Carousel.Item>
    </Carousel>

    {/* AOBUT SECTION */}
  <section className=" container-fluid col-md-12" id="about" style={{marginTop:'20px'}}>
  <div className="row">
   
  <div className="about-img col-md-6" >
      <img src="https://media.istockphoto.com/id/171329290/photo/healthy-snack-plate.jpg?s=612x612&w=0&k=20&c=xohMzg2wFCPJjN4kHCthO__XOzTQxnE42hf-2x_shXI="/>
  </div>

  <div className="about-text col-md-6">
      
      <h4>We Produce Organic Food For Your Family.</h4>
      <p>Here we offers fresh, nutrient rich, flavorful vegetables grown with
         sustainable practices from our farms in eastern Howard County and our partnering farm in Whitehall,
         Maryland. Our produce is available through our Community Supported Agriculture (or CSA) program.
         We use natural products (OMRI) products for fertilization, disease, and pest management.
         We employ Integrated Pest Management (IPM) strategies and always aim towards sustainability in all that we do. 
         We build compost for supplementing our plant’s nutrition and the soil’s overall health. 
         We strategically cover crop our ground to protect from erosion, to feed our soils, and to maintain and offset fertility requirements..
         Our mission is to grow as much produce as possible and provide this produce to people.  
         In this pursuit, we promise to provide produce that is sustainable, certified organic and nutritious.  
         We work the earth with respect and strive to understand better our role as working partners with nature.  
         <div className='btn1'><a href='#'>Read More</a></div>
        </p>
        </div>
      </div>
    </section>

    {/* SERVICES SECTION */}
    <section className="container-fluid col-md-12" id="services">
  <div className="row">
  <Card style={{ width: '30rem', margin:'12px' }} className='col-md-4'>
    <FontAwesomeIcon icon={faCarrot} className='icon' />
      <Card.Body>
        <Card.Title style={{textAlign:'center', fontSize:'25px'}}>Fresh Vegetables</Card.Title>
        <Card.Text style={{textAlign:'justify'}}>
         Fresh vegetables are a powerhouse of essential nutrients, 
         offering a vibrant array of vitamins and minerals that support overall health.

        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '30rem', margin:'12px' }} className='col-md-4'>
    <FontAwesomeIcon icon={faAppleWhole} className='icon' />
      <Card.Body>
        <Card.Title style={{textAlign:'center', fontSize:'25px'}}>Fresh Fruits</Card.Title>
        <Card.Text style={{textAlign:'justify'}}>
         Including a variety of fresh fruits in your diet can enhance your immune system and support overall well-being.
         They are a delicious way to stay hydrated and energized throughout the day.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '30rem', margin:'12px' }} className='col-md-4'>
    <FontAwesomeIcon icon={faSeedling} className='icon' />
      <Card.Body>
        <Card.Title style={{textAlign:'center', fontSize:'25px'}}>Dry Fruits</Card.Title>
        <Card.Text style={{textAlign:'justify'}}>
         Dry fruits offer a wide range of health benefits, making them a great addition to your diet.Including dry fruits like almonds,
         walnuts, and raisins in your diet can improve heart health.
        </Card.Text>
      </Card.Body>
     </Card>
    </div>
    <div className='btn2'><a href='#'>View More</a></div>
    </section>


    <section className="gallery container-fluid col-md-12" id="gallery">
  <div className="row">
    <marquee scrollamount="20">
    <img src="https://media.istockphoto.com/id/589415708/photo/fresh-fruits-and-vegetables.webp?a=1&b=1&s=612x612&w=0&k=20&c=L4JLiFkq1OWXrZv55n8cuqa1L2Vc2vLxnycM8o0tfSg=" className="img-fluid col-md-3" alt="..."   style={{marginTop:"10px",marginRight:'10px',height:"300px", width:"33%"}}/>
    <img src="https://media.istockphoto.com/id/453963935/photo/fruits-and-vegetables-at-city-market-in-riga.webp?a=1&b=1&s=612x612&w=0&k=20&c=_7Ows4GmrOgzrA_VDPLCSmPfNIDaXgC0LjqAJ1u_q2s=" className="img-fluid col-md-3" alt="..."   style={{marginTop:"10px",marginRight:'10px',height:"300px", width:"33%"}}/>
    <img src="https://media.istockphoto.com/id/2153263586/photo/healthy-balanced-food-frame-with-copy-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=CwRGYQDFbHYYW6y4GBxGkTNRLMY_1EjvrKitqWk5WaA=" className="img-fluid col-md-3" alt="..."   style={{marginTop:"10px",marginRight:'10px',height:"300px", width:"33%"}}/>  
    <img src="https://media.istockphoto.com/id/908062538/photo/raw-organic-spring-farmers-market-box.jpg?s=612x612&w=0&k=20&c=F1t0odEDhnPjA9yY8aZ0GzNg3bX__0zalVvuE8yTS9E=" className="img-fluid col-md-3" alt="..."   style={{marginTop:"10px",marginRight:'10px',height:"300px", width:"33%"}}/>
    <img src="https://media.istockphoto.com/id/139497624/photo/crate-full-of-fruits-and-vegetables-over-rustic-table.jpg?s=612x612&w=0&k=20&c=4WYvNbgSZvtpM64dnxCfkZE5p2GGfVWqOPv59qzTCmg=" className="img-fluid col-md-3" alt="..."   style={{marginTop:"10px",marginRight:'10px',height:"300px", width:"33%"}}/>
    <img src="https://media.istockphoto.com/id/1321195683/photo/woman-having-healthy-lunch.jpg?s=612x612&w=0&k=20&c=buB2Jla5pWRfAt_Nu92if0WWprQxe_jMufq91s7Ici8=" className="img-fluid col-md-3" alt="..."   style={{marginTop:"10px",marginRight:'10px',height:"300px", width:"33%"}}/>
    <img src="https://media.istockphoto.com/id/1218693828/photo/wooden-bowl-with-mixed-nuts-on-rustic-table-top-view-healthy-food-and-snack.jpg?s=612x612&w=0&k=20&c=89-ko7nwlcqM6HPvwaQ3tZus4apArtwHkFAB0IxPQpo=" className="img-fluid col-md-3" alt="..."   style={{marginTop:"10px",marginRight:'10px',height:"300px", width:"33%"}}/>
    <img src="https://media.istockphoto.com/id/175544379/photo/snacks.jpg?s=612x612&w=0&k=20&c=Bt9XnMxBL4T2wPK5jkWX5aMu3ddRpdP70ALByybie1A=" className="img-fluid col-md-3" alt="..."   style={{marginTop:"10px",marginRight:'10px',height:"300px", width:"33%"}}/>
    
    </marquee>
  </div>
</section>

    </div>
  )
}

export default Home
