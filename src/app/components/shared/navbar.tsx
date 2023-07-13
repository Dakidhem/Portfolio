import { BsFillMoonStarsFill } from "react-icons/bs";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 py-8 max-w-[1440px] w-full mx-auto">
      <h1 className="text-3xl font-burtons font-bold text-teal-700">
        Mehdi Kadiri
      </h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill className="text-2xl text-gray-500 cursor-pointer" />
        </li>
        <li className="cursor-pointer text-white font-bold bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded ml-4 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500">
          Resume
        </li>
      </ul>
    </nav>
  );
}
