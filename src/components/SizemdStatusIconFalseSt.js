import { useMemo } from "react";
import "./SizemdStatusIconFalseSt.css";

const SizemdStatusIconFalseSt = ({
  textFontFamily,
  textColor,
  supportingTextFontFamily,
  supportingTextColor,
}) => {
  const text3Style = useMemo(() => {
    return {
      fontFamily: textFontFamily,
      color: textColor,
    };
  }, [textFontFamily, textColor]);

  const supportingTextStyle = useMemo(() => {
    return {
      fontFamily: supportingTextFontFamily,
      color: supportingTextColor,
    };
  }, [supportingTextFontFamily, supportingTextColor]);

  return (
    <div className="sizemd-status-iconfalse-st">
      <img className="avatar-icon" alt="" src="/avatar@2x.png" />
      <div className="text-and-supporting-text">
        <div className="text3" style={text3Style}>
          Olivia Rhye
        </div>
        <div className="supporting-text" style={supportingTextStyle}>
          olivia@untitledui.com
        </div>
      </div>
    </div>
  );
};

export default SizemdStatusIconFalseSt;
