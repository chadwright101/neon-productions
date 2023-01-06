import Image from "next/image";
interface Props {
  imageList: Array<{
    src: string;
    alt: string;
    classes?: string;
  }>;
  classes?: string;
  lazy?: boolean;
  priority?: boolean;
}

const Collage = ({ imageList, classes, lazy, priority }: Props) => {
  return (
    <div className={`collage ${classes}`}>
      {imageList.map((item, index) => (
        <Image
          key={index}
          className={item.classes}
          src={item.src}
          alt={item.alt}
          loading={lazy ? "lazy" : "eager"}
          width={1000}
          height={500}
          priority={priority ? true : false}
        />
      ))}
    </div>
  );
};

export default Collage;
