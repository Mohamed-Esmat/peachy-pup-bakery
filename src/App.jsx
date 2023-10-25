
import {
  Header,
  AboutUs,
  ContactUs,
  HowWeWork,
  Recipes,
  Testimonials,
  Footer,
} from './components';

const App = () => {
  return (
    <div className="App">
      <Header />

      <HowWeWork />
      <AboutUs />
      <Recipes />
      <Testimonials />
      <ContactUs />

      <Footer />
    </div>
  );
};

export default App;
