import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import GoldLine, {LineVariant, LineDirection} from "../gold-line";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

import {FreeMode, Navigation, Thumbs, EffectFade, Autoplay} from "swiper";

interface Props {
    imageList: Array<{ src: string; alt: string }>;
}

const ThumbnailSlideshow = ({imageList}: Props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);

    return (
        <div className="desktop:m-auto desktop:w-[1000px]">
            <div className="mx-8">
                {thumbsSwiper && (
                    <Swiper
                        loop={true}
                        // thumbs={{swiper: thumbsSwiper}}
                        modules={[FreeMode, Thumbs, EffectFade, Autoplay]}
                        effect="fade"
                        autoplay={{delay: 3500}}
                    >
                        {imageList.map((image, index) => (
                            (
                                <SwiperSlide key={index}>
                                    <div className="w-full bg-white h-full">
                                        <img
                                            className="object-contain w-full h-[370px] tablet:h-[520px] desktop:h-[580px] desktop:w-[1000px]"
                                            src={image.src}
                                            alt={image.alt}
                                        />
                                    </div>
                                </SwiperSlide>
                            )
                        ))}
                    </Swiper>
                )}
                <div className="hidden desktop:block">
                    <GoldLine
                        classes="mt-4"
                        direction={LineDirection.Horizontal}
                        variant={LineVariant.Line1}
                    />
                    <Swiper
                        onSwiper={swiper => setThumbsSwiper(swiper)}
                        loop={true}
                        slidesPerView={5}
                        watchSlidesProgress={true}
                        navigation={true}
                        modules={[FreeMode, Thumbs, Navigation]}
                    >
                        {imageList.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div>
                                    <img
                                        className="object-cover w-full h-36"
                                        src={image.src}
                                        alt={image.alt}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <GoldLine
                        direction={LineDirection.Horizontal}
                        variant={LineVariant.Line2}
                    />
                </div>
            </div>
        </div>
    );
};

export default ThumbnailSlideshow;
