import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import AIPlayground from '../components/AIPlayground';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';
import Timeline from '../components/Timeline';
import SkillsNetwork from '../components/SkillsNetwork';
import SkillBars from '../components/SkillBars';
import SectionTransition from '../components/SectionTransition';
import BackToTop from '../components/BackToTop';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <ParticleBackground />
      <Navbar />
      <BackToTop />
      <Hero />
      <SectionTransition>
        <About />
      </SectionTransition>
      <SectionTransition>
        <Timeline />
      </SectionTransition>
      <SectionTransition>
        <SkillBars />
      </SectionTransition>
      <SectionTransition>
        <SkillsNetwork />
      </SectionTransition>
      <SectionTransition>
        <Projects />
      </SectionTransition>
      <SectionTransition>
        <AIPlayground />
      </SectionTransition>
      <SectionTransition>
        <Contact />
      </SectionTransition>
      <Footer />
    </main>
  );
} 