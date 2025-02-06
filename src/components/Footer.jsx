import Logo from '../assets/logo.png';

export const Footer = () => {
  return (
    <footer className="bg-mainBlack min-h-[4.2rem] flex px-8">
      <div className='flex items-center gap-6'>
        <img className='w-20 h-10' src={Logo} alt="4Music logo" />
        <span className="text-white">Copyright © 2023 4Music</span>
      </div>
    </footer>
  );
};
