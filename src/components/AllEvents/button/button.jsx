// import React from 'react'
import { MdAppRegistration } from "react-icons/md";
import "./button.css";
import PropTypes from "prop-types";

const Button = ({ data }) => {
  return (
    <div>
      <button className="Btn">
        <MdAppRegistration />
        {data}
      </button>
    </div>
  );
};

Button.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Button;
