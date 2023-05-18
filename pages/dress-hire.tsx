import Image from "next/image";
import ContentPadding from "../components/content-padding";
import GoldLine from "../components/gold-line";
import Heading, { HeadingVariant } from "../components/heading";
import Head from "next/head";

const DressHire = () => {
  return (
    <ContentPadding>
      <Head>
        <title>Dress Hire - Neon Productions</title>
        <meta
          name="description"
          content="Dress hire options from Neon Productions"
        />
      </Head>
      <main>
        <Heading variant={HeadingVariant.PageHeading}>Dress Hire</Heading>
        <GoldLine horizontal line1 classes=" mb-8 desktop:mb-16" />
        <div className="grid justify-items-center gap-8 desktop:grid-cols-2">
          <Image
            className="col-span-full"
            src="https://ik.imagekit.io/thewrightdesigns/neon-productions/dress hire/20220613_144947_0000.jpg"
            alt="Dress hire examples"
            priority
            width={1200}
            height={1500}
          />
          <Image
            loading="lazy"
            src="https://ik.imagekit.io/thewrightdesigns/neon-productions/dress hire/png_20220613_100701_0000.jpg"
            alt="Dress hire article"
            width={1200}
            height={1500}
          />
          <Image
            loading="lazy"
            src="https://ik.imagekit.io/thewrightdesigns/neon-productions/dress hire/20220605_112329_0000.jpg"
            alt="Dress photography shoot special"
            width={1200}
            height={1500}
          />
        </div>
        <GoldLine horizontal line2 classes="mt-12 desktop:mt-16" />
      </main>
      <article>
        <Heading variant={HeadingVariant.Subheading}>Catalogues</Heading>
        <ul className="list-disc ml-4 flex flex-col gap-4 desktop:gap-0">
          {catalogueList.map((item, index) => (
            <li key={index}>
              <a
                className="py-2 text-blue desktop:hover:underline"
                href={`/dress hire/catalogues/Neon Dress Catalogue Size ${item.size}.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                Neon Dress Catalogue Size {item.size}
              </a>
            </li>
          ))}
        </ul>
        <GoldLine horizontal line3 classes="mt-12" />
      </article>
    </ContentPadding>
  );
};

const catalogueList = [
  {
    size: 6,
  },
  {
    size: 8,
  },
  {
    size: 10,
  },
  {
    size: 12,
  },
  {
    size: 14,
  },
  {
    size: 16,
  },
];

export default DressHire;
