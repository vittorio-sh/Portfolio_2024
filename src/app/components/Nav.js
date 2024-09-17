import { HiHome, HiUser, HiBriefcase, HiMail } from 'react-icons/hi';

export default function Nav() {
  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-3/5 border border-cyan-300 rounded-2xl pl-5 pr-5 pt-1.5 pb-1.5 bg-blue-700 bg-opacity-60 z-50 md:top-0 md:w-auto md:bottom-auto md:left-1/2 md:transform md:-translate-x-1/2 md:mt-4">
      <ul className="flex justify-between text-white w-full gap-4 md:gap-6">
        <li className="hover:outline hover:outline-1 hover:outline-cyan-200 hover:bg-opacity-70 hover:bg-blue-600 cursor-pointer flex flex-col items-center md:flex-row rounded-lg p-2 md:p-1 flex-1">
          <a href="#home" className="flex items-center">
            <HiHome size={20} />
            <span className="hidden md:inline ml-2">Home</span>
          </a>
        </li>
        <li className="hover:outline hover:outline-1 hover:outline-cyan-200 hover:bg-opacity-70 hover:bg-blue-600 cursor-pointer flex flex-col items-center md:flex-row rounded-lg p-2 md:p-1 flex-1">
          <a href="#about" className="flex items-center">
            <HiUser size={20} />
            <span className="hidden md:inline ml-2">About</span>
          </a>
        </li>
        <li className="hover:outline hover:outline-1 hover:outline-cyan-200 hover:bg-opacity-70 hover:bg-blue-600 cursor-pointer flex flex-col items-center md:flex-row rounded-lg p-2 md:p-1 flex-1">
          <a href="#work" className="flex items-center">
            <HiBriefcase size={20} />
            <span className="hidden md:inline ml-2">Work</span>
          </a>
        </li>
        <li className="hover:outline hover:outline-1 hover:outline-cyan-200 hover:bg-opacity-70 hover:bg-blue-600 cursor-pointer flex flex-col items-center md:flex-row rounded-lg p-2 md:p-1 flex-1">
          <a href="#contact" className="flex items-center">
            <HiMail size={20} />
            <span className="hidden md:inline ml-2">Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

