import Image from "next/image";
import ContentPadding from "../components/content-padding";
import Heading, { HeadingVariant } from "../components/heading";
import GoldLine from "../components/gold-line";
import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import vendorList from "../data/vendor-list.json";
import morgan1 from "../public/your-photographer/morgan1.jpg";
import morgan2 from "../public/your-photographer/morgan2.jpg";
import morgan3 from "../public/your-photographer/morgan3.jpg";
import morgan4 from "../public/your-photographer/morgan4.jpg";
import collage1 from "../public/portfolio/lifestyle/page/lifestyle-page-45.jpg";
import collage2 from "../public/portfolio/corporate/page/corporate-page-43.jpg";
import collage3 from "../public/portfolio/boudoir/page/boudoir-page-30.jpg";
import collage4 from "../public/portfolio/newborn/page/newborn-page-13.jpg";

interface Props {
  title: string;
  content: string;
}

const YourPhotographer = ({ title, content }: Props) => {
  const [lifestyleHover, setLifestyleHover] = useState(false);
  const [corporateHover, setCorporateHover] = useState(false);
  const [boudoirHover, setBoudoirHover] = useState(false);
  const [newbornHover, setNewbornHover] = useState(false);
  const imageList = [
    {
      src: collage1,
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
      src: collage2,
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
      src: collage3,
      alt: "Boudoir photography from Neon Productions",
      classes: "collage-3",
      title: "Boudoir",
      url: "/photography-portfolio/boudoir",
      enter: () => setBoudoirHover(!boudoirHover),
      leave: () => setBoudoirHover(!boudoirHover),
      hover: boudoirHover,
    },
    {
      src: collage4,
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
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Image
              className="object-cover h-[245px] w-[360px]"
              src={morgan4}
              alt=""
              priority
            />
            <Image
              className=" object-cover h-[245px] w-[190px]"
              src={morgan1}
              alt=""
              priority
            />
            <Image
              className="hidden desktop:block object-cover h-[245px] w-[190px]"
              src={morgan3}
              alt=""
              priority
            />
            <Image
              className="object-cover h-[245px] w-[190px]"
              src={morgan2}
              alt=""
              priority
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
                    <h4 className="text-[2.5rem] text-center px-4 uppercase">
                      {item.title} Photography
                    </h4>
                  </Link>
                )}
                <Image
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width={250}
                  height={500}
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
            {vendorList.map((item, index) => (
              <li key={index}>
                <Image
                  className={item.classes}
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width={200}
                  height={200}
                />
                <p className={item.classes}>
                  <span className="font-bold">{item.line1}</span>
                  <br />
                  {item.line2}
                  <br />
                  {item.line3}
                  <br />
                  {item.line4}
                  <br />
                  {item.line5}
                </p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </ContentPadding>
  );
};

export default YourPhotographer;
