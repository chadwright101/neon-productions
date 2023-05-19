interface Props {
  classes?: string;
}

const FooterVendor = ({ classes }: Props) => {
  return (
    <div
      className={`desktop:absolute desktop:-translate-x-[361px] desktop:-translate-y-5 ${classes}`}
    >
      <picture>
        <source
          srcSet="https://ik.imagekit.io/thewrightdesigns/neon-productions/general/ROCKSTAR_VENDOR_BADGE.png?tr=w-144"
          media="(max-width: 750px)"
        />
        <img
          src="https://ik.imagekit.io/thewrightdesigns/neon-productions/general/ROCKSTAR_VENDOR_BADGE.png?tr=w-260"
          alt="Rockstar vendor badge"
          className="py-4 w-28 m-auto h-full desktop:w-56"
          loading="lazy"
        />
      </picture>
    </div>
  );
};

export default FooterVendor;
