import ContentPadding from "../components/content-padding";
import Heading, { HeadingVariant } from "../components/heading";
import Head from "next/head";

interface Props {
  title: string;
  content: string;
}

const Contact = ({ title, content }: Props) => {
  return (
    <ContentPadding>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
      </Head>
      <Heading variant={HeadingVariant.PageHeading}>Contact Me</Heading>
      <main className="flex flex-col gap-10 desktop:flex-row desktop:justify-between desktop:gap-0">
        <div>
          <ul className="flex flex-col gap-8 text-md desktop:text-lg">
            <li className="flex gap-4 items-center font-light">
              <img
                className="w-12 h-full"
                src="/graphics/Untitled-zdfgbc.webp"
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
              <img
                className="w-12 h-full"
                src="/graphics/dxhfg.webp"
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
                <img
                  className="w-12 h-full"
                  src="/graphics/instagram.webp"
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
                <img
                  className="w-12 h-full"
                  src="/graphics/Facebook.webp"
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
                <img
                  className="w-12 h-full"
                  src="/graphics/Pinterest.webp"
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

        <img
          className="w-[750px] h-[700px] object-cover mt-12 desktop:w-[350px] desktop:h-[370px] -translate-y-12"
          src="/contact/bts (2).webp"
          alt="Morgan on location at a photoshoot"
        />
      </main>
    </ContentPadding>
  );
};

export default Contact;
