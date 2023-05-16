import Image from "next/image";
import ContentPadding from "../components/content-padding";
import Heading, { HeadingVariant } from "../components/heading";
import GoldLine from "../components/gold-line";
import Head from "next/head";
import packagesImages from "../data/packages-images.json";

const PackagesPricing = () => {
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
        <div className="flex flex-col gap-8">
          {packagesImages.map((item, index) => (
            <Image
              key={index}
              src={item.src}
              alt="Packages and pricing from Neon Productions"
              loading={index < 2 ? "eager" : "lazy"}
              width={1000}
              height={800}
              quality={50}
            />
          ))}
        </div>
      </ContentPadding>
    </main>
  );
};

export default PackagesPricing;
