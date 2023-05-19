import Image from "next/image";
import ContentPadding from "../components/content-padding";
import Heading, { HeadingVariant } from "../components/heading";
import Head from "next/head";

const Contact = () => {
  return (
    <ContentPadding>
      <Head>
        <title>Contact - Neon Productions</title>
        <meta
          name="description"
          content="Contact number and email for Neon Productions"
        />
      </Head>
      <Heading variant={HeadingVariant.PageHeading}>Contact Me</Heading>
      <main className="flex flex-col gap-10 desktop:flex-row desktop:justify-between desktop:gap-0">
        <div>
          <ul className="flex flex-col gap-8 text-md desktop:text-lg">
            <li className="flex gap-4 items-center font-light">
              <Image
                className="hidden tablet:block w-12 h-full"
                src="https://ik.imagekit.io/thewrightdesigns/neon-productions/graphics/Untitled-zdfgbc.png"
                alt="Email address icon"
                width={100}
                height={100}
              />
              <a
                className="hover:desktop:underline"
                href="mailto:morgan@neonproductions.co.za"
              >
                morgan@neonproductions.co.za
              </a>
            </li>
            <li className="flex gap-4 items-center font-light">
              <Image
                className="hidden tablet:block w-12 h-full"
                src="https://ik.imagekit.io/thewrightdesigns/neon-productions/graphics/dxhfg.png"
                alt="Phone number icon"
                width={100}
                height={100}
              />
              <a className="hover:desktop:underline" href="tel:+27827728980">
                +27 82 772 8980
              </a>
            </li>
          </ul>
          <ul className="mt-8 flex gap-8 text-lg font-light desktop:flex-col">
            <li className="flex gap-4 items-center -translate-x-1">
              <a
                className=" desktop:hover:opacity-75"
                href="https://www.instagram.com/neonproductionssa/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="w-[53px] h-full"
                  src="https://ik.imagekit.io/thewrightdesigns/neon-productions/graphics/instagram.png"
                  alt="Instagram logo"
                  width={100}
                  height={100}
                />
              </a>
              <a
                className="hidden desktop:block hover:desktop:underline"
                href="https://www.instagram.com/neonproductionssa/"
                target="_blank"
                rel="noreferrer"
              >
                @neonproductionssa
              </a>
            </li>
            <li className="flex gap-4 items-center">
              <a
                className="desktop:hover:opacity-75"
                href="https://www.facebook.com/neonphotoproductions/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="w-[43px] h-full"
                  src="https://ik.imagekit.io/thewrightdesigns/neon-productions/graphics/Facebook.png"
                  alt="Facebook logo"
                  width={100}
                  height={100}
                />
              </a>
              <a
                className="hidden desktop:block hover:desktop:underline"
                href="https://www.facebook.com/neonphotoproductions/"
                target="_blank"
                rel="noreferrer"
              >
                www.facebook.com/neonphotoproductions
              </a>
            </li>
            <li className="flex gap-4 items-center">
              <a
                className="desktop:hover:opacity-75"
                href="https://za.pinterest.com/neonproductionssa/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="w-12 h-full"
                  src="https://ik.imagekit.io/thewrightdesigns/neon-productions/graphics/Pinterest.png"
                  alt="Pinterest logo"
                  width={100}
                  height={100}
                />
              </a>
              <a
                className="hidden desktop:block hover:desktop:underline"
                href="https://za.pinterest.com/neonproductionssa/"
                target="_blank"
                rel="noreferrer"
              >
                pinterest.com/neonproductionssa
              </a>
            </li>
          </ul>
        </div>
        <picture>
          <source
            srcSet="https://ik.imagekit.io/thewrightdesigns/neon-productions/contact/bts2.jpg?tr=h-500"
            media="(max-width: 500px)"
          />
          <source
            srcSet="https://ik.imagekit.io/thewrightdesigns/neon-productions/contact/bts2.jpg?tr=w-750"
            media="(max-width: 1000px)"
          />
          <img
            src="https://ik.imagekit.io/thewrightdesigns/neon-productions/contact/bts2.jpg?tr=w-350"
            alt="Morgan on location at a photoshoot"
            className="w-[750px] h-[500px] object-cover mt-12 desktop:w-[350px] desktop:h-[370px] -translate-y-12"
          />
        </picture>
      </main>
    </ContentPadding>
  );
};

export default Contact;
