import ContentPadding from "../../components/content-padding";
import Heading, { HeadingVariant } from "../../components/heading";
import Head from "next/head";
import lifestyleSlideshow from "../../data/lifestyle-slideshow.json";
import Slideshow from "../../components/slideshow";

const Lifestyle = () => {
  return (
    <>
      <Head>
        <title>Lifestyle Photography - Neon Productions</title>
        <meta
          name="description"
          content="Lifestyle photography by Neon Photography"
        />
      </Head>
      <ContentPadding>
        <Heading variant={HeadingVariant.PageHeading}>Lifestyle</Heading>
      </ContentPadding>
      <Slideshow thumbnails={true} imageList={lifestyleSlideshow} priority />
    </>
  );
};

export default Lifestyle;
