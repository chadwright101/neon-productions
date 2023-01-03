interface Props {
  classes?: string;
}

const FooterVendor = ({ classes }: Props) => {
  return (
    <div
      className={`desktop:absolute desktop:-translate-x-[361px] desktop:-translate-y-5 ${classes}`}
    >
      <img
        className="py-4 w-28 m-auto h-full desktop:w-56"
        src="/general/ROCKSTAR_VENDOR_BADGE.webp"
        alt="Rockstar vendor badge"
        loading="lazy"
      />
    </div>
  );
};

export default FooterVendor;
