import ContentPadding from "../../components/content-padding";
import Heading, { HeadingVariant } from "../../components/heading";
import ThumbnailSlideshow from "../../components/slideshow/thumbnail-slideshow";
import Head from "next/head";

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
      <ThumbnailSlideshow
        imageList={[
          {
            src: "/portfolio/corporate/page/corporate-page-1.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-2.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-3.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-4.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-5.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-6.webp",
            alt: "Corporate photography from Neon Productions",
          },

          {
            src: "/portfolio/corporate/page/corporate-page-8.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-9.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-10.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-11.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-12.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-13.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-14.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-15.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-16.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-17.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-18.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-19.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-20.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-21.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-22.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-23.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-24.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-25.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-26.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-27.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-28.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-29.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-30.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-31.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-32.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-33.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-34.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-35.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-36.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-37.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-38.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-39.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-40.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-41.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-42.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-43.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-44.webp",
            alt: "Corporate photography from Neon Productions",
          },
          {
            src: "/portfolio/corporate/page/corporate-page-45.webp",
            alt: "Corporate photography from Neon Productions",
          },
        ]}
      />
    </>
  );
};

export default Corporate;
