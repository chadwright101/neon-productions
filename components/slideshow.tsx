import { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import GoldLine from "./gold-line";

import "@splidejs/react-splide/css";
import ContentPadding from "./content-padding";

interface Props {
  imageList: Array<{ src: string; alt: string }>;
  thumbnails?: boolean;
  classes?: boolean;
  lazy?: boolean;
  objectFit?: boolean;
}

const Slideshow = ({
  imageList,
  thumbnails,
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
        {imageList.map((item, index) => (
          <SplideSlide>
            <div
              key={index}
              className="w-full bg-white h-full flex justify-center"
            >
              <img
                className={`w-full h-[450px] tablet:h-[520px] desktop:h-[580px] ${
                  objectFit ? "object-cover" : "object-contain"
                }`}
                src={item.src}
                alt={item.alt}
                loading={lazy ? "lazy" : "eager"}
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
      {thumbnails && (
        <div className="hidden desktop:block">
          {/* Thumbnail slider */}
          <GoldLine width="w-[1000px]" classes="mt-8" horizontal line1 />
          <Splide
            className="w-[1000px] mx-auto"
            options={{
              type: "slide",
              rewind: true,
              pagination: false,
              fixedWidth: 110,
              fixedHeight: 110,
              cover: true,
              focus: "center",
              snap: true,
              arrows: false,
            }}
          >
            {imageList.map((item, index) => (
              <SplideSlide>
                <div
                  key={index}
                  className="w-full bg-black h-full flex justify-center"
                >
                  <img
                    onClick={() => handleThumbs(index)}
                    className="object-cover w-full h-36 hover:opacity-80 cursor-pointer"
                    src={item.src}
                    alt={item.alt}
                    loading={lazy ? "lazy" : "eager"}
                  />
                </div>
              </SplideSlide>
            ))}
          </Splide>
          <GoldLine width="w-[1000px]" horizontal line2 />
        </div>
      )}
    </>
  );
};

export default Slideshow;
