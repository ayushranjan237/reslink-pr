import { useMemo } from "react";
import "./SizemdHierarchyPrimaryIc.css";

const SizemdHierarchyPrimaryIc = ({
  circle,
  text,
  sizemdHierarchyPrimaryIcPosition,
  sizemdHierarchyPrimaryIcTop,
  sizemdHierarchyPrimaryIcRight,
  buttonBaseBorderRadius,
  buttonBaseBackgroundColor,
  buttonBaseBorder,
  buttonBasePadding,
  textFontFamily,
  textColor,
}) => {
  const sizemdHierarchyPrimaryIcStyle = useMemo(() => {
    return {
      position: sizemdHierarchyPrimaryIcPosition,
      top: sizemdHierarchyPrimaryIcTop,
      right: sizemdHierarchyPrimaryIcRight,
    };
  }, [
    sizemdHierarchyPrimaryIcPosition,
    sizemdHierarchyPrimaryIcTop,
    sizemdHierarchyPrimaryIcRight,
  ]);

  const buttonBaseStyle = useMemo(() => {
    return {
      borderRadius: buttonBaseBorderRadius,
      backgroundColor: buttonBaseBackgroundColor,
      border: buttonBaseBorder,
      padding: buttonBasePadding,
    };
  }, [
    buttonBaseBorderRadius,
    buttonBaseBackgroundColor,
    buttonBaseBorder,
    buttonBasePadding,
  ]);

  const text1Style = useMemo(() => {
    return {
      fontFamily: textFontFamily,
      color: textColor,
    };
  }, [textFontFamily, textColor]);

  return (
    <div
      className="sizemd-hierarchyprimary-ic"
      style={sizemdHierarchyPrimaryIcStyle}
    >
      <div className="button-base" style={buttonBaseStyle}>
        <img className="circle-icon1" alt="" src={circle} />
        <div className="text1" style={text1Style}>
          {text}
        </div>
      </div>
    </div>
  );
};

export default SizemdHierarchyPrimaryIc;
