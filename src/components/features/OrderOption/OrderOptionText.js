import React from 'react';
import styles from './OrderOption.scss';
import propTypes from 'prop-types';

const OrderOptionText = ({ currentValue, setOptionValue }) => (
  <div className={styles.number}>
    <input type="text" className={styles.input} value={currentValue} onChange={event => setOptionValue(event.currentTarget.value)} ></input>
  </div>
);

OrderOptionText.propTypes = {
  currentValue: propTypes.string,
  setOptionValue: propTypes.func,
};

export default OrderOptionText;
