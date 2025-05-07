import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaLaravel, FaReact } from 'react-icons/fa';
import { forwardRef } from 'react';
import abstrakpattren from '../assets/img/abstrakpattren.png';

const Skill = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="relative bg-gradient-to-b from-blue-500 to-blue-400 dark:from-[#0A0F2C] dark:to-[#141933] py-16 w-full min-h-screen flex items-center justify-center p-4"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${abstrakpattren})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '150px',
        }}
      ></div>

      {/* Konten */}
      <div className="relative max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center text-white mb-10">My Skills</h2>

        {/* Grid Skill */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* HTML5 */}
          <SkillCard Icon={FaHtml5} color="text-orange-500" label="HTML5" />

          {/* CSS3 */}
          <SkillCard Icon={FaCss3Alt} color="text-blue-500" label="CSS3" />

          {/* JavaScript */}
          <SkillCard Icon={FaJs} color="text-yellow-400" label="JavaScript" />

          {/* PHP */}
          <SkillCard Icon={FaPhp} color="text-indigo-600" label="PHP" />

          {/* Laravel */}
          <SkillCard Icon={FaLaravel} color="text-red-400" label="Laravel" />

          {/* React Js */}
          <SkillCard Icon={FaReact} color="text-cyan-400" label="React Js" />
        </div>
      </div>
    </div>
  );
});

const SkillCard = ({ Icon, color, label }) => (
  <div
    className="w-full h-32 bg-transparent border border-blue-900 rounded-lg flex flex-col items-center justify-center space-y-2 hover:bg-blue-600/20 transition duration-300"
    data-aos="flip-right"
  >
    <Icon className={`${color} w-14 h-14`} />
    <span className="text-white font-semibold text-lg">{label}</span>
  </div>
);

export default Skill;
