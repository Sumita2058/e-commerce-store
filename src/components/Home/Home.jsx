import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Shopping from '../shopping/Shopping';
import AnimatedHeading from '../AnimatedHeading/AnimatedHeading';
import Footer from '../Footer/Footer';
 const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <AnimatedHeading/>
        <Shopping/>
        <Footer/>
       
    </div>
  )
}
export default Home;
