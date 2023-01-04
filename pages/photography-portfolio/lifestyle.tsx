import ContentPadding from "../../components/content-padding";
import Heading, { HeadingVariant } from "../../components/heading";
import Head from "next/head";
import lifestyleSlideshow from "../../data/lifestyle-slideshow.json";
import Slideshow from "../../components/slideshow";

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
      <Slideshow thumbnails={true} imageList={lifestyleSlideshow} />
    </>
  );
};

export default Lifestyle;
