import Image from "next/image";
import ContentPadding from "../components/content-padding";
import Heading, { HeadingVariant } from "../components/heading";
import GoldLine from "../components/gold-line";
import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import vendorList from "../data/vendor-list.json";

const YourPhotographer = () => {
  const [lifestyleHover, setLifestyleHover] = useState(false);
  const [corporateHover, setCorporateHover] = useState(false);
  const [boudoirHover, setBoudoirHover] = useState(false);
  const [newbornHover, setNewbornHover] = useState(false);
  const imageList = [
    {
      src: "/images/portfolio/lifestyle/page/lifestyle-page-45.webp",
      alt: "Lifestyle photography from Neon Productions",
      classes: "collage-1",
      title: "Lifestyle",
      url: "/photography-portfolio/lifestyle",
      height: "h-[220px] overlay:h-[245px]",
      enter: () => setLifestyleHover(!lifestyleHover),
      leave: () => setLifestyleHover(!lifestyleHover),
      hover: lifestyleHover,
    },
    {
      src: "/images/portfolio/corporate/page/corporate-page-43.webp",
      alt: "Corporate photography from Neon Productions",
      classes: "collage-2",
      title: "Corporate",
      url: "/photography-portfolio/corporate",
      height: "h-[220px] overlay:h-[245px]",
      enter: () => setCorporateHover(!corporateHover),
      leave: () => setCorporateHover(!corporateHover),
      hover: corporateHover,
    },
    {
      src: "/images/portfolio/boudoir/page/boudoir-page-30.webp",
      alt: "Boudoir photography from Neon Productions",
      classes: "collage-3",
      title: "Boudoir",
      url: "/photography-portfolio/boudoir",
      enter: () => setBoudoirHover(!boudoirHover),
      leave: () => setBoudoirHover(!boudoirHover),
      hover: boudoirHover,
    },
    {
      src: "/images/portfolio/newborn/page/newborn-page-13.webp",
      alt: "Newborn photography from Neon Productions",
      classes: "collage-4",
      title: "Newborn",
      url: "/photography-portfolio/newborn",
      enter: () => setNewbornHover(!newbornHover),
      leave: () => setNewbornHover(!newbornHover),
      hover: newbornHover,
    },
  ];
  return (
    <ContentPadding>
      <Head>
        <title>Your Photographer - Neon Productions</title>
        <meta
          name="description"
          content="Find out more about your photographer from Neon Productions"
        />
      </Head>
      <div className="your-photographer hidden desktop:block">
        <main>
          <Heading variant={HeadingVariant.PageHeading}>
            Your Photographer
          </Heading>
          <GoldLine horizontal line1 classes=" mb-8 desktop:mb-16" />
          <p>
            Hi there! This is me, your main Photographer, Morgan. But you can
            call me Morgz, or Moo.
          </p>
          <div className="grid grid-cols-2 gap-4 justify-center mb-8 tablet:grid-cols-3">
            <Image
              className="object-cover col-span-2 h-full w-full"
              src="/images/your-photographer/morgan-3.jpg"
              alt=""
              loading="lazy"
              width={685}
              height={445}
            />
            <Image
              className="object-cover h-full w-full"
              src="/images/your-photographer/morgan-2.jpg"
              alt=""
              loading="lazy"
              width={850}
              height={470}
            />
            <Image
              className="object-cover h-full w-full"
              src="/images/your-photographer/morgan-1.jpg"
              alt=""
              loading="lazy"
              width={335}
              height={470}
            />
            <Image
              className="object-cover h-full w-full"
              src="/images/your-photographer/morgan-4.jpg"
              alt=""
              loading="lazy"
              width={335}
              height={470}
            />
            <Image
              className="object-cover h-full w-full"
              src="/images/your-photographer/morgan-5.jpg"
              alt=""
              loading="lazy"
              width={335}
              height={470}
            />
          </div>
          <p>
            I am a mom of 2 amazing, smart loving boys, Jax and Xav, and my
            biggest fan and supporter is my hubby Ruan who also sometimes jumps
            behind the camera for me. I am an animal and plant lover with 2
            degrees and my family is my world.
          </p>
          <p>
            I without a doubt have the best job in the world, seeing people
            smile and loving their photos is what keeps me going! I started my
            photography journey in 2011 with advertising and product
            photography, and then ventured into the wedding world in 2013, when
            I opened Neon. What a journey that became!
          </p>
          <p>
            Just before lockdown I decided to shift my specialty onto Newborns,
            and oh did I make the best decision I am in love with all my babies,
            they challenge me to be a better photographer and master my skills.
          </p>
          <p>
            Boudoir photography is also a huge passion for me, all my ladies are
            just the absolute best and we have a ball!! So to sum up I am a
            Newborn, lifestyle and corporate photographer and I love my job.
          </p>
          <p>
            I am a self taught photographer, I have done a few courses over the
            years and I am always learning to give my very best each time. My
            amazing team including, Ruan, Lexi and Shelby help me on this
            awesome adventure and I just cannot thank them enough!
          </p>
          <p>
            I can&apos;t wait to see you in front of my lens very very soon!
          </p>
          <p>Love Morgan, Morgz, Moo</p>
        </main>
        <article className="hidden desktop:block">
          <GoldLine horizontal line2 classes=" my-4 desktop:my-12" />
          <div className="your-photographer-collage hidden desktop:grid">
            {imageList.map((item: any, index) => (
              <div
                key={index}
                className={item.classes}
                onMouseEnter={item.enter}
                onMouseLeave={item.leave}
              >
                {item.hover && (
                  <Link
                    href={item.url}
                    className={`bg-white/80 absolute grid animate__animated animate__fadeIn animate__fast ${
                      item.height || "h-[456px] overlay:h-[506px]"
                    } w-[290px] overlay:w-[323px] place-items-center`}
                  >
                    <h3 className="text-[2.75rem] text-center px-4 uppercase font-Acid">
                      {item.title} Photography
                    </h3>
                  </Link>
                )}
                <Image
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width={350}
                  height={506}
                />
              </div>
            ))}
          </div>
          <GoldLine horizontal line3 classes=" mt-4 desktop:mt-12" />
        </article>
        <article>
          <Heading variant={HeadingVariant.Subheading}>
            Collaborative Vendors
          </Heading>
          <ul className="vendors">
            {vendorList.map(
              (
                { classes, src, alt, line1, line2, line3, line4, line5 },
                index
              ) => (
                <li key={index}>
                  <picture className={classes} key={index}>
                    <img src={`${src}`} alt={alt} loading="lazy" />
                  </picture>
                  <p className={classes}>
                    <span className="font-bold">{line1}</span>
                    <br />
                    {line2}
                    <br />
                    {line3}
                    <br />
                    {line4}
                    <br />
                    {line5}
                  </p>
                </li>
              )
            )}
          </ul>
        </article>
      </div>
    </ContentPadding>
  );
};

export default YourPhotographer;
