import heroSection from './heroSection';
import Specials from './Specials';
import Testimonials from './Testemonials';
import About from './About';  
const heroProps = {
  name: 'Little Lemon',
  city: 'Chicago',
  description: 'Enjoy our modern take on classic Mediterranean dishes in a cozy setting.',
  heroImage: 'path/to/hero-image.jpg'
}
function Main() {
  return (
    <main>
      <heroSection {...heroProps} />
      <h2>About</h2>
      <About />
      <h2>Specials</h2>
      <Specials />
      <h2>Testimonials</h2>
      <Testimonials />
    </main>
  );
}
export default Main;
