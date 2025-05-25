import { Typewriter } from 'react-simple-typewriter';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Skill from './components/Skill.jsx';
import Project from './components/Project.jsx';
import Contact from './components/Contact.jsx';
import profil from './assets/img/reygha.jpg';
import { useRef } from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      easing: 'ease-in-out', // Jenis easing animasi
      once: true, // Animasi hanya terjadi sekali ketika elemen muncul
      offset: 100, // Memulai animasi lebih awal sebelum mencapai posisi scroll
    });
  }, []);


  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToSection = (section) => {
    switch (section) {
      case 'home':
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'skill':
        skillRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'project':
        projectRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="bg-[#0A0F2C] text-white font-sans overflow-x-hidden">

        <Navbar scrollToSection={scrollToSection} />

        <div ref={homeRef} className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-100 dark:from-[#0A0F2C] dark:to-[#141933] flex items-center justify-center px-8 mt-24">
  <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center space-x-10">
    {/* Kiri: Kata-kata */}
    <div className="text-center md:text-left space-y-4" data-aos="fade-up" data-aos-duration="1000">
      <h1 className="text-4xl md:text-5xl font-bold text-[#1C3D5A] dark:text-white">
        Hi, I’m <span className="text-blue-500">
          <Typewriter
            words={['Dwi Reygha Febryan!', 'Reygha!', 'Egha!']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
     <p className="text-lg text-gray-700 dark:text-gray-300 max-w-md mx-auto md:mx-0">
  Saya adalah seorang Web Developer yang antusias dalam menciptakan website yang menarik dan fungsional. Mari wujudkan proyek luar biasa bersama!
</p>

    </div>

    <div className="mt-10 md:mt-0 relative flex items-center justify-center" data-aos="fade-left" data-aos-duration="1000">
      <div className='absolute w-64 h-64 bg-sky-500 rounded-full z-10 blur-xl'></div>
      <img
        src={profil}
        alt="Foto Profil"
        className="w-64 h-64 rounded-full object-cover border-4 border-black shadow-lg z-20"
      />
    </div>
  </div>
</div>

        <main>
          <About ref={aboutRef} />
          <Skill ref={skillRef}/>


          <Project ref={projectRef}/>
<Contact ref={contactRef} />
          






        </main>

      </div>


    </>
  )
}

export default App;


