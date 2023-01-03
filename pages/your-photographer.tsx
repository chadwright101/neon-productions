import ContentPadding from "../components/content-padding";
import Heading, { HeadingVariant } from "../components/heading";
import GoldLine, { LineVariant } from "../components/gold-line";
import Head from "next/head";
import { useState } from "react";
import Link from "next/link";

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
      src: "/portfolio/lifestyle/page/lifestyle-page-30.webp",
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
      src: "/portfolio/corporate/page/corporate-page-43.webp",
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
      src: "/portfolio/boudoir/page/boudoir-page-5.webp",
      alt: "Boudoir photography from Neon Productions",
      classes: "collage-3",
      title: "Boudoir",
      url: "/photography-portfolio/boudoir",
      enter: () => setBoudoirHover(!boudoirHover),
      leave: () => setBoudoirHover(!boudoirHover),
      hover: boudoirHover,
    },
    {
      src: "/portfolio/newborn/page/newborn-page-26.webp",
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
        <title>{title}</title>
        <meta name="description" content={content} />
      </Head>
      <main>
        <Heading variant={HeadingVariant.PageHeading}>
          Your Photographer
        </Heading>
        <GoldLine variant={LineVariant.Line1} classes=" mb-8 desktop:mb-16" />
        <p className="text-center">
          Hi there! This is me, your main Photographer, Morgan. But you can call
          me Morgz, or Moo.
          <br />
          <br />
          <div className="flex flex-wrap gap-4 justify-center">
            <img
              className="object-cover h-[245px] w-[360px]"
              src="/your-photographer/morgan4.webp"
              alt=""
            />
            <img
              className=" object-cover h-[245px] w-[190px]"
              src="/your-photographer/morgan1.webp"
              alt=""
            />
            <img
              className="hidden desktop:block object-cover h-[245px] w-[190px]"
              src="/your-photographer/morgan3.webp"
              alt=""
            />
            <img
              className="object-cover h-[245px] w-[190px]"
              src="/your-photographer/morgan2.webp"
              alt=""
            />
          </div>
          <br />
          I am a mom of 2 amazing, smart loving boys, Jax and Xav, and my
          biggest fan and supporter is my hubby Ruan who also sometimes jumps
          behind the camera for me. I am an animal and plant lover with 2
          degrees and my family is my world.
          <br />
          <br />I without a doubt have the best job in the world, seeing people
          smile and loving their photos is what keeps me going! I started my
          photography journey in 2011 with advertising and product photography,
          and then ventured into the wedding world in 2013, when I opened Neon.
          What a journey that became!
          <br />
          <br />
          Just before lockdown I decided to shift my specialty onto Newborns,
          and oh did I make the best decision I am in love with all my babies,
          they challenge me to be a better photographer and master my skills.
          <br />
          <br />
          Boudoir photography is also a huge passion for me, all my ladies are
          just the absolute best and we have a ball!! So to sum up I am a
          Newborn, lifestyle and corporate photographer and I love my job.
          <br />
          <br />I am a self taught photographer, I have done a few courses over
          the years and I am always learning to give my very best each time. My
          amazing team including, Ruan, Lexi and Shelby help me on this awesome
          adventure and I just cannot thank them enough!
          <br />
          <br />I can't wait to see you in front of my lens very very soon!
          <br />
          <br />
          Love Morgan, Morgz, Moo
        </p>
      </main>
      <article className="hidden desktop:block">
        <GoldLine variant={LineVariant.Line2} classes=" my-4 desktop:my-12" />
        <div className="your-photographer-collage hidden desktop:grid">
          {imageList.map((item, index) => (
            <div
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
              <img src={item.src} alt={item.alt} loading="lazy" />
            </div>
          ))}
        </div>
        <GoldLine variant={LineVariant.Line3} classes=" mt-4 desktop:mt-12" />
      </article>
      <article>
        <Heading variant={HeadingVariant.Subheading}>
          Collaborative Vendors
        </Heading>
        <ul className="vendors">
          {vendorList.map((item, index) => (
            <li>
              <img
                className={item.classes}
                src={item.src}
                alt={item.alt}
                loading="lazy"
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
    </ContentPadding>
  );
};

const vendorList = [
  {
    src: "/vendors/shutter2,0.webp",
    alt: "Fun Photos logo",
    line1: "Fun Photos:",
    line2: "Louise Kruger 084 584 5804",
    line3: "events@funphotos.co.za",
    line4: "www.funphotos.co.za",
  },
  {
    src: "/vendors/Dilightful Flowers Logo (1).webp",
    alt: "Dilightful Flowers logo",
    line1: "Dilightful Flowers",
    line2: "Tel- Dianne 082 371 5899",
    line3: "Delia 084 679 5359",
    line4: "Email- dilightfulflowers@gmail.com ",
    line5: "Website - www.dilightfulflowers.co.za",
  },
  {
    src: "/vendors/119481876_192181652307233_7617736799208534236_o.webp",
    alt: "Beauty and the Bump logo",
    line1: "Beauty and the Bump",
    line2: "Tasmin 0824883071",
  },
  {
    src: "/vendors/34525338_1677344369047697_5890903501684342784_o.webp",
    alt: "Buttercup Cakes logo",
    line1: "Buttercup Cakes",
    line2: "Brittney 0793531378",
  },
  {
    src: "/vendors/91746962_2780471705409345_6826425809150935040_o.webp",
    alt: "Real Brides logo",
    line1: "Real Brides Magazine",
    line2: "Stewart 0614904915",
  },
  {
    src: "/vendors/LMC-Logo.webp",
    alt: "LMC logo",
    line1: "LMC PR and Advertising",
    line2: "Sonia Laverick 0827750878",
    line3: "www.laverickmedia.co.za",
  },
  {
    src: "/vendors/Facebook_Banner (1).webp",
    alt: "Perfect Tone Music logo",
    classes: "-ml-6",
    line1: "Perfect Tone Music",
    line2: "Tony Brinsford 072 921 6969",
    line3: "enquiries@perfecttonemusic.co.za",
    line4: "www.perfecttonemusic.co.za",
  },
  {
    src: "/vendors/Urban Fusion Spa.webp",
    alt: "Perfect Tone Music logo",
    classes: "ml-6",
    line1: "Urban Fusion Spa",
    line2: "Stacey Isaacs",
    line3: "MUA",
    line4: "0825496821",
  },
];

export default YourPhotographer;
