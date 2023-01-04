import ContentPadding from "../components/content-padding";
import GoldLine from "../components/gold-line";
import Heading, { HeadingVariant } from "../components/heading";
import { LineVariant, LineDirection } from "../components/gold-line";
import Head from "next/head";

interface Props {
  title: string;
  content: string;
}

const DressHire = ({ title, content }: Props) => {
  return (
    <ContentPadding>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
      </Head>
      <main>
        <Heading variant={HeadingVariant.PageHeading}>Dress Hire</Heading>
        <GoldLine variant={LineVariant.Line1} classes=" mb-8 desktop:mb-16" />
        <div className="grid justify-items-center gap-8 desktop:grid-cols-2">
          <img
            className="col-span-full"
            src="/dress hire/20220613_144947_0000.webp"
            alt="Dress hire examples"
          />
          <img
            src="/dress hire/20220605_112329_0000.webp"
            alt="Dress hire article"
          />
          <img
            src="/dress hire/png_20220613_100701_0000.webp"
            alt="Dress photography shoot special"
          />
        </div>
        <GoldLine
          direction={LineDirection.Horizontal}
          variant={LineVariant.Line2}
          classes="mt-12 desktop:mt-16"
        />
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
        <GoldLine
          direction={LineDirection.Horizontal}
          variant={LineVariant.Line1}
          classes="mt-12"
        />
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
