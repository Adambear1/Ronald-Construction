import React from 'react';
import './App.css';
import Navbar from './sections/navbar'
import Container from './components/container'
import History from './sections/history'
import Location from './sections/location'
import Services from './sections/services';
import CustomerReviews from './sections/customerReviews';
import ContactUs from './sections/contactUs';

function App() {
  return (
    <div>
      <Navbar />
      <CustomerReviews />
      <Container>
        <History />
        <Location />
        <Services />
        <ContactUs />
      </Container>
    </div>
  );
}

export default App;
