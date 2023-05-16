import { ReactNode } from "react";

export enum HeadingVariant {
  PageHeading,
  Subheading,
}

interface Props {
  children: ReactNode;
  variant: HeadingVariant;
}

const Heading = ({ children, variant }: Props) => {
  if (variant === HeadingVariant.PageHeading) {
    return (
      <h1 className="text-[3.49rem] tablet:text-[3.75rem] desktop:text-[4rem] my-8 golden">
        {children}
      </h1>
    );
  } else if (variant === HeadingVariant.Subheading) {
    return (
      <h2 className="text-[3rem] desktop:text-[3.25rem] my-8 golden">
        {children}
      </h2>
    );
  } else {
    return null;
  }
};

export default Heading;
