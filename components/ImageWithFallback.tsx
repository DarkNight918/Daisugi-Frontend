"use client"
import React, { useState, FC } from 'react'
import Image, { ImageProps }  from 'next/image';

// const ImageWithFallback = ({ src, fallback, alt, ...props }) => {
//   const [imgSrc, setImgSrc] = useState(src);

//   const handleError = () => {
//     setImgSrc(fallback);
//   };

//   return <img src={imgSrc} alt={alt} onError={handleError} {...props} />;
// };

// export default ImageWithFallback

interface Props extends ImageProps {
  fallback: string;
}

const ImageWithFallback: FC<Props> = ({ src, fallback, ...rest }) => {
    const [imgSrc, setImgSrc] = useState(src);

    return (
      <Image
        {...rest}
        src={imgSrc}
        onError={() => {
            setImgSrc(fallback);
        }}
      />
    );
};

export default ImageWithFallback;