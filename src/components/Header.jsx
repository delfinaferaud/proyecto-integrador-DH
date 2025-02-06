import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { Button } from './Button';
import { UserIcon } from './icons';

const buttonClass =
  'h-8 text-black bg-mainYellow rounded-xl w-[140px] text-base hover:bg-white hover:border-mainYellow hover:border-2 transition-all duration-300 ease-in hover:opacity-100';
const buttonClassMobile = 'h-8 text-black bg-mainYellow rounded-xl text-xs';

export const Header = () => {
  const navigate = useNavigate();
  const [isModalOpen, setisModalOpen] = useState(false);

  const onModalButtonClick = () => {
    setisModalOpen(!isModalOpen);
  };

  const onRegisterButtonClick = () => {
    if (isModalOpen) setisModalOpen(false);
  };
  const onLoginButtonClick = () => {
    if (isModalOpen) setisModalOpen(false);
  };

  return (
    <header className="bg-mainBlack h-[4.2rem] md:h-[5rem] w-full flex items-center justify-between px-8 md:px-8 fixed top-0">
      {/* Left */}
      <div
        onClick={() => navigate('home')}
        className="hover:cursor-pointer"
      >
        <h1>
          <img
            src={Logo}
            alt="4Music sharing your passion"
            className=" h-16 w-24 md:w-32"
          />
        </h1>
      </div>

      {/* Right */}

      <div className="relative md:hidden lg:hidden">
        <button
          className="mr-2"
          onClick={onModalButtonClick}
        >
          <UserIcon
            viewBox="0 0 15 15"
            width="35px"
            height="30px"
            fill="white"
          />
        </button>

        {isModalOpen && (
          <div className="gap-6 flex flex-col absolute right-[-2rem] top-[3rem] bg-mainBlack w-40 p-4 rounded-bl-xl z-50">
            <Button
              customClass={buttonClassMobile}
              text="Crear cuenta"
              onClick={onRegisterButtonClick}
            />
            <Button
              customClass={buttonClassMobile}
              text="Iniciar Sesión"
              onClick={onLoginButtonClick}
            />
          </div>
        )}
      </div>

      <div className="gap-6 hidden md:flex lg:flex ">
        <Button
          customClass={buttonClass}
          text="Crear cuenta"
          onClick={onRegisterButtonClick}
        />
        <Button
          customClass={buttonClass}
          text="Iniciar Sesión"
          onClick={onLoginButtonClick}
        />
      </div>
    </header>
  );
};
