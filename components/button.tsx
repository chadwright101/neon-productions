import Link from "next/link";

interface Props {
  href: string;
  text?: string;
  classes?: string;
}

const Button = ({ href, text, classes }: Props) => {
  return (
    <div className={`w-full grid place-items-center my-6 px-4 py-1 ${classes}`}>
      <Link
        className={`font-Acid golden text-[2rem] golden-hover-1 tracking-tighter`}
        href={href}
      >
        {text || "- View More -"}
      </Link>
    </div>
  );
};

export default Button;
