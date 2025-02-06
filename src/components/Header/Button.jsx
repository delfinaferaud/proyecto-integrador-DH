import PropTypes from 'prop-types';

export const Button = ({ customClass, text, onClick }) => {
  return (
    <button
      className={`${customClass} h-8 text-black bg-mainYellow rounded-xl hover:bg-white hover:border-mainYellow hover:border-2 transition-all duration-300 ease-in hover:opacity-100`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  customClass: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
