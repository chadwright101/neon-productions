import { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import GoldLine from "./gold-line";

import "@splidejs/react-splide/css";

interface Props {
  imageList: Array<{ src: string; alt: string }>;
  thumbnails?: boolean;
  desktopHidden?: boolean;
  lazy?: boolean;
  objectFit?: boolean;
  priority?: boolean;
}

const Slideshow = ({
  imageList,
  thumbnails,
  desktopHidden,
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
          desktopHidden ? "desktop:hidden" : null
        }`}
        ref={mainRef}
        options={{
          rewind: true,
          type: "fade",
          pagination: false,
          autoplay: true,
        }}
      >
        {imageList.map(({ src, alt }, index) => (
          <SplideSlide key={index}>
            <picture
              key={index}
              className="w-full bg-white h-full flex justify-center"
            >
              <source srcSet={`${src}?tr=w-500`} media="(max-width: 450px)" />
              <source srcSet={`${src}?tr=w-600`} media="(max-width: 550px)" />
              <source srcSet={`${src}?tr=w-800`} media="(max-width: 750px)" />
              <img
                src={`${src}?tr=w-1050`}
                alt={alt}
                loading={index < 2 ? "eager" : "lazy"}
                className={`w-full h-[350px] tablet:h-[475px] desktop:h-[580px] ${
                  objectFit && index !== 1 ? "object-cover" : "object-contain"
                }`}
              />
            </picture>
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
              arrows: true,
            }}
          >
            {imageList.map(({ src, alt }, index) => (
              <SplideSlide key={index}>
                <picture
                  key={index}
                  className="w-full bg-black h-full flex justify-center"
                  onClick={() => handleThumbs(index)}
                >
                  <img
                    src={`${src}?tr=w-175`}
                    alt={alt}
                    loading={index < 2 ? "eager" : "lazy"}
                    className="object-cover w-full h-[110px] hover:opacity-80 cursor-pointer"
                  />
                </picture>
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
