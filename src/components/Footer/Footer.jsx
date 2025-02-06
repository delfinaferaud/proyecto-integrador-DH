import Logo from '../../assets/logo.png';

export const Footer = () => {
  return (
    <footer className="bg-mainBlack min-h-[4.2rem] flex px-8 w-full">
      <div className="flex items-center gap-6">
        <img
          className="w-20 md:w-32 lg:w-40"
          src={Logo}
          alt="SoundStock logo"
          aria-label='logo'
          
        />
        <span className="text-white text-xs md:text-sm lg:text-base" aria-label='copyright'>Copyright © 2023 SoundStock</span>
      </div>
    </footer>
  );
};
