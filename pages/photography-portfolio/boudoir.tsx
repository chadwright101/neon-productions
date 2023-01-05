import ContentPadding from "../../components/content-padding";
import Heading, { HeadingVariant } from "../../components/heading";
import Head from "next/head";
import testImages from "../../data/images2.js";
import Slideshow from "../../components/slideshow";

const Boudoir = () => {
  return (
    <>
      <Head>
        <title>Boudoir Photography - Neon Productions</title>
        <meta
          name="description"
          content="Boudoir photography by Neon Photography"
        />
      </Head>
      <ContentPadding>
        <Heading variant={HeadingVariant.PageHeading}>Boudoir</Heading>
      </ContentPadding>
      <Slideshow thumbnails={true} imageList={testImages} />
    </>
  );
};

export default Boudoir;
