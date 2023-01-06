import Image from "next/image";
import vendorBadge from "../../public/general/ROCKSTAR_VENDOR_BADGE.png";

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
        src={vendorBadge}
        alt="Rockstar vendor badge"
        loading="lazy"
      />
    </div>
  );
};

export default FooterVendor;
