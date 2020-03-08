import React from 'react';
import PropTypes from 'prop-types';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {
  getCountdownDays() {
    const oneDay = 1000 * 60 * 60 * 24;

    const currentTime = new Date();
    const time = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth() + 1, currentTime.getUTCDate()));
    const summerStart = new Date(Date.UTC(currentTime.getFullYear(), 6, 21));
    const summerEnd = new Date(Date.UTC(currentTime.getFullYear(), 9, 23));

    if (time.getTime() >= summerEnd.getTime()) {
      summerStart.setUTCFullYear(currentTime.getUTCFullYear() + 1);
    }

    const countDays = Math.round((summerStart - time) / oneDay);

    if ((time.getTime() <= summerEnd.getTime() && time.getTime() >= summerStart.getTime())) {
      return '';
    } else if (countDays == 1) {
      return countDays + ' day to summer!';
    } else {
      return countDays + ' days to summer!';
    }
  }

  render() {
    const days = this.getCountdownDays();

    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{days}</h3>
      </div>
    );
  }
}

DaysToSummer.propTypes = {
  title: PropTypes.string,
};

export default DaysToSummer;
