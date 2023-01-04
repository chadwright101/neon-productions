import Image from "next/image";
interface Props {
  imageList: Array<{
    src: string;
    alt: string;
    classes: string;
  }>;
  classes?: string;
}

const Collage = ({ imageList, classes }: Props) => {
  return (
    <div className={`collage ${classes}`}>
      {imageList.map((item, index) => (
        <Image
          key={index}
          className={item.classes}
          src={item.src}
          alt={item.alt}
        />
      ))}
    </div>
  );
};

export default Collage;
