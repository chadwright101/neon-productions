import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";

interface Props {
  classes?: string;
  imageList: Array<{
    src: string;
    alt: string;
  }>;
  objectContain?: boolean;
  delay?: number;
  lazy?: boolean;
}

const BasicSlideshow = ({
  imageList,
  classes,
  objectContain,
  delay,
  lazy,
}: Props) => {
  delay = delay ?? 3500;

  return (
    <Swiper
      className={classes}
      modules={[Autoplay, EffectFade]}
      autoplay={{ delay }}
      effect={"fade"}
      loop={true}
      lazy={lazy ?? false}
    >
      {imageList.map((image) => {
        return (
          <SwiperSlide>
            <div className="flex justify-center bg-white">
              <img
                className={`${
                  objectContain ? "object-contain" : "object-cover"
                } w-full h-[375px] tablet:h-[520px] desktop:h-[700px] desktop:w-[1000px]`}
                src={image.src}
                alt={image.alt}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default BasicSlideshow;
