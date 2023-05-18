import Image from "next/image";

interface Props {
  classes?: string;
}

const FooterVendor = ({ classes }: Props) => {
  return (
    <div
      className={`desktop:absolute desktop:-translate-x-[361px] desktop:-translate-y-5 ${classes}`}
    >
      <Image
        className="py-4 w-28 m-auto h-full desktop:w-56"
        src="https://ik.imagekit.io/thewrightdesigns/neon-productions/general/ROCKSTAR_VENDOR_BADGE.png"
        alt="Rockstar vendor badge"
        loading="lazy"
        width={200}
        height={250}
      />
    </div>
  );
};

export default FooterVendor;
