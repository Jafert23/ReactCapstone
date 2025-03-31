import Specials from './Specials';
import Testimonials from './Testemonials';
import About from './About';
import Reservations from './Reservations';
import HeroSection from './HeroSection';

const heroProps = {
  name: 'Little Lemon',
  city: 'Chicago',
  description: 'Enjoy our modern take on classic Mediterranean dishes in a cozy setting.',
  heroImage: 'path/to/hero-image.jpg'
}

function Main() {
  return (
    <main>
      <section id="hero">
        <HeroSection {...heroProps} />
      </section>
      
      <section id="reservations">
        <h2>Make a Reservation</h2>
        <Reservations />
      </section>
      
      <section id="specials">
        <h2>Specials</h2>
        <Specials />
      </section>
      
      <section id="testimonials">
        <h2>Testimonials</h2>
        <Testimonials />
      </section>
      
      <section id="about">
        <h2>About</h2>
        <About />
      </section>
    </main>
  );
}

export default Main;
