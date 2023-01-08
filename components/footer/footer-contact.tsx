interface Props {
  classes?: string;
}

const FooterContact = ({ classes }: Props) => {
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
          <a
            className="desktop:hover:underline"
            href="mailto:morgan@neonproductions.co.za"
          >
            morgan@neonproductions.co.za
          </a>
        </li>
        <li>
          Tel:{" "}
          <a className="desktop:hover:underline" href="tel:+27827728980">
            082 772 8980
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterContact;
