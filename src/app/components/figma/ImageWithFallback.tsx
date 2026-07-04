import React, { useState } from 'react';
import heroImage from '../../../imports/9.png';

export function ImageWithFallback(
  props: React.ImgHTMLAttributes<HTMLImageElement>,
) {
  const [didError, setDidError] = useState(false);
  const { src, alt, className, ...rest } = props;

  return (
    <img
      src={didError ? heroImage : src}
      alt={alt || '页面展示图片'}
      className={className}
      {...rest}
      onError={() => setDidError(true)}
    />
  );
}
