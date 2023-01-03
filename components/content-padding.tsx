import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  classes?: string;
}

const ContentPadding = ({ classes, children }: Props) => {
  return (
    <div className="flex justify-center">
      <div className={`mx-8 desktop:mx-8 desktop:w-[1000px] ${classes}`}>
        {children}
      </div>
    </div>
  );
};

export default ContentPadding;
