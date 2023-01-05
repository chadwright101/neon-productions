import Image from "next/image";
import Head from "next/head";
import ContentPadding from "../components/content-padding";
import Heading, { HeadingVariant } from "../components/heading";
import homeSlideImages from "../data/home-slideshow.json";
import Slideshow from "../components/slideshow";
import peonies from "../public/general/peonies-background-tumblr-7.webp";
import morgan1 from "../public/your-photographer/morgan1.webp";
import morgan2 from "../public/your-photographer/morgan2.webp";
import morgan3 from "../public/your-photographer/morgan3.webp";
import morgan4 from "../public/your-photographer/morgan4.webp";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Neon Productions</title>
        <meta
          name="description"
          content="Newborn, lifestyle, boudoir and corporate photography from Neon Productions"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        className="w-[800px] h-full m-auto object-cover"
        src={peonies}
        alt="A bunch of pink flowers"
      />
      <Slideshow imageList={homeSlideImages} objectFit={true} priority />
      <ContentPadding>
        <main className="desktop:hidden home-your-photographer">
          <Heading variant={HeadingVariant.Subheading}>
            Your Photographer
          </Heading>
          <p>
            Hi there! This is me, your main Photographer, Morgan. But you can
            call me Morgz, or Moo.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Image
              className="object-cover h-[245px] w-[360px]"
              src={morgan4}
              alt=""
              loading="lazy"
            />
            <Image
              className=" object-cover h-[245px] w-[190px]"
              src={morgan1}
              alt=""
              loading="lazy"
            />
            <Image
              className="hidden desktop:block object-cover h-[245px] w-[190px]"
              src={morgan3}
              alt=""
              loading="lazy"
            />
            <Image
              className="object-cover h-[245px] w-[190px]"
              src={morgan2}
              alt=""
              loading="lazy"
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
      </ContentPadding>
    </>
  );
}
