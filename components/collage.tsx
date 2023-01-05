import Image from "next/image";
interface Props {
  imageList: Array<{
    src: string;
    alt: string;
    classes: string;
  }>;
  classes?: string;
  lazy?: boolean;
}

const Collage = ({ imageList, classes, lazy }: Props) => {
  return (
    <div className={`collage ${classes}`}>
      {imageList.map((item, index) => (
        <Image
          key={index}
          className={item.classes}
          src={item.src}
          alt={item.alt}
          loading={lazy ? "lazy" : "eager"}
        />
      ))}
    </div>
  );
};

export default Collage;
