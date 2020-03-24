import React, { Component } from 'react';
import styles from './Character.css';
import PropTypes from 'prop-types';

export default class Character extends Component {

  static propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    lastLocation: PropTypes.string.isRequired
  }
  
  render() {
    const { image, name, description, status, species, gender, origin, lastLocation } = this.props;

    return (
      <>
        <article className={styles.Character}>
          <div className={styles.imgWrapper}>
            <img className={styles.image} src={image} alt={name} />
            <div className={styles.title}>
              <h2 className={styles.name}>{name}</h2>
              <p className={styles.description}>{description}</p>
            </div>
          </div>
            
          <div className={styles.infoWrapper}>
            <div className={styles.textWrapper}>
              <span>STATUS</span>
              <p>{status}</p>
            </div>
            <div className={styles.textWrapper}>
              <span>SPECIES</span>
              <p>{species}</p>
            </div>
            <div className={styles.textWrapper}>
              <span>GENDER</span>
              <p>{gender}</p>
            </div>
            <div className={styles.textWrapper}>
              <span>ORIGIN</span>
              <p>{origin}</p>
            </div>
            <div className={styles.textWrapper}>
              <span>LAST LOCATION</span>
              <p>{lastLocation}</p>
            </div>
          </div>
        </article>
      </>
    );
  }

}
