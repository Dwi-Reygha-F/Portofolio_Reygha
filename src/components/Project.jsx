import { forwardRef } from 'react';
import RsMadya from '../assets/img/RsMadya.png';
import CineTix from '../assets/img/CineTixDSH.png';
import AparHyd from '../assets/img/AparHydDSH.png';
import wavepattren from '../assets/img/wavepattren.png';

const Project = forwardRef((props, ref) => {
  // Data proyek
  const projects = [
    {
      image: RsMadya,
      title: 'Rumah Sakit Sentra Madya',
      deskripsi: 'Aplikasi Rumah Sakit Yang Bisa Mengecek Jadwal Dokter, Data Kamar PerLantai Dll.',
    },
    {
      image: CineTix,
      title: 'CineTix',
      deskripsi: 'Aplikasi Pemesanan Tiket Bioskop Online',
    },
    {
      image: AparHyd,
      title: 'Cek Apar Hydrant',
      deskripsi: 'Aplikasi Checklist Apar Dan Hydrant',
    },
  ];

  return (
    <div>
      <div ref={ref} className="relative bg-gradient-to-b from-blue-400 to-blue-100 dark:from-[#0A0F2C] dark:to-[#141933] w-full min-h-screen flex items-center justify-center p-4">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${wavepattren})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '150px',
          }}
        ></div>
        <div className="relative w-full mt-20">
          <h2 className="text-3xl font-bold text-center text-white mb-10" data-aos="fade-up" data-aos-duration="1000">
            My Projects
          </h2>
          
          {/* Grid untuk responsif */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Map projects */}
            {projects.map((project, index) => (
              <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 200}>
                <a href="#">
                  <img className="rounded-t-lg" src={project.image} alt={project.title} />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.deskripsi}</p>
                  <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Project;
