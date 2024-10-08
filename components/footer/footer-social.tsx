interface Props {
  classes?: string;
}

const FooterSocial = ({ classes }: Props) => {
  return (
    <ul
      className={`flex gap-16 items-center desktop:gap-4 desktop:mt-[112px] ${classes}`}
    >
      <li>
        <a
          className="desktop:hover:opacity-75"
          href="https://www.instagram.com/neonproductionssa/"
          target="_blank"
          rel="noreferrer"
        >
          <picture>
            <source
              srcSet="/images/graphics/instagram.webp?tr=w-50"
              media="(max-width: 750px)"
            />
            <img
              src="/images/graphics/instagram.webp?tr=w-30"
              className="w-[52px] h-auto desktop:w-[30px]"
              alt="Instagram logo"
              loading="lazy"
            />
          </picture>
        </a>
      </li>
      <li>
        <a
          className="desktop:hover:opacity-75"
          href="https://www.facebook.com/neonphotoproductions/"
          target="_blank"
          rel="noreferrer"
        >
          <picture>
            <source
              srcSet="/images/graphics/Facebook.webp?tr=w-50"
              media="(max-width: 750px)"
            />
            <img
              src="/images/graphics/Facebook.webp?tr=w-30"
              className="w-[44px] h-auto desktop:w-[25px]"
              alt="Facebook logo"
              loading="lazy"
            />
          </picture>
        </a>
      </li>
      <li>
        <a
          className="desktop:hover:opacity-75"
          href="https://za.pinterest.com/neonproductionssa/"
          target="_blank"
          rel="noreferrer"
        >
          <picture>
            <source
              srcSet="/images/graphics/Pinterest.webp?tr=w-50"
              media="(max-width: 750px)"
            />
            <img
              src="/images/graphics/Pinterest.webp?tr=w-30"
              className="w-12 h-auto desktop:w-7"
              alt="Pinterest logo"
              loading="lazy"
            />
          </picture>
        </a>
      </li>
    </ul>
  );
};

export default FooterSocial;
