import React from 'react';
import PropTypes from 'prop-types';
import styles from './landing.module.scss';
import '../../index.css'

class landing extends React.Component{


  render(){
    return(
      <div className={styles.bannercontainer}>

      <div className={[styles.neonwrapper,styles.landing].join(' ')}>{this.props.name}</div>
      <span className={styles.bannername}>{this.props.name}</span>
      <span className={styles.bannername}>{this.props.name}</span>
      <span className={styles.bannername}></span>
      <span className={styles.bannername}></span>
      <div className={styles.links}>
      <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Coder
      </a>
        <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Photographer
        </a>
        </div>
      </div>

    )
  }
}

export default landing;
