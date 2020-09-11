import React from 'react';
import './App.css';
import Navbar from './sections/navbar'
import Container from './components/container'
import History from './sections/history'
import Location from './sections/location'
import Services from './sections/services';
import CustomerReviews from './sections/customerReviews';
import ContactUs from './sections/contactUs';
import Footer from './sections/footer';

function App() {
  return (
    <div>
      <Navbar />
      
      <Container>
        <History />
        <Location />
        <Services />
      </Container>
      <CustomerReviews />
      <Container>
      <ContactUs />
      </Container>
      <Footer/>
      
    </div>
  );
}

export default App;
