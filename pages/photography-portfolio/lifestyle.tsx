import ContentPadding from "../../components/content-padding";
import Heading, { HeadingVariant } from "../../components/heading";
import ThumbnailSlideshow from "../../components/slideshow/thumbnail-slideshow";
import Head from "next/head";
import lifestyleSlideshow from "../../data/lifestyle-slideshow.json";

interface Props {
  title: string;
  content: string;
}

const Lifestyle = ({ title, content }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
      </Head>
      <ContentPadding>
        <Heading variant={HeadingVariant.PageHeading}>Lifestyle</Heading>
      </ContentPadding>
      <ThumbnailSlideshow imageList={lifestyleSlideshow} />
    </>
  );
};

export default Lifestyle;
