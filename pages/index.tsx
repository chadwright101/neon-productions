import Image from "next/image";
import Head from "next/head";
import ContentPadding from "../components/content-padding";
import Heading, { HeadingVariant } from "../components/heading";
import homeSlideImages from "../data/home-slideshow.json";
import Slideshow from "../components/slideshow";

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
      <picture>
        <source
          srcSet="/images/general/peonies-background-tumblr-7.webp?tr=w-500"
          media="(max-width: 500px)"
        />
        <img
          src="/images/general/peonies-background-tumblr-7.webp?tr=w-800"
          className="w-[800px] h-full m-auto object-cover"
          alt="A bunch of pink flowers"
        />
      </picture>
      <Image
        src="/images/best-of-joburg/Winner_BOJ_Horizontal_2024.png"
        alt="Neon Productions - Best of Joburg winner 2024"
        width={1000}
        height={300}
        className="w-full px-10 max-w-[1000px] mx-auto mt-5 mb-10 animate-pulse"
      />
      <Slideshow imageList={homeSlideImages} objectFit={true} />
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
              src="/images/your-photographer/morgan4.webp"
              alt=""
              loading="lazy"
              width={400}
              height={300}
            />
            <Image
              className=" object-cover h-[245px] w-[190px]"
              src="/images/your-photographer/morgan1.webp"
              alt=""
              loading="lazy"
              width={400}
              height={300}
            />
            <Image
              className="hidden desktop:block object-cover h-[245px] w-[190px]"
              src="/images/your-photographer/morgan3.webp"
              alt=""
              loading="lazy"
              width={400}
              height={300}
            />
            <Image
              className="object-cover h-[245px] w-[190px]"
              src="/images/your-photographer/morgan2.webp"
              alt=""
              loading="lazy"
              width={400}
              height={300}
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
