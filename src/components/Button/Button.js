import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ onClickBtn }) => {
  return (
    <button type="button" className={styles.Button} onClick={onClickBtn}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClickBtn: PropTypes.func.isRequired,
};

export default Button;
