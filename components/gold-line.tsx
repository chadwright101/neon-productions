import classnames from "classnames";

interface Props {
  line1?: boolean;
  line2?: boolean;
  line3?: boolean;
  vertical?: boolean;
  horizontal?: boolean;
  width?: string;
  classes?: string;
}

const GoldLine = ({
  line1,
  line2,
  line3,
  vertical,
  horizontal,
  width,
  classes,
}: Props) => {
  return (
    <div
      className={classnames(`${width}`, {
        "flex flex-col": vertical,
        "flex m-auto": horizontal,
      })}
    >
      <div
        className={classnames(`${classes}`, {
          "h-full w-[2.5px] bg-gradient-to-t": vertical,
          "w-full h-[2.75px] desktop:h-[4px] bg-gradient-to-r": horizontal,
          "from-gold1 via-gold3 to-gold2": line1,
          "from-gold2 via-gold3 to-gold1": line2,
          "from-gold1 via-gold2 to-gold4": line3,
        })}
      ></div>
      <div
        className={classnames(`${classes}`, {
          "w-full h-[2.75px] desktop:h-[4px] bg-gradient-to-r": horizontal,
          "from-gold2 via-gold5 to-gold4": line1,
          "from-gold1 via-gold4 to-gold5": line2,
          "from-gold4 via-gold2 to-gold5": line3,
        })}
      ></div>
    </div>
  );
};

export default GoldLine;
