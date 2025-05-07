
export default function Skill({ icon, name, effect }) {
  return (

    <div className="flex gap-6 text-6xl text-white">

      <div className="flex items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse" >
        <div className="w-40 h-20 bg-transparent border border-blue-900 rounded-lg flex items-center p-4 space-x-2" data-aos='flip-right'>
          {icon}
          <span className="text-white font-semibold text-sm">{name}</span>
        </div>
      </div>

    </div>
  )
}