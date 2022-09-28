import React from 'react';
import Image from 'next/image';

import style from '../styles/web.module.css';

const ImageInner = ({ src, alt, width, height }) => {
  return (
    <>
      <Image
        className={style.image_inner}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </>
  );
};
export default ImageInner;
