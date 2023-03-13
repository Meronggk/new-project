import React from 'react';
import Header from './Header';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
// import img4 from '../assets/images/img4.jpg';


const Homepage = () => {
  return (
    <div className='container'>	
		
<Header />
<div className='container1'>
<img  src={img2} alt="img1" />
<img  src={img3} alt="img3" />
{/* <img  src={img4} alt="img3" /> */}
</div>
<div>
<h2 className='home-page'>WELCOME TO CYF SESSION </h2>
<button className='btn'>Get Started</button>
</div>
	</div>
    
  )
}

export default Homepage;




