import {
  ChartBarIcon,
  CogIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";

const Header = () => (
  <header className="h-51 px-4 py-1 flex justify-between items-center space-x-4 border-b border-gray-300">
    <QuestionMarkCircleIcon className="h-5 text-gray-400 cursor-pointer" />
    <h1 className="flex-1 text-black text-4xl font-bold text-center">WORDLE</h1>
    <ChartBarIcon className="h-5 text-gray-400 cursor-pointer" />
    <CogIcon className="h-5 text-gray-400 cursor-pointer" />
  </header>
);

export default Header;
