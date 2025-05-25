import { forwardRef, useState } from 'react';
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
    deskripsi: 'Aplikasi Rumah Sakit',
    detail: 'Rumah Sakit Sentra Madya adalah aplikasi manajemen rumah sakit terintegrasi yang dirancang untuk memudahkan operasional rumah sakit secara menyeluruh. Fitur utama meliputi pengelolaan jadwal dokter, pemantauan ketersediaan dan alokasi kamar per lantai, rekam medis pasien, serta sistem administrasi yang efisien. Dengan antarmuka yang intuitif dan sistem keamanan data yang terjamin, aplikasi ini membantu meningkatkan kualitas layanan kesehatan dan efisiensi kerja staf rumah sakit.'
  },
  {
    image: CineTix,
    title: 'CineTix',
    deskripsi: 'Aplikasi Pemesanan Tiket Bioskop Online',
    detail: 'CineTix adalah platform pemesanan tiket bioskop online yang memberikan kemudahan bagi pengguna untuk memilih film favorit, jadwal tayang, dan tempat duduk dengan cepat dan aman. Fitur unggulan meliputi sistem pembayaran yang terintegrasi, notifikasi pengingat jadwal, serta rekomendasi film berdasarkan preferensi pengguna. CineTix hadir untuk memberikan pengalaman menonton bioskop yang praktis dan menyenangkan tanpa harus antre di loket.'
  },
  {
    image: AparHyd,
    title: 'Cek Apar Hydrant',
    deskripsi: 'Aplikasi Checklist Apar Dan Hydrant',
    detail: 'Checklist Apar Hydrant adalah aplikasi checklist yang dirancang khusus untuk membantu tim keamanan dan pemeliharaan melakukan inspeksi rutin terhadap alat pemadam api ringan (APAR) dan hydrant. Aplikasi ini menyediakan fitur pencatatan kondisi alat secara detail, pengingat jadwal perawatan, serta laporan hasil inspeksi yang dapat diakses secara real-time. Dengan AparHyd, perusahaan dapat memastikan alat keselamatan selalu dalam kondisi optimal untuk mencegah risiko kebakaran dan meningkatkan keselamatan lingkungan kerja.'
  },
];


  // State modal
  const [modalData, setModalData] = useState(null);

  // Buka modal dengan data proyek
  const openModal = (project) => {
    setModalData(project);
  };

  // Tutup modal
  const closeModal = () => {
    setModalData(null);
  };

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

          {/* Grid responsif */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Map projects */}
            {projects.map((project, index) => (
              <div
                key={index}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={index * 200}
              >
                <a href="#">
                  <img className="rounded-t-lg" src={project.image} alt={project.title} />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.deskripsi}</p>
                  <button
                    onClick={() => openModal(project)}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {modalData && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={closeModal}
          >
            <div
              className="bg-white dark:bg-gray-900 rounded-lg max-w-lg w-full p-6 relative transform transition-transform duration-300 ease-out scale-100"
              onClick={(e) => e.stopPropagation()} // agar klik di modal tidak close
              style={{ animation: 'modalFadeIn 0.3s ease forwards' }}
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 dark:hover:text-white"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="text-2xl font-semibold mb-4 dark:text-white">{modalData.title}</h3>
              <img src={modalData.image} alt={modalData.title} className="rounded mb-4" />
              <p className="text-gray-700 dark:text-gray-300">{modalData.detail}</p>
            </div>
          </div>
        )}

        {/* Animasi modal via inline style */}
        <style>{`
          @keyframes modalFadeIn {
            0% {
              opacity: 0;
              transform: scale(0.95);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>
      </div>
    </div>
  );
});

export default Project;
