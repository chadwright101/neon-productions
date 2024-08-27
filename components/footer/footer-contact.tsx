import { useState } from "react";

interface Props {
  classes?: string;
}

const FooterContact = ({ classes }: Props) => {
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
    <div className={classes}>
      <ul className="text-md font-light flex flex-col gap-6 items-center desktop:text-sm desktop:items-start desktop:gap-0">
        <li>
          <h3 className="text-md font-bold desktop:text-sm desktop:mb-6">
            Contact
          </h3>
        </li>
        <li className="desktop:mb-3">
          Email:{" "}
          {showEmail === "Show email address" ? (
            <button
              className="italic hover:desktop:underline underline-offset-4"
              onClick={fetchEmail}
            >
              {showEmail}
            </button>
          ) : (
            <a
              className="desktop:hover:underline underline-offset-4"
              href={`mailto:${showEmail}`}
            >
              {showEmail}
            </a>
          )}
        </li>
        <li>
          Tel:{" "}
          {showPhone === "Show phone number" ? (
            <button
              className="italic hover:desktop:underline underline-offset-4"
              onClick={fetchPhone}
            >
              {showPhone}
            </button>
          ) : (
            <a
              className="desktop:hover:underline underline-offset-4"
              href={`tel:${showPhone}`}
            >
              {showPhone}
            </a>
          )}
        </li>
      </ul>
    </div>
  );
};

export default FooterContact;
