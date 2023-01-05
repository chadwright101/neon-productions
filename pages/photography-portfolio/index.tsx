import Button from "../../components/button";
import Collage from "../../components/collage";
import ContentPadding from "../../components/content-padding";
import Heading, { HeadingVariant } from "../../components/heading";
import GoldLine from "../../components/gold-line";
import Head from "next/head";
import photographyPortfolioSlideshow from "../../data/photography-portfolio-slideshow.json";
import photographyPortfolioCollage from "../../data/photography-portfolio-collage.json";
import Slideshow from "../../components/slideshow";

const PhotographyPortfolio = () => {
  return (
    <>
      <Head>
        <title>Photography Portfolio - Neon Productions</title>
        <meta
          name="description"
          content="Photography portfolio from Neon Photography"
        />
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
            priority
          />
        </ContentPadding>
        <Slideshow
          desktopHidden={true}
          imageList={photographyPortfolioSlideshow.newborn}
          priority
        />
        <ContentPadding>
          <Button href="/photography-portfolio/newborn" />
          <GoldLine horizontal line2 width="w-[400px] desktop:w-[1000px]" />

          <Heading variant={HeadingVariant.Subheading}>Lifestyle</Heading>
          <Collage
            classes="hidden desktop:grid"
            imageList={photographyPortfolioCollage.lifestyle}
            lazy={true}
          />
        </ContentPadding>
        <Slideshow
          desktopHidden={true}
          lazy={true}
          imageList={photographyPortfolioSlideshow.lifestyle}
        />
        <ContentPadding>
          <Button href="/photography-portfolio/lifestyle" />
          <GoldLine horizontal line3 width="w-[400px] desktop:w-[1000px]" />
          <Heading variant={HeadingVariant.Subheading}>Boudoir</Heading>
          <Collage
            classes="hidden desktop:grid"
            imageList={photographyPortfolioCollage.boudoir}
            lazy={true}
          />
        </ContentPadding>
        <Slideshow
          desktopHidden={true}
          lazy={true}
          imageList={photographyPortfolioSlideshow.boudoir}
        />
        <ContentPadding>
          <Button href="/photography-portfolio/boudoir" />
          <GoldLine horizontal line1 width="w-[400px] desktop:w-[1000px]" />
          <Heading variant={HeadingVariant.Subheading}>Corporate</Heading>
          <Collage
            classes="hidden desktop:grid"
            imageList={photographyPortfolioCollage.corporate}
            lazy={true}
          />
        </ContentPadding>
        <Slideshow
          desktopHidden={true}
          lazy={true}
          imageList={photographyPortfolioSlideshow.corporate}
        />
        <ContentPadding>
          <Button href="/photography-portfolio/corporate" />
        </ContentPadding>
      </main>
    </>
  );
};

export default PhotographyPortfolio;
