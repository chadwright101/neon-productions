import ContentPadding from "../components/content-padding";
import Heading, { HeadingVariant } from "../components/heading";
import GoldLine from "../components/gold-line";
import Head from "next/head";
import packagesImages from "../data/packages-images.json";

const PackagesPricing = () => {
  return (
    <main>
      <Head>
        <title>Packages - Neon Productions </title>
        <meta name="description" content="Packages from Neon Productions" />
      </Head>
      <ContentPadding>
        <Heading variant={HeadingVariant.PageHeading}>Packages</Heading>
        <GoldLine horizontal line1 classes="mb-8 desktop:mb-16" />
        <div className="flex flex-col gap-8">
          {packagesImages.map(({ src }, index) => (
            <picture key={index}>
              <source srcSet={`${src}?tr=w-440`} media="(max-width: 500px)" />
              <source srcSet={`${src}?tr=w-690`} media="(max-width: 750px)" />
              <img
                src={`${src}?tr=w-1000`}
                alt="Packages and pricing from Neon Productions"
                loading={index < 2 ? "eager" : "lazy"}
              />
            </picture>
          ))}
        </div>
      </ContentPadding>
    </main>
  );
};

export default PackagesPricing;
