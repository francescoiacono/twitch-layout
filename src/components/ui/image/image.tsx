interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  ...rest
}) => {
  return <img className={className} src={src} alt={alt} {...rest} />;
};
