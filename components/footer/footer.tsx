import Link from "next/link";
import GoldLine, { LineDirection } from "../gold-line";
import FooterContact from "./footer-contact";
import FooterSocial from "./footer-social";
import FooterVendor from "./footer-vendor";

import desktopFooterList from "../../data/menu-items.json";

const Footer = () => {
  return (
    <footer className="mt-10">
      {/* Mobile footer */}
      <div className="desktop:hidden">
        <div className="flex flex-col gap-6 items-center border-y border-y-black py-4 bg-white drop-shadow-desktop">
          <FooterContact />
          <FooterSocial />
        </div>
        <FooterVendor />
      </div>
      {/* Desktop footer */}
      <div className="hidden desktop:flex desktop:justify-center gap-6 border-t border-t-black py-12 bg-flowers bg-no-repeat bg-center">
        <FooterVendor />
        <div className="w-72">
          <h5 className="font-bold text-right mb-6 text-sm">Navigation</h5>
          <ul className="text-right font-light text-sm flex flex-col gap-3.5">
            {desktopFooterList.map((item, index) => (
              <li key={index}>
                <Link className="hover:underline" href={item.href}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <GoldLine direction={LineDirection.Vertical} />

        <div className="w-72">
          <FooterContact />
          <FooterSocial />
        </div>
      </div>
      <h6 className="text-center pb-3 font-light desktop:text-sm desktop:mt-4">
        © Neon Productions |{" "}
        <a
          className="text-blue desktop:hover:underline"
          href="https://www.neonproductions.co.za"
        >
          www.neonproductions.co.za
        </a>
      </h6>
    </footer>
  );
};

export default Footer;
