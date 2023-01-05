import ContentPadding from "../../components/content-padding";
import Heading, { HeadingVariant } from "../../components/heading";
import Head from "next/head";
import corporateSlideshow from "../../data/corporate-slideshow.json";
import Slideshow from "../../components/slideshow";

interface Props {
  title: string;
  content: string;
}

const Corporate = ({ title, content }: Props) => {
  return (
    <>
      <Head>
        <title>Corporate Photography - Neon Productions</title>
        <meta
          name="description"
          content="Corporate photography by Neon Photography"
        />
      </Head>
      <ContentPadding>
        <Heading variant={HeadingVariant.PageHeading}>Corporate</Heading>
      </ContentPadding>
      <Slideshow thumbnails={true} imageList={corporateSlideshow} />
    </>
  );
};

export default Corporate;
