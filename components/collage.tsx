interface Props {
  imageList: Array<{
    src: string;
    alt: string;
    classes?: string;
  }>;
  classes?: string;
}

const Collage = ({ imageList, classes }: Props) => {
  return (
    <div className={`collage ${classes}`}>
      {imageList.map(({ src, alt, classes }, index) => (
        <picture className={classes} key={index}>
          <source srcSet={`${src}?tr=w-260`} media="(max-width: 1249px)" />
          <img
            src={`${src}?tr=w-300`}
            alt={alt}
            loading={index < 2 ? "eager" : "lazy"}
          />
        </picture>
      ))}
    </div>
  );
};

export default Collage;
