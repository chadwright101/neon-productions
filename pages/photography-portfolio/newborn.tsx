import ContentPadding from "../../components/content-padding";
import Heading, { HeadingVariant } from "../../components/heading";
import ThumbnailSlideshow from "../../components/slideshow/thumbnail-slideshow";
import Head from "next/head";

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
      <ThumbnailSlideshow
        imageList={[
          {
            src: "/portfolio/newborn/page/newborn-page-1.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-2.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-3.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-4.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-5.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-6.webp",
            alt: "Newborn photography from Neon Productions",
          },

          {
            src: "/portfolio/newborn/page/newborn-page-8.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-9.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-10.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-11.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-12.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-13.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-14.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-15.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-16.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-17.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-18.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-19.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-20.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-21.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-22.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-23.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-24.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-25.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-26.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-27.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-28.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-29.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-30.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-31.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-32.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-33.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-34.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-35.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-36.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-37.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-38.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-39.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-40.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-41.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-42.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-43.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-44.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-45.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-46.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-47.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-48.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-49.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-50.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-51.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-52.webp",
            alt: "Newborn photography from Neon Productions",
          },
          {
            src: "/portfolio/newborn/page/newborn-page-53.webp",
            alt: "Newborn photography from Neon Productions",
          },
        ]}
      />
    </>
  );
};

export default Newborn;
