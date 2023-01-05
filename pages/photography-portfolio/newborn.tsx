import ContentPadding from "../../components/content-padding";
import Heading, { HeadingVariant } from "../../components/heading";
import Head from "next/head";
import newbornSlideshow from "../../data/newborn-slideshow.json";
import Slideshow from "../../components/slideshow";

const Newborn = () => {
  return (
    <>
      <Head>
        <title>Newborn Photography - Neon Productions</title>
        <meta
          name="description"
          content="Newborn photography by Neon Photography"
        />
      </Head>
      <ContentPadding>
        <Heading variant={HeadingVariant.PageHeading}>Newborn</Heading>
      </ContentPadding>
      <Slideshow thumbnails={true} imageList={newbornSlideshow} />
    </>
  );
};

export default Newborn;
