import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import {
  Stats,
  About,
  Experience,
  Projects,
  TechStack,
  Certificates,
  Learning,
  Contact,
  Footer,
  ScrollTop,
} from './components/Sections';

export default function App() {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <Certificates />
      <Learning />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  );
}
