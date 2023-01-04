import ContentPadding from "../../components/content-padding";
import Heading, { HeadingVariant } from "../../components/heading";
import ThumbnailSlideshow from "../../components/slideshow/thumbnail-slideshow";
import Head from "next/head";
import newbornSlideshow from "../../data/newborn-slideshow.json";

interface Props {
  title: string;
  content: string;
}

const Newborn = ({ title, content }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
      </Head>
      <ContentPadding>
        <Heading variant={HeadingVariant.PageHeading}>Newborn</Heading>
      </ContentPadding>
      <ThumbnailSlideshow imageList={newbornSlideshow} />
    </>
  );
};

export default Newborn;
