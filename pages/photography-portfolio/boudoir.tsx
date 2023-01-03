import ContentPadding from "../../components/content-padding";
import Heading, { HeadingVariant } from "../../components/heading";
import ThumbnailSlideshow from "../../components/slideshow/thumbnail-slideshow";
import Head from "next/head";

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
      <ThumbnailSlideshow
        imageList={[
          {
            src: "/portfolio/boudoir/page/boudoir-page-1.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-2.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-3.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-4.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-5.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-6.webp",
            alt: "Boudoir photography from Neon Productions",
          },

          {
            src: "/portfolio/boudoir/page/boudoir-page-8.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-9.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-10.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-11.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-12.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-13.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-14.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-15.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-16.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-17.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-18.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-19.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-20.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-21.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-22.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-23.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-24.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-25.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-26.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-27.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-28.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-29.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-30.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-31.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-32.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-33.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-34.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-35.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-36.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-37.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-38.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-39.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-40.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-41.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-42.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-43.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-44.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-45.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-46.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-47.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-48.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-49.webp",
            alt: "Boudoir photography from Neon Productions",
          },
          {
            src: "/portfolio/boudoir/page/boudoir-page-50.webp",
            alt: "Boudoir photography from Neon Productions",
          },
        ]}
      />
    </>
  );
};

export default Boudoir;
