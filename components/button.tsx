import Link from "next/link";

interface Props {
  variant: ButtonVariants;
  href: string;
  text?: string;
  classes?: string;
}

export enum ButtonVariants {
  Basic,
}

const Button = ({ variant, href, text, classes }: Props) => {
  if (variant === ButtonVariants.Basic) {
    return (
      <div
        className={`w-full grid place-items-center my-6 px-4 py-1 ${classes}`}
      >
        <Link
          className={`font-Acid golden text-[2rem] golden-hover-1 tracking-tighter`}
          href={href}
        >
          {text || "- View More -"}
        </Link>
      </div>
    );
  } else {
    return <h1>No other variant added</h1>;
  }
};

export default Button;
