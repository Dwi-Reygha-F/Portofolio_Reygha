import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaLaravel } from 'react-icons/fa';

import { Typewriter } from 'react-simple-typewriter';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Skill from './components/Skill.jsx';
import Project from './components/Project.jsx';
import RsMadya from './assets/img/RsMadya.png';
import CineTix from './assets/img/CineTixDSH.png';
import AparHyd from './assets/img/AparHydDSH.png';
import wavepattren from './assets/img/wavepattren.png';
import trianglepattren from './assets/img/trianglepattren.png';
import abstrakpattren from './assets/img/abstrakpattren.png';
import profil from './assets/img/reygha.jpg';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="bg-[#0A0F2C] text-white font-sans">
      
        <Navbar />
        <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-100 dark:from-[#0A0F2C] dark:to-[#141933] flex items-center justify-center px-8">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center space-x-10">
        
        {/* Kiri: Kata-kata */}
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1C3D5A] dark:text-white">
            Hi, I’m <span className="text-blue-500">  <Typewriter
          words={['Dwi Reygha Febryan!', 'Reygha!', 'Egha!']}
          loop={0}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        /></span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-md mx-auto md:mx-0">
            I’m a passionate Web Developer who loves creating beautiful and functional websites. Let's build something amazing together!
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600">
            Contact Me
          </button>
        </div>

        <div className="mt-10 md:mt-0 relative flex items-center justify-center" data-aos='fade-left'>
          
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
          <About/>
          <div className="relative bg-gradient-to-b from-blue-500 to-blue-400 dark:from-[#0A0F2C] dark:to-[#141933] py-10">
          <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${abstrakpattren})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '150px',
        }}
      ></div>
            <div className="relative flex flex-col space-y-8 ml-60">
              {/* Baris 1: 4 kotak */}
              <div className="flex space-x-4" >
                <Skill icon={<FaHtml5 className="text-orange-500 w-8 h-8" />} name="HTML5" effect="data-aos='flip-left'" />
                <Skill icon={<FaCss3Alt className="text-blue-500 w-8 h-8" />} name="CSS3" />
                <Skill icon={<FaJs className="text-yellow-400 w-8 h-8" />} name="JavaScript" />
                <Skill icon={<FaPhp className="text-indigo-600 w-8 h-8" />} name="PHP" />
              </div>

              {/* Baris 2: 2 kotak */}
              <div className="flex space-x-4">
                <Skill icon={<FaLaravel className="text-red-400 w-8 h-8" />} name="Laravel" />
                <Skill icon={<FaReact className="text-cyan-400 w-8 h-8" />} name="React Js" />
              </div>
            </div>
          </div>

          <div className="relative bg-gradient-to-b from-blue-400 to-blue-100 dark:from-[#0A0F2C] dark:to-[#141933]">
          <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${wavepattren})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '150px',
        }}
      ></div>
            <div className="relative flex items-center h-[600px] justify-center">
              <div className="flex gap-6 text-white">
                <Project
                  image={RsMadya}
                  title="Rumah Sakit Sentra Madya"
                  deskripsi="Aplikasi Rumah Sakit Yang Bisa Mengecek Jadwal Dokter, Data Kamar PerLantai Dll."
                />
                <Project
                  image={CineTix}
                  title="CineTix"
                  deskripsi="Aplikasi Pemesanan Tiket Bioskop Online"
                />
                <Project
                  image={AparHyd}
                  title="Cek Apar Hydrant"
                  deskripsi="Aplikasi Checklist Apar Dan Hydrant"
                />
              </div>
            </div>
          </div>
          <div className="relative bg-gradient-to-b from-blue-200 to-blue-100 dark:from-[#0A0F2C] dark:to-[#141933] py-10">
          <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${trianglepattren})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '150px',
        }}
      ></div>
  <div className="relative flex flex-col items-center h-[600px] justify-center">
    <h2 className="text-3xl font-bold text-[#1C3D5A] dark:text-white mb-6">Contact Me</h2>
    
    <form className="w-full max-w-md bg-white dark:bg-[#1D2538] p-8 rounded-xl shadow-lg space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mt-2 border border-gray-300 rounded-md dark:bg-[#2A3747] dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 mt-2 border border-gray-300 rounded-md dark:bg-[#2A3747] dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full p-3 mt-2 border border-gray-300 rounded-md dark:bg-[#2A3747] dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600"
      >
        Send Message
      </button>
    </form>
  </div>
</div>






        </main>

      </div>


    </>
  )
}

export default App;


