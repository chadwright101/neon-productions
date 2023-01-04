import Button, { ButtonVariants } from "../../components/button";
import Collage from "../../components/collage";
import ContentPadding from "../../components/content-padding";
import Heading, { HeadingVariant } from "../../components/heading";
import GoldLine from "../../components/gold-line";
import Head from "next/head";
import photographyPortfolioSlideshow from "../../data/photography-portfolio-slideshow.json";
import photographyPortfolioCollage from "../../data/photography-portfolio-collage.json";
import Slideshow from "../../components/slideshow";

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
          <GoldLine horizontal line1 width="w-[250px]" />

          <Heading variant={HeadingVariant.Subheading}>Newborn</Heading>
          <Collage
            classes="hidden desktop:grid"
            imageList={photographyPortfolioCollage.newborn}
          />
        </ContentPadding>
        <Slideshow
          classes={true}
          imageList={photographyPortfolioSlideshow.newborn}
        />
        <ContentPadding>
          <Button
            href="/photography-portfolio/newborn"
            variant={ButtonVariants.Basic}
          />
          <GoldLine horizontal line2 width="w-[400px] desktop:w-[1000px]" />

          <Heading variant={HeadingVariant.Subheading}>Lifestyle</Heading>
          <Collage
            classes="hidden desktop:grid"
            imageList={photographyPortfolioCollage.lifestyle}
          />
        </ContentPadding>
        <Slideshow
          classes={true}
          lazy={true}
          imageList={photographyPortfolioSlideshow.lifestyle}
        />
        <ContentPadding>
          <Button
            href="/photography-portfolio/lifestyle"
            variant={ButtonVariants.Basic}
          />
          <GoldLine horizontal line3 width="w-[400px] desktop:w-[1000px]" />
          <Heading variant={HeadingVariant.Subheading}>Boudoir</Heading>
          <Collage
            classes="hidden desktop:grid"
            imageList={photographyPortfolioCollage.boudoir}
          />
        </ContentPadding>
        <Slideshow
          classes={true}
          lazy={true}
          imageList={photographyPortfolioSlideshow.boudoir}
        />
        <ContentPadding>
          <Button
            href="/photography-portfolio/boudoir"
            variant={ButtonVariants.Basic}
          />
          <GoldLine horizontal line1 width="w-[400px] desktop:w-[1000px]" />
          <Heading variant={HeadingVariant.Subheading}>Corporate</Heading>
          <Collage
            classes="hidden desktop:grid"
            imageList={photographyPortfolioCollage.corporate}
          />
        </ContentPadding>
        <Slideshow
          classes={true}
          lazy={true}
          imageList={photographyPortfolioSlideshow.corporate}
        />
        <ContentPadding>
          <Button
            href="/photography-portfolio/corporate"
            variant={ButtonVariants.Basic}
          />
          <GoldLine horizontal line2 width="w-[400px] desktop:w-[1000px]" />
        </ContentPadding>
      </main>
    </>
  );
};

export default PhotographyPortfolio;
