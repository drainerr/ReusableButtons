import React from 'react';
import styles from './Button.module.css';
import { MdAddShoppingCart } from 'react-icons/md';
const Button = (props) => {
  const { variant, disableShadow, startIcon, endIcon, size, color } = props;
  const propsLen = Object.entries(props).length;
  return (
    <button
      disabled={props.disabled}
      className={
        !props.disabled &&
        `
            ${propsLen > !1 && styles.default}
            ${styles[`variant-${variant}`] || ''}
            ${disableShadow && styles.disableShadow}
            ${styles[`size-${size}`] || ''}
            ${styles[`color-${color}`] || ''}  
        `
      }
    >
      <span className={styles.buttonContent}>
        {startIcon === 'local_grocery_store' && <MdAddShoppingCart />}
        {props.children}
        {endIcon === 'local_grocery_store' && <MdAddShoppingCart />}
      </span>
    </button>
  );
};

export default Button;
