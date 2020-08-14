import React from "react";
import PropTypes from "prop-types";
import styles from "./landing.module.scss";
import "../../index.css";
import { Link } from "react-router-dom";

class landing extends React.Component {
  // <div className={styles.bannercontainer}>
  // <div className={styles.bannerNamecontainer}>
  // <div className={[styles.neonwrapper,styles.landing].join(' ')}>
  //  <span >{this.props.name}</span>
  // </div>
  // <span className={styles.bannername}>{this.props.name}</span>
  // <span className={styles.bannername}>{this.props.name}</span>
  // <span className={styles.bannername}></span>
  // <span className={styles.bannername}></span>
  // </div>
  //
  //
  //
  // <div className={styles.links}>
  // <a href="#">
  // <span></span>
  // <span></span>
  // <span></span>
  // <span></span>
  // Coder
  // </a>
  //   <a href="#">
  //   <span></span>
  //   <span></span>
  //   <span></span>
  //   <span></span>
  //   Photographer
  //   </a>
  //   </div>
  // </div>

  render() {
    return (
      <div className="App">
        <div className={styles.landingContainer}>
          <div className={styles.bannerName}>{this.props.name}</div>
          <span className={styles.bannerName}>{this.props.name}</span>
          <span className={styles.bannerName}>{this.props.name}</span>
          <span className={styles.bannerName}></span>
          <span className={styles.bannerName}></span>
          <div className={styles.links}>
            <span className={styles.bannerBorder}></span>
            <span className={styles.bannerBorder}></span>
            <div className={styles.linksContainer}>
              <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <Link to="/"> Coder</Link>
              </a>

              <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <Link to="/photography"> Photographer</Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default landing;
