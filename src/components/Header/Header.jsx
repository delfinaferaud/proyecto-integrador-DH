import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { Button } from './Button';
import { UserIcon } from '../icons';

const buttonClass = 'w-[140px] text-base';
const buttonClassMobile = 'text-xs';

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
    <header className="bg-mainBlack h-[4.2rem] md:h-[5rem] w-full flex items-center justify-between px-8 md:px-8 fixed top-0 z-50">
      {/* Left */}
      <div
        onClick={() => navigate('home')}
        className="hover:cursor-pointer"
      >
        <h1>
          <img
            src={Logo}
            alt="4Music sharing your passion"
            className="w-40 md:w-48 lg:w-65"
            aria-label="logo"
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
