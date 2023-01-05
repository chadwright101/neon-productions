import Image from "next/image";
import ContentPadding from "../components/content-padding";
import Heading, { HeadingVariant } from "../components/heading";
import GoldLine from "../components/gold-line";
import Head from "next/head";
import package1 from "../public/packages/Newborn Packages 2022.webp";
import package2 from "../public/packages/20220814_133226_0000.webp";

interface Props {
  title: string;
  content: string;
}

const PackagesPricing = ({ title, content }: Props) => {
  return (
    <main>
      <Head>
        <title>Packages & Pricing - Neon Productions </title>
        <meta
          name="description"
          content="Packages and pricing from Neon Productions"
        />
      </Head>
      <ContentPadding>
        <Heading variant={HeadingVariant.PageHeading}>
          Packages & Pricing
        </Heading>
        <GoldLine horizontal line1 classes="mb-8 desktop:mb-16" />
        <div>
          <Image src={package1} alt="Newborn packages from Neon Productions" />
          <Image
            src={package2}
            alt="Family photoshoot packages from Neon Productions"
          />
        </div>
      </ContentPadding>
    </main>
  );
};

export default PackagesPricing;
