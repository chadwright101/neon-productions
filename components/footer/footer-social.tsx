import Image from "next/image";

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
            className="w-12 h-auto desktop:w-7"
            src="https://ik.imagekit.io/thewrightdesigns/neon-productions/graphics/instagram.png"
            alt="Instagram logo"
            loading="lazy"
            width={100}
            height={100}
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
            className="w-[45px] h-auto desktop:w-[26px]"
            src="https://ik.imagekit.io/thewrightdesigns/neon-productions/graphics/Facebook.png"
            alt="Facebook logo"
            loading="lazy"
            width={100}
            height={100}
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
            className="w-12 h-auto desktop:w-7"
            src="https://ik.imagekit.io/thewrightdesigns/neon-productions/graphics/Pinterest.png"
            alt="Pinterest logo"
            loading="lazy"
            width={100}
            height={100}
          />
        </a>
      </li>
    </ul>
  );
};

export default FooterSocial;
