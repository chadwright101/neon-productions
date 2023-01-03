import Button, { ButtonVariants } from "../../components/button";
import Collage from "../../components/collage";
import ContentPadding from "../../components/content-padding";
import Heading, { HeadingVariant } from "../../components/heading";
import BasicSlideshow from "../../components/slideshow/basic-slideshow";
import GoldLine, {
  LineVariant,
  LineDirection,
} from "../../components/gold-line";
import Head from "next/head";

interface Props {
  title: string;
  content: string;
}

const PhotographyPortfolio = ({ title, content }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
      </Head>
      <main>
        <ContentPadding>
          <Heading variant={HeadingVariant.PageHeading}>
            Photography Portfolio
          </Heading>
          <GoldLine
            direction={LineDirection.Horizontal}
            variant={LineVariant.Line1}
            width="w-[250px]"
          />

          <Heading variant={HeadingVariant.Subheading}>Newborn</Heading>
          <Collage
            classes="hidden desktop:grid"
            imageList={[
              {
                src: "/portfolio/newborn/newborn6.webp",
                alt: "Newborn photography from Neon Productions",
                classes: "collage-1",
              },
              {
                src: "/portfolio/newborn/newborn3.webp",
                alt: "Newborn photography from Neon Productions",
                classes: "collage-3",
              },
              {
                src: "/portfolio/newborn/newborn5.webp",
                alt: "Newborn photography from Neon Productions",
                classes: "collage-4",
              },
              {
                src: "/portfolio/newborn/newborn1.webp",
                alt: "Newborn photography from Neon Productions",
                classes: "collage-2",
              },
              {
                src: "/portfolio/newborn/newborn2.webp",
                alt: "Newborn photography from Neon Productions",
                classes: "collage-5",
              },
              {
                src: "/portfolio/newborn/newborn7.webp",
                alt: "Newborn photography from Neon Productions",
                classes: "collage-6",
              },
              {
                src: "/portfolio/newborn/newborn4.webp",
                alt: "Newborn photography from Neon Productions",
                classes: "collage-7",
              },
            ]}
          />
        </ContentPadding>
        <BasicSlideshow
          delay={3200}
          objectContain={true}
          classes="desktop:hidden"
          imageList={[
            {
              src: "/portfolio/newborn/slideshow/newborn-portfolio-slideshow-1.webp",
              alt: "Newborn photography from Neon Productions",
            },
            {
              src: "/portfolio/newborn/slideshow/newborn-portfolio-slideshow-2.webp",
              alt: "Newborn photography from Neon Productions",
            },
            {
              src: "/portfolio/newborn/slideshow/newborn-portfolio-slideshow-3.webp",
              alt: "Newborn photography from Neon Productions",
            },
            {
              src: "/portfolio/newborn/slideshow/newborn-portfolio-slideshow-4.webp",
              alt: "Newborn photography from Neon Productions",
            },
            {
              src: "/portfolio/newborn/slideshow/newborn-portfolio-slideshow-5.webp",
              alt: "Newborn photography from Neon Productions",
            },
            {
              src: "/portfolio/newborn/slideshow/newborn-portfolio-slideshow-6.webp",
              alt: "Newborn photography from Neon Productions",
            },
          ]}
        />
        <ContentPadding>
          <Button
            href="/photography-portfolio/newborn"
            variant={ButtonVariants.Basic}
          />
          <GoldLine
            direction={LineDirection.Horizontal}
            variant={LineVariant.Line2}
            width="w-[400px] desktop:w-[1000px]"
          />

          <Heading variant={HeadingVariant.Subheading}>Lifestyle</Heading>
          <Collage
            classes="hidden desktop:grid"
            imageList={[
              {
                src: "/portfolio/lifestyle/lifestyle2.webp",
                alt: "Lifestyle photography from Neon Productions",
                classes: "collage-1",
              },
              {
                src: "/portfolio/lifestyle/lifestyle4.webp",
                alt: "Lifestyle photography from Neon Productions",
                classes: "collage-2",
              },
              {
                src: "/portfolio/lifestyle/lifestyle3.webp",
                alt: "Lifestyle photography from Neon Productions",
                classes: "collage-3",
              },
              {
                src: "/portfolio/lifestyle/lifestyle1.webp",
                alt: "Lifestyle photography from Neon Productions",
                classes: "collage-4",
              },
              {
                src: "/portfolio/lifestyle/lifestyle6.webp",
                alt: "Lifestyle photography from Neon Productions",
                classes: "collage-5",
              },
              {
                src: "/portfolio/lifestyle/lifestyle7.webp",
                alt: "Lifestyle photography from Neon Productions",
                classes: "collage-6",
              },
              {
                src: "/portfolio/lifestyle/lifestyle5.webp",
                alt: "Lifestyle photography from Neon Productions",
                classes: "collage-7",
              },
            ]}
          />
        </ContentPadding>
        <BasicSlideshow
          delay={3250}
          objectContain={true}
          classes="desktop:hidden"
          lazy={true}
          imageList={[
            {
              src: "/portfolio/lifestyle/slideshow/lifestyle-portfolio-slideshow-1.webp",
              alt: "Lifestyle photography from Neon Productions",
            },
            {
              src: "/portfolio/lifestyle/slideshow/lifestyle-portfolio-slideshow-2.webp",
              alt: "Lifestyle photography from Neon Productions",
            },
            {
              src: "/portfolio/lifestyle/slideshow/lifestyle-portfolio-slideshow-3.webp",
              alt: "Lifestyle photography from Neon Productions",
            },
            {
              src: "/portfolio/lifestyle/slideshow/lifestyle-portfolio-slideshow-4.webp",
              alt: "Lifestyle photography from Neon Productions",
            },
            {
              src: "/portfolio/lifestyle/slideshow/lifestyle-portfolio-slideshow-5.webp",
              alt: "Lifestyle photography from Neon Productions",
            },
            {
              src: "/portfolio/lifestyle/slideshow/lifestyle-portfolio-slideshow-6.webp",
              alt: "Lifestyle photography from Neon Productions",
            },
            {
              src: "/portfolio/lifestyle/slideshow/lifestyle-portfolio-slideshow-7.webp",
              alt: "Lifestyle photography from Neon Productions",
            },
          ]}
        />
        <ContentPadding>
          <Button
            href="/photography-portfolio/lifestyle"
            variant={ButtonVariants.Basic}
          />
          <GoldLine
            direction={LineDirection.Horizontal}
            variant={LineVariant.Line3}
            width="w-[400px] desktop:w-[1000px]"
          />
          <Heading variant={HeadingVariant.Subheading}>Boudoir</Heading>
          <Collage
            classes="hidden desktop:grid"
            imageList={[
              {
                src: "/portfolio/boudoir/boudoir-6.webp",
                alt: "Boudoir photography from Neon Productions",
                classes: "collage-1",
              },
              {
                src: "/portfolio/boudoir/boudoir-7.webp",
                alt: "Boudoir photography from Neon Productions",
                classes: "collage-2",
              },
              {
                src: "/portfolio/boudoir/boudoir-1.webp",
                alt: "Boudoir photography from Neon Productions",
                classes: "collage-3",
              },
              {
                src: "/portfolio/boudoir/boudoir-2.webp",
                alt: "Boudoir photography from Neon Productions",
                classes: "collage-4",
              },
              {
                src: "/portfolio/boudoir/boudoir-3.webp",
                alt: "Boudoir photography from Neon Productions",
                classes: "collage-5",
              },
              {
                src: "/portfolio/boudoir/boudoir-5.webp",
                alt: "Boudoir photography from Neon Productions",
                classes: "collage-6",
              },
              {
                src: "/portfolio/boudoir/boudoir-4.webp",
                alt: "Boudoir photography from Neon Productions",
                classes: "collage-7",
              },
            ]}
          />
        </ContentPadding>
        <BasicSlideshow
          delay={3350}
          objectContain={true}
          classes="desktop:hidden"
          lazy={true}
          imageList={[
            {
              src: "/portfolio/boudoir/slideshow/boudoir-portfolio-slideshow-1.webp",
              alt: "Boudoir photography from Neon Productions",
            },
            {
              src: "/portfolio/boudoir/slideshow/boudoir-portfolio-slideshow-2.webp",
              alt: "Boudoir photography from Neon Productions",
            },
            {
              src: "/portfolio/boudoir/slideshow/boudoir-portfolio-slideshow-3.webp",
              alt: "Boudoir photography from Neon Productions",
            },
            {
              src: "/portfolio/boudoir/slideshow/boudoir-portfolio-slideshow-4.webp",
              alt: "Boudoir photography from Neon Productions",
            },
            {
              src: "/portfolio/boudoir/slideshow/boudoir-portfolio-slideshow-5.webp",
              alt: "Boudoir photography from Neon Productions",
            },
          ]}
        />
        <ContentPadding>
          <Button
            href="/photography-portfolio/boudoir"
            variant={ButtonVariants.Basic}
          />
          <GoldLine
            direction={LineDirection.Horizontal}
            variant={LineVariant.Line1}
            width="w-[400px] desktop:w-[1000px]"
          />
          <Heading variant={HeadingVariant.Subheading}>Corporate</Heading>
          <Collage
            classes="hidden desktop:grid"
            imageList={[
              {
                src: "/portfolio/corporate/corporate-5.webp",
                alt: "Corporate photography from Neon Productions",
                classes: "collage-1",
              },
              {
                src: "/portfolio/corporate/corporate-7.webp",
                alt: "Corporate photography from Neon Productions",
                classes: "collage-2",
              },
              {
                src: "/portfolio/corporate/corporate-2.webp",
                alt: "Corporate photography from Neon Productions",
                classes: "collage-3",
              },
              {
                src: "/portfolio/corporate/corporate-6.webp",
                alt: "Corporate photography from Neon Productions",
                classes: "collage-4",
              },
              {
                src: "/portfolio/corporate/corporate-1.webp",
                alt: "Corporate photography from Neon Productions",
                classes: "collage-5",
              },
              {
                src: "/portfolio/corporate/corporate-3.webp",
                alt: "Corporate photography from Neon Productions",
                classes: "collage-6",
              },
              {
                src: "/portfolio/corporate/corporate-4.webp",
                alt: "Corporate photography from Neon Productions",
                classes: "collage-7",
              },
            ]}
          />
        </ContentPadding>
        <BasicSlideshow
          delay={3400}
          objectContain={true}
          classes="desktop:hidden"
          lazy={true}
          imageList={[
            {
              src: "/portfolio/corporate/slideshow/corporate-portfolio-slideshow-1.webp",
              alt: "Corporate photography from Neon Productions",
            },
            {
              src: "/portfolio/corporate/slideshow/corporate-portfolio-slideshow-2.webp",
              alt: "Corporate photography from Neon Productions",
            },
            {
              src: "/portfolio/corporate/slideshow/corporate-portfolio-slideshow-3.webp",
              alt: "Corporate photography from Neon Productions",
            },
            {
              src: "/portfolio/corporate/slideshow/corporate-portfolio-slideshow-4.webp",
              alt: "Corporate photography from Neon Productions",
            },
            {
              src: "/portfolio/corporate/slideshow/corporate-portfolio-slideshow-5.webp",
              alt: "Corporate photography from Neon Productions",
            },
          ]}
        />
        <ContentPadding>
          <Button
            href="/photography-portfolio/corporate"
            variant={ButtonVariants.Basic}
          />
          <GoldLine
            direction={LineDirection.Horizontal}
            variant={LineVariant.Line2}
            width="w-[400px] desktop:w-[1000px]"
          />
        </ContentPadding>
      </main>
    </>
  );
};

export default PhotographyPortfolio;
