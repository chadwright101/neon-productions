import ContentPadding from "../../components/content-padding";
import Heading, { HeadingVariant } from "../../components/heading";
import ThumbnailSlideshow from "../../components/slideshow/thumbnail-slideshow";
import Head from "next/head";
import corporateSlideshow from "../../data/corporate-slideshow.json";

interface Props {
  title: string;
  content: string;
}

const Corporate = ({ title, content }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
      </Head>
      <ContentPadding>
        <Heading variant={HeadingVariant.PageHeading}>Corporate</Heading>
      </ContentPadding>
      <ThumbnailSlideshow imageList={corporateSlideshow} />
    </>
  );
};

export default Corporate;
