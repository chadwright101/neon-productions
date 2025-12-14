interface Props {
  imageList: Array<{
    src: string;
    alt: string;
    classes?: string;
  }>;
  lazy?: boolean;
  classes?: string;
}

const Collage = ({ imageList, classes, lazy }: Props) => {
  return (
    <div className={`collage ${classes}`}>
      {imageList.map(({ src, alt, classes }, index) => (
        <picture className={classes} key={index}>
          <source srcSet={`${src}`} media="(max-width: 1249px)" />
          <img
            src={`${src}`}
            alt={alt}
            loading={lazy ? "lazy" : "eager"}
          />
        </picture>
      ))}
    </div>
  );
};

export default Collage;
