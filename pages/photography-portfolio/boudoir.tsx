import ContentPadding from "../../components/content-padding";
import Heading, { HeadingVariant } from "../../components/heading";
import Head from "next/head";
import boudoirSlideshow from "../../data/boudoir-slideshow.json";
import Slideshow from "../../components/slideshow";

interface Props {
  title: string;
  content: string;
}

const Boudoir = ({ content, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
      </Head>
      <ContentPadding>
        <Heading variant={HeadingVariant.PageHeading}>Boudoir</Heading>
      </ContentPadding>
      <Slideshow thumbnails={true} imageList={boudoirSlideshow} />
    </>
  );
};

export default Boudoir;
