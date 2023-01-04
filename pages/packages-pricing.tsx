import ContentPadding from "../components/content-padding";
import Heading, { HeadingVariant } from "../components/heading";
import GoldLine from "../components/gold-line";
import Head from "next/head";

interface Props {
  title: string;
  content: string;
}

const PackagesPricing = ({ title, content }: Props) => {
  return (
    <main>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
      </Head>
      <ContentPadding>
        <Heading variant={HeadingVariant.PageHeading}>
          Packages & Pricing
        </Heading>
        <GoldLine horizontal line1 classes="mb-8 desktop:mb-16" />
        <div>
          <img
            src="/packages/Newborn Packages 2022.webp"
            alt="Newborn packages from Neon Productions"
          />
          <img
            src="/packages/20220814_133226_0000.webp"
            alt="Family photoshoot packages from Neon Productions"
          />
        </div>
      </ContentPadding>
    </main>
  );
};

export default PackagesPricing;
