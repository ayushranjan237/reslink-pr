import { useMemo } from "react";
import "./StateDefaultTypeSearchI.css";

const StateDefaultTypeSearchI = ({
  searchIcon,
  stateDefaultTypeSearchIWidth,
  stateDefaultTypeSearchIPosition,
  stateDefaultTypeSearchITop,
  stateDefaultTypeSearchILeft,
  rectangleDivBorderRadius,
  rectangleDivBackgroundColor,
  textWidth,
  searchFontFamily,
  searchColor,
  searchOpacity,
}) => {
  const stateDefaultTypeSearchIStyle = useMemo(() => {
    return {
      width: stateDefaultTypeSearchIWidth,
      position: stateDefaultTypeSearchIPosition,
      top: stateDefaultTypeSearchITop,
      left: stateDefaultTypeSearchILeft,
    };
  }, [
    stateDefaultTypeSearchIWidth,
    stateDefaultTypeSearchIPosition,
    stateDefaultTypeSearchITop,
    stateDefaultTypeSearchILeft,
  ]);

  const rectangleDivStyle = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius,
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBorderRadius, rectangleDivBackgroundColor]);

  const text2Style = useMemo(() => {
    return {
      width: textWidth,
    };
  }, [textWidth]);

  const searchStyle = useMemo(() => {
    return {
      fontFamily: searchFontFamily,
      color: searchColor,
      opacity: searchOpacity,
    };
  }, [searchFontFamily, searchColor, searchOpacity]);

  return (
    <div
      className="statedefault-typesearch-i"
      style={stateDefaultTypeSearchIStyle}
    >
      <div className="background">
        <div className="background-child" style={rectangleDivStyle} />
      </div>
      <div className="text2" style={text2Style}>
        <div className="search" style={searchStyle}>
          Search
        </div>
      </div>
      <img className="search-icon" alt="" src={searchIcon} />
    </div>
  );
};

export default StateDefaultTypeSearchI;
