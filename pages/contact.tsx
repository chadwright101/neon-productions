import Image from "next/image";
import { useState } from "react";
import Head from "next/head";

import ContentPadding from "../components/content-padding";
import Heading, { HeadingVariant } from "../components/heading";

const Contact = () => {
  const [showEmail, setShowEmail] = useState("Show email address");
  const [showPhone, setShowPhone] = useState("Show phone number");

  const fetchPhone = async () => {
    try {
      const response = await fetch("/api/contact-details");
      const data = await response.json();
      setShowPhone(data.phone);
    } catch (error) {
      console.error("Error fetching contact data:", error);
    }
  };

  const fetchEmail = async () => {
    try {
      const response = await fetch("/api/contact-details");
      const data = await response.json();
      setShowEmail(data.email);
    } catch (error) {
      console.error("Error fetching contact data:", error);
    }
  };

  return (
    <ContentPadding>
      <Head>
        <title>Contact - Neon Productions</title>
        <meta
          name="description"
          content="Contact number and email for Neon Productions"
        />
      </Head>
      <Heading variant={HeadingVariant.PageHeading}>Contact Me</Heading>
      <main className="flex flex-col gap-10 desktop:flex-row desktop:justify-between desktop:gap-0">
        <div>
          <ul className="flex flex-col gap-8 text-md desktop:text-lg">
            <li className="flex gap-4 items-center font-light">
              <Image
                className="hidden tablet:block w-12 h-full"
                src="/images/graphics/Untitled-zdfgbc.webp"
                alt="Email address icon"
                width={100}
                height={100}
              />
              {showEmail === "Show email address" ? (
                <button
                  className="italic hover:desktop:underline underline-offset-4"
                  onClick={fetchEmail}
                >
                  {showEmail}
                </button>
              ) : (
                <a
                  className="text-blue hover:desktop:underline underline-offset-4"
                  href={`mailto:${showEmail}`}
                >
                  {showEmail}
                </a>
              )}
            </li>
            <li className="flex gap-4 items-center font-light">
              <Image
                className="hidden tablet:block w-12 h-full"
                src="/images/graphics/dxhfg.webp"
                alt="Phone number icon"
                width={100}
                height={100}
              />
              {showPhone === "Show phone number" ? (
                <button
                  className="italic hover:desktop:underline underline-offset-4"
                  onClick={fetchPhone}
                >
                  {showPhone}
                </button>
              ) : (
                <a
                  className="text-blue hover:desktop:underline underline-offset-4"
                  href={`tel:${showPhone}`}
                >
                  {showPhone}
                </a>
              )}
            </li>
          </ul>
          <ul className="mt-8 flex gap-8 text-lg font-light desktop:flex-col">
            <li className="flex gap-4 items-center -translate-x-1">
              <a
                className=" desktop:hover:opacity-75"
                href="https://www.instagram.com/neonproductionssa/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="w-[53px] h-full"
                  src="/images/graphics/instagram.webp"
                  alt="Instagram logo"
                  width={100}
                  height={100}
                />
              </a>
              <a
                className="hidden desktop:block hover:desktop:underline underline-offset-4"
                href="https://www.instagram.com/neonproductionssa/"
                target="_blank"
                rel="noreferrer"
              >
                @neonproductionssa
              </a>
            </li>
            <li className="flex gap-4 items-center">
              <a
                className="desktop:hover:opacity-75"
                href="https://www.facebook.com/neonphotoproductions/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="w-[43px] h-full"
                  src="/images/graphics/Facebook.webp"
                  alt="Facebook logo"
                  width={100}
                  height={100}
                />
              </a>
              <a
                className="hidden desktop:block hover:desktop:underline underline-offset-4"
                href="https://www.facebook.com/neonphotoproductions/"
                target="_blank"
                rel="noreferrer"
              >
                www.facebook.com/neonphotoproductions
              </a>
            </li>
            <li className="flex gap-4 items-center">
              <a
                className="desktop:hover:opacity-75"
                href="https://za.pinterest.com/neonproductionssa/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="w-12 h-full"
                  src="/images/graphics/Pinterest.webp"
                  alt="Pinterest logo"
                  width={100}
                  height={100}
                />
              </a>
              <a
                className="hidden desktop:block hover:desktop:underline underline-offset-4"
                href="https://za.pinterest.com/neonproductionssa/"
                target="_blank"
                rel="noreferrer"
              >
                pinterest.com/neonproductionssa
              </a>
            </li>
          </ul>
        </div>
        <picture>
          <source
            srcSet="/images/contact/bts.webp?tr=h-500"
            media="(max-width: 500px)"
          />
          <source
            srcSet="/images/contact/bts.webp?tr=w-750"
            media="(max-width: 1000px)"
          />
          <img
            src="/images/contact/bts.webp?tr=w-350"
            alt="Morgan on location at a photoshoot"
            className="w-[750px] h-[500px] object-cover mt-12 desktop:w-[350px] desktop:h-[370px] -translate-y-12"
          />
        </picture>
      </main>
    </ContentPadding>
  );
};

export default Contact;
