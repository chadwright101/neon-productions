import Image from "next/image";
import { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import GoldLine from "./gold-line";

import "@splidejs/react-splide/css";

interface Props {
  imageList: Array<{}>;
  priority?: boolean;
  classes?: boolean;
  lazy?: boolean;
  objectFit?: boolean;
}

const Slideshow = ({
  imageList,
  priority,
  classes,
  lazy,
  objectFit,
}: Props) => {
  const mainRef = useRef<Splide>(null);

  const handleThumbs = (id: number) => {
    if (mainRef.current) {
      mainRef.current.go(id);
    }
  };

  return (
    <>
      {/* Main slider */}
      <Splide
        className={`desktop:w-[1000px] mx-auto ${
          classes ? "desktop:hidden" : null
        }`}
        ref={mainRef}
        options={{
          rewind: true,
          type: "fade",
          pagination: false,
          autoplay: true,
        }}
      >
        {imageList.map((item: any, index) => (
          <SplideSlide key={index}>
            <div className="w-full bg-white h-full flex justify-center">
              <Image
                className={`w-full h-[450px] tablet:h-[520px] desktop:h-[580px] ${
                  objectFit ? "object-cover" : "object-contain"
                }`}
                src={item}
                alt="hello"
                loading={lazy ? "lazy" : "eager"}
                quality={100}
                priority={priority ? true : false}
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default Slideshow;
