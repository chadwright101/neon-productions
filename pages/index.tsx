import Head from "next/head";
import ContentPadding from "../components/content-padding";
import Heading, { HeadingVariant } from "../components/heading";
import BasicSlideshow from "../components/slideshow/basic-slideshow";

interface Props {
  title: string;
  content: string;
}

export default function Home({ title, content }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img
        className="w-[800px] h-full m-auto object-cover"
        src="/general/peonies-background-tumblr-7.webp"
        alt="A bunch of pink flowers"
      />
      <BasicSlideshow
        imageList={[
          {
            src: "/home page/home-slideshow1.webp",
            alt: "Neon Productions photography",
          },
          {
            src: "/home page/home-slideshow2.webp",
            alt: "Neon Productions photography",
          },
          {
            src: "/home page/home-slideshow3.webp",
            alt: "Neon Productions photography",
          },
          {
            src: "/home page/home-slideshow4.webp",
            alt: "Neon Productions photography",
          },
          {
            src: "/home page/home-slideshow5.webp",
            alt: "Neon Productions photography",
          },
          {
            src: "/home page/home-slideshow16.webp",
            alt: "Neon Productions photography",
          },
          {
            src: "/home page/home-slideshow7.webp",
            alt: "Neon Productions photography",
          },
          {
            src: "/home page/home-slideshow8.webp",
            alt: "Neon Productions photography",
          },
          {
            src: "/home page/home-slideshow9.webp",
            alt: "Neon Productions photography",
          },
          {
            src: "/home page/home-slideshow10.webp",
            alt: "Neon Productions photography",
          },
          {
            src: "/home page/home-slideshow11.webp",
            alt: "Neon Productions photography",
          },
          {
            src: "/home page/home-slideshow13.webp",
            alt: "Neon Productions photography",
          },
          {
            src: "/home page/home-slideshow14.webp",
            alt: "Neon Productions photography",
          },
          {
            src: "/home page/home-slideshow15.webp",
            alt: "Neon Productions photography",
          },
          {
            src: "/home page/home-slideshow16.webp",
            alt: "Neon Productions photography",
          },
          {
            src: "/home page/home-slideshow17.webp",
            alt: "Neon Productions photography",
          },
        ]}
      />
      <ContentPadding>
        <main className="desktop:hidden">
          <Heading variant={HeadingVariant.Subheading}>
            Your Photographer
          </Heading>
          <p className="text-center">
            Hi there! This is me, your main Photographer, Morgan. But you can
            call me Morgz, or Moo.
            <br />
            <br />
            <div className="flex flex-wrap gap-4 justify-center">
              <img
                className="object-cover h-[245px] w-[360px]"
                src="/your-photographer/morgan4.webp"
                alt=""
                loading="lazy"
              />
              <img
                className=" object-cover h-[245px] w-[190px]"
                src="/your-photographer/morgan1.webp"
                alt=""
                loading="lazy"
              />
              <img
                className="hidden desktop:block object-cover h-[245px] w-[190px]"
                src="/your-photographer/morgan3.webp"
                alt=""
                loading="lazy"
              />
              <img
                className="object-cover h-[245px] w-[190px]"
                src="/your-photographer/morgan2.webp"
                alt=""
                loading="lazy"
              />
            </div>
            <br />
            I am a mom of 2 amazing, smart loving boys, Jax and Xav, and my
            biggest fan and supporter is my hubby Ruan who also sometimes jumps
            behind the camera for me. I am an animal and plant lover with 2
            degrees and my family is my world.
            <br />
            <br />I without a doubt have the best job in the world, seeing
            people smile and loving their photos is what keeps me going! I
            started my photography journey in 2011 with advertising and product
            photography, and then ventured into the wedding world in 2013, when
            I opened Neon. What a journey that became!
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
            <br />I am a self taught photographer, I have done a few courses
            over the years and I am always learning to give my very best each
            time. My amazing team including, Ruan, Lexi and Shelby help me on
            this awesome adventure and I just cannot thank them enough!
            <br />
            <br />I can't wait to see you in front of my lens very very soon!
            <br />
            <br />
            Love Morgan, Morgz, Moo
          </p>
        </main>
      </ContentPadding>
    </>
  );
}
