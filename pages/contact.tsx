import Image from "next/image";
import ContentPadding from "../components/content-padding";
import Heading, { HeadingVariant } from "../components/heading";
import Head from "next/head";
import instagramIcon from "../public/graphics/instagram.png";
import facebookIcon from "../public/graphics/Facebook.png";
import pinterestIcon from "../public/graphics/Pinterest.png";
import emailIcon from "../public/graphics/Untitled-zdfgbc.png";
import phoneIcon from "../public/graphics/dxhfg.png";
import morgan from "../public/contact/bts (2).jpg";

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
                className="w-12 h-full"
                src={emailIcon}
                alt="Email address icon"
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
                className="w-12 h-full"
                src={phoneIcon}
                alt="Phone number icon"
              />
              <a className="hover:desktop:underline" href="tel:+27827728980">
                +27 82 772 8980
              </a>
            </li>
          </ul>
          <ul className="mt-8 flex gap-8 text-lg font-light desktop:flex-col">
            <li className="flex gap-4 items-center">
              <a
                className="desktop:hover:opacity-75"
                href="https://www.instagram.com/neonproductionssa/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="w-12 h-full"
                  src={instagramIcon}
                  alt="Instagram logo"
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
                  className="w-12 h-full"
                  src={facebookIcon}
                  alt="Facebook logo"
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
                  src={pinterestIcon}
                  alt="Pinterest logo"
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

        <Image
          className="w-[750px] h-[700px] object-cover mt-12 desktop:w-[350px] desktop:h-[370px] -translate-y-12"
          src={morgan}
          alt="Morgan on location at a photoshoot"
        />
      </main>
    </ContentPadding>
  );
};

export default Contact;
