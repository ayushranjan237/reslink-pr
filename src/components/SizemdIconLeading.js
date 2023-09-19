import { useMemo } from "react";
import "./SizemdIconLeading.css";

const SizemdIconLeading = ({
  circle,
  text,
  sizemdIconLeadingBorderRadius,
  sizemdIconLeadingBackgroundColor,
  sizemdIconLeadingBorder,
  sizemdIconLeadingPadding,
  textFontFamily,
  textColor,
}) => {
  const sizemdIconLeadingStyle = useMemo(() => {
    return {
      borderRadius: sizemdIconLeadingBorderRadius,
      backgroundColor: sizemdIconLeadingBackgroundColor,
      border: sizemdIconLeadingBorder,
      padding: sizemdIconLeadingPadding,
    };
  }, [
    sizemdIconLeadingBorderRadius,
    sizemdIconLeadingBackgroundColor,
    sizemdIconLeadingBorder,
    sizemdIconLeadingPadding,
  ]);

  const textStyle = useMemo(() => {
    return {
      fontFamily: textFontFamily,
      color: textColor,
    };
  }, [textFontFamily, textColor]);

  return (
    <div className="sizemd-iconleading" style={sizemdIconLeadingStyle}>
      <img className="circle-icon" alt="" src={circle} />
      <div className="text" style={textStyle}>
        {text}
      </div>
    </div>
  );
};

export default SizemdIconLeading;
