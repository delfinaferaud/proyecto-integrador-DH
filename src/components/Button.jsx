import PropTypes from 'prop-types';

export const Button = ({customClass, text, onClick}) => {
  return (
    <button className={customClass} onClick={onClick}>{text}</button>
  )
}

Button.propTypes = {
    customClass: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
}