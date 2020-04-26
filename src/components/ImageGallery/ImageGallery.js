import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";
import PropTypes from "prop-types";

const ImageGallery = ({ hits, isOpenModal }) => {
  return (
    <>
      <ul className={styles.ImageGallery}>
        {hits.map(({ id, webformatURL, tags }) => (
          <ImageGalleryItem
            key={id}
            id={id}
            url={webformatURL}
            tag={tags}
            isOpenModal={isOpenModal}
          />
        ))}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  isOpenModal: PropTypes.func.isRequired,
  hits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      tags: PropTypes.string,
    })
  ).isRequired,
};

export default ImageGallery;
