import React, { Component } from "react";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";

export default class Modal extends Component {
  state = {};
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleCloseModal);
  }

  componentWillUnmount() {
    window.addEventListener("keydown", this.handleCloseModal);
  }
  handleCloseModal = (e) => {
    const { onClick } = this.props;

    if (e.key === "Escape") {
      onClick();
    }
  };

  render() {
    const { children, onClick } = this.props;
    return (
      <div className={styles.overlay} onClick={onClick}>
        <div className={styles.modal}>{children}</div>
      </div>
    );
  }
}
