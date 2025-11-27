import React from "react";
import PropTypes from "prop-types";
const Button = ({
  children,
  cvButton,
  formButton,
  formEvent,
  buttonType,
  btnEvent,
  formButtonWidth,
  cvButtonBgColor
}) => {
  return (
    <>
      {cvButton && (
        <div
          onClick={btnEvent}
          className={`px-6 py-2 rounded-xl cursor-pointer  text-white capitalize  lg:text-lg text-md text-center font-medium ${cvButtonBgColor}`}
        >
          {children}
        </div>
      )}
      {/*======formButton====*/}
      {formButton && (
        <button
          onClick={formEvent}
          type={buttonType}
          className={`px-3 py-2 cursor-pointer capitalize rounded-lg font-medium text-lg bg-green-600 hover:bg-green-500 text-white ${formButtonWidth}`}
        >
          {children}
        </button>
      )}
    </>
  );
};

Button.propTypes = {
  cvButton: PropTypes.bool,
  formButton: PropTypes.bool,
  formButtonWidth: PropTypes.string,
  cvButtonBgColor:PropTypes.string
};
Button.defaultProps = {
  cvButton: false,
  formButton: false,
  formButtonWidth: "",
  cvButtonBgColor:"bg-linear-to-br from-blue-600 to-purple-600"
};
export default Button;
