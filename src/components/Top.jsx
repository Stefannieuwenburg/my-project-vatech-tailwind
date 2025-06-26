import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const Top = () => {
  return (
    <div className="flex flex-row items-center justify-center h-[3vh] bg-[#F37021] text-white">
      <AiOutlineMail className="text-sm" />
      <a href="mailto:info@webdevstefan.nl" target="_blank" rel="noopener noreferrer" className="text-sm text-white hover:text-gray-800 ml-2">
        info@webdevstefan.nl
      </a>
      <AiOutlinePhone className="text-sm ml-4" />
      <a href="tel:+310626142085" className="text-sm text-white hover:text-gray-800 ml-2">
        +31 0626142085
      </a>
    </div>
  );
};

export default Top;