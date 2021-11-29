
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import FoodMenu from './components/Foodmenu';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import MobileNav from './components/MobileNav';

export default function App() {
  return(
    <>
      <MobileNav />
      <ScrollToTop />
      <Navigation />
      <Home />
      <About />
      <FoodMenu />
      <Testimonial />
      <Footer />
    </>
  )
}