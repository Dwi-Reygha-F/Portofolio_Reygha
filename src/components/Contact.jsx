import { forwardRef, useEffect } from "react";
import trianglepattren from '../assets/img/trianglepattren.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = forwardRef((props, ref) => {
  // Inisialisasi AOS saat komponen dimuat
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100, // Mulai animasi lebih awal
    });
  }, []);

  return (
    <div ref={ref} className="relative bg-gradient-to-b from-blue-200 to-blue-100 dark:from-[#0A0F2C] dark:to-[#141933] py-10 w-full min-h-screen flex items-center justify-center p-4">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${trianglepattren})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '150px',
        }}
      ></div>
      <div className="relative flex flex-col items-center justify-center mt-24" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-[#1C3D5A] dark:text-white mb-6">Contact Me</h2>

        <form className="w-full max-w-lg bg-white dark:bg-[#1D2538] p-8 rounded-xl shadow-lg space-y-4" data-aos="fade-up" data-aos-delay="200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name Field */}
            <div className="col-span-1" data-aos="fade-up" data-aos-delay="400">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md dark:bg-[#2A3747] dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email Field */}
            <div className="col-span-1" data-aos="fade-up" data-aos-delay="600">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md dark:bg-[#2A3747] dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Message Field */}
          <div data-aos="fade-up" data-aos-delay="800">
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
            data-aos="fade-up" data-aos-delay="1000"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
});

export default Contact;
