import CustomCursor from '@/components/ui/CustomCursor';
import ProgressBar from '@/components/layout/ProgressBar';
import TopBar from '@/components/layout/TopBar';
import SideNav from '@/components/layout/SideNav';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ProgressBar />
      <TopBar />
      <SideNav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
