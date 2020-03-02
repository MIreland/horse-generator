/* eslint-disable max-len */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './PrettyLoadingSpinner.css';

function PrettyLoadingSpinner ({ random = false, duration=3 }) {
  return (
    <div className={styles.spinner}>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 60 60" style={{
        enableBackground: 'new 0 0 60 60',
        animationDuration: random ? `${Math.round(Math.random() * 300) / 100}s` : `${duration}s`,
      }} xmlSpace="preserve">
        <g>
          <path className={classNames(styles.shape, styles.st0)} d="M34.8,40l16.7,4.5C54.4,40.4,56,35.4,56,30c0-3.3-0.6-6.4-1.7-9.3L41.1,33.8L34.8,40z"/>
          <path className={classNames(styles.shape, styles.st1)} d="M24.1,39.1l4.6,16.8c0.4,0,0.9,0.1,1.3,0.1c8.3,0,15.6-3.9,20.4-9.9l-17.9-4.8L24.1,39.1z"/>
          <path className={classNames(styles.shape, styles.st3)} d="M19.5,29.3L6.9,41.9c3.8,7.4,11.2,12.8,19.8,13.9l-5-18.3L19.5,29.3z"/>
          <path className={classNames(styles.shape, styles.st2)} d="M8.4,15.6C5.6,19.7,4,24.7,4,30c0,3.6,0.7,7,2,10.1l19.9-19.9L8.4,15.6z"/>
          <path className={classNames(styles.shape, styles.st4)} d="M36.5,21.2l-2.2-8l0,0l-2.5-9C31.2,4,30.6,4,30,4c-8.3,0-15.7,3.9-20.4,9.9L28.5,19L36.5,21.2z"/>
          <path className={classNames(styles.shape, styles.st5)} d="M41.1,30l0.3,1l5.3-5.2l2.4-2.4l4.5-4.4C49.8,11.2,42.6,5.6,33.9,4.3l5.1,18.5L41.1,30z"/>
          <polygon className={classNames(styles.shape, styles.st6)} points="34.3,13.1 34.3,13.1 34.3,13.2"/>
        </g>
      </svg>
    </div>
  );
}

PrettyLoadingSpinner.propTypes = { random: PropTypes.bool };

export default PrettyLoadingSpinner;
