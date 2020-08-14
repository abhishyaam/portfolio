import React from "react";
import PropTypes from "prop-types";
import styles from "./Photography.module.scss";

// const Photography = () => (
//   <div className={styles.Photography} data-testid="Photography">
//     {this.props.name}
//   </div>
// );

// Photography.propTypes = {};
//
// Photography.defaultProps = {};

class Photography extends React.Component {
  createImages() {
    let images = [
      {
        src: "https://source.unsplash.com/1600x900/?nature",
        alt: "nature",
      },
      {
        src: "https://source.unsplash.com/1600x900/?water",
        alt: "water",
      },
      {
        src: "https://source.unsplash.com/1600x900/?sports",
        alt: "sports",
      },
      {
        src: "https://source.unsplash.com/1600x900/?street",
        alt: "street",
      },
      {
        src: "https://source.unsplash.com/1600x900/?architecture",
        alt: "architecture",
      },
      {
        src: "https://source.unsplash.com/1600x900/?racing",
        alt: "racing",
      },
      {
        src: "https://source.unsplash.com/1600x900/?adventure",
        alt: "adventure",
      },
      {
        src: "https://source.unsplash.com/1600x900/?underwater",
        alt: "underwater",
      },{
        src: "https://source.unsplash.com/1600x900/?bollywood",
        alt: "bollywood",
      },
      {
        src: "https://source.unsplash.com/1600x900/?gaming",
        alt: "gaming",
      },
      {
        src: "https://source.unsplash.com/1600x900/?politics",
        alt: "politics",
      },
      {
        src: "https://source.unsplash.com/1600x900/?india",
        alt: "india",
      },
      {
        src: "https://source.unsplash.com/1600x900/?panther",
        alt: "panther",
      },
      {
        src: "https://source.unsplash.com/1600x900/?batman",
        alt: "batman",
      },
      {
        src: "https://source.unsplash.com/1600x900/?himalayas",
        alt: "himalayas",
      },
      {
        src: "https://source.unsplash.com/1600x900/?goa",
        alt: "goa",
      },
      {
        src: "https://source.unsplash.com/1600x900/?royalenfield",
        alt: "royalenfield",
      },
      {
        src: "https://source.unsplash.com/1600x900/?beach",
        alt: "beach",
      },
      {
        src: "https://source.unsplash.com/1600x900/?war",
        alt: "war",
      },
      {
        src: "https://source.unsplash.com/1600x900/?food",
        alt: "food",
      },
      {
        src: "https://source.unsplash.com/1600x900/?volcano",
        alt: "volcano",
      },
      {
        src: "https://source.unsplash.com/1600x900/?flower",
        alt: "flower",
      },
      {
        src: "https://source.unsplash.com/1600x900/?sky",
        alt: "sky",
      },
      {
        src: "https://source.unsplash.com/1600x900/?lebanon",
        alt: "lebanon",
      },
    ];
    let divs = [];
    images.forEach((image,i) => {
      divs.push(
        <div key={i} className={styles.galleryContainer}>
          <div className={styles['galleryItem']}>
            <div className={styles.image}>
              <img src={image.src} alt={image.alt} />
            </div>
            <div className={styles.text}>{image.alt}</div>
          </div>
        </div>
      );
    });
    return divs;
  }
  render() {
    return (
      <div className={styles.Photography} data-testid="Photography">
      <h1>Some of my works</h1>
        <div className={styles.container}>{this.createImages()}</div>
      </div>
    );
  }
}
export default Photography;
