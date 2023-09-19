import { useMemo } from "react";
import "./SizesmIconOnly.css";

const SizesmIconOnly = ({
  dimensionCode,
  sizesmIconOnlyBackgroundColor,
  sizesmIconOnlyBoxShadow,
  sizesmIconOnlyBorder,
}) => {
  const sizesmIconOnlyStyle = useMemo(() => {
    return {
      backgroundColor: sizesmIconOnlyBackgroundColor,
      boxShadow: sizesmIconOnlyBoxShadow,
      border: sizesmIconOnlyBorder,
    };
  }, [
    sizesmIconOnlyBackgroundColor,
    sizesmIconOnlyBoxShadow,
    sizesmIconOnlyBorder,
  ]);

  return (
    <div className="sizesm-icononly" style={sizesmIconOnlyStyle}>
      <img className="circle-icon2" alt="" src={dimensionCode} />
    </div>
  );
};

export default SizesmIconOnly;
