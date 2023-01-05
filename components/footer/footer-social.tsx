import Image from "next/image";
import instagramIcon from "../../public/graphics/instagram.webp";
import facebookIcon from "../../public/graphics/Facebook.webp";
import pinterestIcon from "../../public/graphics/Pinterest.webp";

interface Props {
  classes?: string;
}

const FooterSocial = ({ classes }: Props) => {
  return (
    <ul className={`flex gap-16 desktop:gap-4 desktop:mt-[112px] ${classes}`}>
      <li>
        <a
          className="desktop:hover:opacity-75"
          href="https://www.instagram.com/neonproductionssa/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="w-12 h-full desktop:w-7"
            src={instagramIcon}
            alt="Instagram logo"
            loading="lazy"
          />
        </a>
      </li>
      <li>
        <a
          className="desktop:hover:opacity-75"
          href="https://www.facebook.com/neonphotoproductions/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="w-12 h-full desktop:w-7"
            src={facebookIcon}
            alt="Facebook logo"
            loading="lazy"
          />
        </a>
      </li>
      <li>
        <a
          className="desktop:hover:opacity-75"
          href="https://za.pinterest.com/neonproductionssa/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="w-12 h-full desktop:w-7"
            src={pinterestIcon}
            alt="Pinterest logo"
            loading="lazy"
          />
        </a>
      </li>
    </ul>
  );
};

export default FooterSocial;
