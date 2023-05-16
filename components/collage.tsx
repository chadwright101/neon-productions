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
          width={1000}
          height={500}
          loading={index < 2 ? "eager" : "lazy"}
          quality={50}
        />
      ))}
    </div>
  );
};

export default Collage;
