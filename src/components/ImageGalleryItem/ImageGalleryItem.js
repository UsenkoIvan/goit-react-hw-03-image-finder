import React from "react";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ id, url, tag, isOpenModal }) => {
  return (
    <>
      <li id={id} className={styles.ImageGalleryItem} onClick={isOpenModal}>
        <img src={url} alt={tag} className={styles.ImageGalleryItemImage} />
      </li>
    </>
  );
};

export default ImageGalleryItem;
