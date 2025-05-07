import profil from '../assets/img/reygha.jpg';
import pattren from '../assets/img/cubepattren.png';

export default function About() {
  return (
    <div className="relative bg-gradient-to-b from-blue-700 to-blue-500 dark:from-[#0A0F2C] dark:to-[#141933]">
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${pattren})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '150px', 
        }}
      ></div>


      <div className="relative flex items-center h-[650px] ml-60">
        <img
          src={profil}
          alt="Foto Profil"
          className="w-32 md:w-64 lg:w-72 h-72 rounded-full object-cover"
        />
        <div className="p-20">
          <div className="max-w-md max-h-96 bg-white rounded-2xl shadow-md overflow-hidden mx-auto dark:bg-[#1D2538] dark:text-white">
          <h2 className="text-2xl font-bold mb-2 text-center">About Me</h2>
<p className="text-gray-600 mb-4 text-lg dark:text-[#D1D5DB] ml-5">
  Halo! Saya adalah seorang web developer yang bersemangat dalam membangun aplikasi modern dan responsif.
  Dengan pengalaman di bidang desain dan pengembangan web, saya selalu berusaha menciptakan karya yang 
  tidak hanya fungsional tapi juga menarik secara visual. Mari kita bekerja sama!
</p>
          </div>
        </div>
      </div>
    </div>
  );
}
