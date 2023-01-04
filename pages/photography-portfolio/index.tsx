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
import photographyPortfolioSlideshow from "../../data/photography-portfolio-slideshow.json";
import photographyPortfolioCollage from "../../data/photography-portfolio-collage.json";

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
            imageList={photographyPortfolioCollage.newborn}
          />
        </ContentPadding>
        <BasicSlideshow
          delay={3200}
          objectContain={true}
          classes="desktop:hidden"
          imageList={photographyPortfolioSlideshow.newborn}
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
            imageList={photographyPortfolioCollage.lifestyle}
          />
        </ContentPadding>
        <BasicSlideshow
          delay={3250}
          objectContain={true}
          classes="desktop:hidden"
          lazy={true}
          imageList={photographyPortfolioSlideshow.lifestyle}
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
            imageList={photographyPortfolioCollage.boudoir}
          />
        </ContentPadding>
        <BasicSlideshow
          delay={3350}
          objectContain={true}
          classes="desktop:hidden"
          lazy={true}
          imageList={photographyPortfolioSlideshow.boudoir}
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
            imageList={photographyPortfolioCollage.corporate}
          />
        </ContentPadding>
        <BasicSlideshow
          delay={3400}
          objectContain={true}
          classes="desktop:hidden"
          lazy={true}
          imageList={photographyPortfolioSlideshow.corporate}
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
