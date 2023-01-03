export enum LineVariant {
  Line1,
  Line2,
  Line3,
}

export enum LineDirection {
  Vertical,
  Horizontal,
}

interface Props {
  variant?: LineVariant;
  direction?: LineDirection;
  width?: string;
  classes?: string;
}

const GoldLine = ({ variant, direction, width, classes }: Props) => {
  let containerClassNames;
  let directionClassNames;
  let variantLineClassNames = {
    line1: "",
    line2: "",
  };

  switch (direction) {
    case LineDirection.Vertical:
      containerClassNames = "flex flex-col";
      directionClassNames = "h-full w-[2.5px] bg-gradient-to-t";
      break;
    case LineDirection.Horizontal:
    default:
      containerClassNames = "flex m-auto";
      directionClassNames =
        "w-full h-[2.75px] desktop:h-[4px] bg-gradient-to-r";
      break;
  }

  switch (variant) {
    case LineVariant.Line1:
      variantLineClassNames.line1 = "from-gold1 via-gold3 to-gold2";
      variantLineClassNames.line2 = "from-gold2 via-gold5 to-gold4";
      break;
    case LineVariant.Line2:
      variantLineClassNames.line1 = "from-gold2 via-gold3 to-gold1";
      variantLineClassNames.line2 = "from-gold1 via-gold4 to-gold5";
      break;
    case LineVariant.Line3:
    default:
      variantLineClassNames.line1 = "from-gold1 via-gold2 to-gold4";
      variantLineClassNames.line2 = "from-gold4 via-gold2 to-gold5";
      break;
  }

  return (
    <div className={`${containerClassNames} ${width}`}>
      <div
        className={`${variantLineClassNames.line1} ${directionClassNames} ${classes}`}
      ></div>
      <div
        className={`${variantLineClassNames.line2} ${directionClassNames} ${classes}`}
      ></div>
    </div>
  );
};

export default GoldLine;
